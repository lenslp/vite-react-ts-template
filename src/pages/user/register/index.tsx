import { Button, Checkbox, Form, Input } from 'antd';
import { useHistory } from 'react-router-dom';
import styles from './index.module.less';

const Register = () => {
  const history = useHistory();
  const [form] = Form.useForm();

  // 提交
  const onFinish = async () => {
    //
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.title}>欢迎注册</h1>
        <Form
          name="normal_register"
          form={form}
          onFinish={onFinish}
          validateTrigger="onBlur"
        >
          <Form.Item
            name="accountPhone"
            rules={[
              {
                required: true,
                message: '请输入手机号!',
              },
            ]}
          >
            <Input placeholder="请输入手机号" autoComplete="off" allowClear />
          </Form.Item>
          <Form.Item
            name="validateCode"
            rules={[
              {
                required: true,
                message: '请输入验证码!',
              },
            ]}
          >
            <Input placeholder="获取验证码" />
          </Form.Item>
          <Form.Item name="accountNickName">
            <Input placeholder="请输入用户名" autoComplete="off" allowClear />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '密码必须填写!',
              },
              () => ({
                validator(rule, value) {
                  const pwdReg = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]/;
                  if (value) {
                    if (!pwdReg.test(value)) {
                      return Promise.reject(
                        new Error('请设置8-20位密码，字母/数字/符号至少2种'),
                      );
                    }
                    if (value.length < 8 || value.length > 20) {
                      return Promise.reject(new Error('密码长度8-20位'));
                    }
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input.Password placeholder="请设置8-20位密码，字母/数字/符号至少2种" />
          </Form.Item>
          <Form.Item
            name="confirmPwd"
            rules={[
              { required: true, message: '请确认密码' },
              {
                validator: (rule, value, callback) => {
                  const pwd = form.getFieldValue('password');
                  if (value && pwd !== value) {
                    callback('两次输入的密码不一致');
                  } else {
                    callback();
                  }
                },
              },
            ]}
          >
            <Input.Password placeholder="确认密码" />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            rules={[{ required: true, message: '请阅读协议并勾选后提交' }]}
          >
            <Checkbox>
              我已阅读并接受{' '}
              <a href="" target="_blank" rel="noreferrer">
                《隐私保护政策》
              </a>
              与
              <a href="" target="_blank" rel="noreferrer">
                《网站服务条款》
              </a>
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              block
              htmlType="submit"
              className="login-form-button"
              size="large"
            >
              注册
            </Button>
            <div className={styles.registerBtn}>
              已有账号，直接
              <a
                onClick={() => {
                  history.push('/user/login');
                }}
              >
                登录
              </a>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
