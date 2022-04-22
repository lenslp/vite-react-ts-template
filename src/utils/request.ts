import { message } from 'antd';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookie from 'js-cookie';

export const DEFAULT_TIP_MESSAGE = '请求失败，请刷新重试';

/**
 * 错误处理
 * @param data {Object} 请求返回的信息
 */
export function handleError(data): void {
  const msg = data.msg || DEFAULT_TIP_MESSAGE;
  message.error(msg);
}

// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.BASE_API,
});

// request interceptor
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = Cookie.get('token') || '';
    config.headers = {
      ...config.headers,
      token,
    };
    // 防止 GET 请求缓存
    if (config.method === 'get') {
      const t = new Date().getTime();
      config.params = config.params ? { ...config.params, t } : { t };
    }
    return config;
  },
  error => {
    // Do something with request error
    if (error.status === '504') {
      message.error('网关超时，请重试！');
    } else {
      message.error(`网络异常[-${error.status}]`);
    }
    Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    if (res && res.result !== 1) {
      // 需要特殊处理的错误码
      const errorCodes: string[] = [];
      if (errorCodes.includes(res?.code)) {
        //
      } else {
        handleError(res);
      }
    }
    return res;
  },
  error => {
    handleError(error);
    return Promise.reject(error);
  },
);

export default service;
