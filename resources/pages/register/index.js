import React from 'react';

// Ant UI
import {
  Typography,
} from 'antd';

const { Title } = Typography;

// Layout
import AuthWrap from '../../containers/Auth';

// Components
import RegisterForm from '../../components/auth/RegisterForm';

const Register = () => {
  return (
    <AuthWrap>
      <div className="cv-auth-form__head">
        <Title level={3}>Register</Title>
      </div>
      <RegisterForm />
    </AuthWrap>
  );
};

export default Register;