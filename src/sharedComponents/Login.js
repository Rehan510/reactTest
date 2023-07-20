import React from 'react';
import oneloadLogo from '../assets/images/OneloadLogo.svg';
import { Card } from 'antd';
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsLoginRequired } from '../reducers/communication';
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validateMessages = {
    types: {
      email: '${label} is not a valid email!',
      password: '${label} is not a valid number!'
    }
  };
  const onFinish = (values) => {
    console.log(values);
    dispatch(setIsLoginRequired(false));

    navigate('/communication');
  };
  const [form] = Form.useForm();
  return (
    <>
      <div className="auth-warpper login-page">
        <div className="oneloadLogo">
          <img src={oneloadLogo} />
        </div>
        <div className="input-form">
          <Card>
            <strong>
              Communication <br /> Portal
            </strong>
            <p>If you have an account, please log in with your email address.</p>

            <Form
              form={form}
              layout="vertical"
              name="nest-messages"
              onFinish={(e) => onFinish(e)}
              validateMessages={validateMessages}
            >
              <Form.Item
                name={['user', 'email']}
                label="Email Address"
                rules={[
                  {
                    type: 'email'
                  }
                ]}
              >
                <Input placeholder="Enter your email address here" className="field" />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    type: 'password'
                  }
                ]}
              >
                <Input.Password placeholder="Enter your password here" className="field" />
              </Form.Item>
              <div>
                <button className="login-btn">Login</button>
              </div>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
};
export default Login;
