import React from 'react';
import { connect } from "react-redux";

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
import { register } from '../../store/auth';

const handleSubmit = (event, props) => {
  event.preventDefault();

  props.form.validateFields((err, data) => {
    if (!err) {
      props.register(data);
    }
  });
};

const RegisterForm = (props) => {

  const { getFieldDecorator } = props.form;

  return (
    <AuthWrap title='Register'>
      <Form onSubmit={(event) => handleSubmit(event, props)} className="auth-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              name='username'
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', {
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
              <Button type="primary" htmlType="submit">Register</Button>
            </div>
            <div className='auth-form__button'>
              <Button onClick={ props.history.goBack }>Cancel</Button>
            </div>
          </div>
        </Form.Item>
      </Form>
    </AuthWrap>
  );
};

const actionCreators = {
  register
};

const WrappedRegisterForm = Form.create({ name: 'register' })(RegisterForm);

export default connect(null, actionCreators)(WrappedRegisterForm);