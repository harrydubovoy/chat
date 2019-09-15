import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router";

// Ant UI
import {
  Form,
  Input,
  Icon,
  Button,
} from 'antd';

// Actions
import { register } from '../../store/auth';

class RegisterForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, data) => {
      if (!err) {
        this.props.register(data);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="auth-form">
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
              <Button onClick={this.props.history.goBack}>Cancel</Button>
            </div>
          </div>
        </Form.Item>
      </Form>
    );
  }
}

const actionCreators = {
  register
};

const WrappedRegisterForm = Form.create({ name: 'register' })(RegisterForm);

export default connect(null, actionCreators)(withRouter(WrappedRegisterForm));