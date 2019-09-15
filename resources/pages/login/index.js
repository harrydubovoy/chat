import React from 'react';

// Ant UI
import {
  Typography,
} from 'antd';

const { Title } = Typography;

// Layout
import AuthWrap from '../../containers/Auth';

// Components
import LoginForm from '../../components/auth/LoginForm';

const Login = () => {
  return (
    <AuthWrap>
      <div className="cv-auth-form__head">
        <Title level={3}> Login</Title>
      </div>
      <LoginForm />
    </AuthWrap>
  );
};

export default Login;