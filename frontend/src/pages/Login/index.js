import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

// Ant UI
import {
  Form,
  Input,
  Icon,
  Button,
} from 'antd';

// Layout
import AuthWrap from '../../containers/Auth';

// Actions
import { login } from '../../store/auth';

const handleSubmit = (event, props) => {
  event.preventDefault();

  props.form.validateFields((err, data) => {
    if (!err) {
      props.login(data);
    }
  });
};

const LoginForm = (props) => {

  const { getFieldDecorator } = props.form;

  return (
    <AuthWrap title='Login'>
      <Form onSubmit={(event) => handleSubmit(event, props)} className="auth-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="email"
              placeholder="Email"
              name='email'
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              name='password'
            />,
          )}
        </Form.Item>
        <Form.Item>
          <div className='auth-form__action'>
            <div className='auth-form__button'>
              <Button type="primary" htmlType="submit">Log in</Button>
            </div>
            <div className='auth-form__link'>Or <Link to='/register'>register now!</Link></div>
          </div>
        </Form.Item>
      </Form>
    </AuthWrap>
  );
};

const actionCreators = {
  login
};

const WrappedLoginForm = Form.create({ name: 'login' })(LoginForm);

export default connect(null, actionCreators)(WrappedLoginForm);