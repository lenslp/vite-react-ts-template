import { Button, Checkbox, Form, Input } from 'antd';
import classNames from 'classnames';

import styles from './index.module.less';

const Login = ({ history }) => {
  const [form] = Form.useForm();

  const onFinish = async values => {
    console.log(values);
    history.push('/home');
  };

  return (
    <div className={classNames(styles.container)}>
      <div className={styles.main}>
        <h1 className={styles.title}>登录</h1>
        <Form
          name="normal_login"
          form={form}
          onFinish={onFinish}
          validateTrigger="onBlur"
        >
          <Form.Item
            name="accountName"
            rules={[
              {
                required: true,
                message: '账号必须填写!',
              },
            ]}
          >
            <Input placeholder="请输入账号" autoComplete="off" allowClear />
          </Form.Item>
          <Form.Item
            name="accountPassword"
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
                        new Error('请输入8-20位密码，字母/数字/符号至少2种'),
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
            <Input.Password
              placeholder="请输入密码"
              autoComplete="new-password"
              allowClear
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住密码</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" block htmlType="submit" size="large">
              登录
            </Button>
            <div className={styles.registerBtn}>
              你还没有账号？点击
              <a
                onClick={() => {
                  history.push('/user/register');
                }}
              >
                注册
              </a>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
