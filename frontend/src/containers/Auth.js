import React from 'react';

// Ant UI
import {
  Layout,
  Typography,
} from 'antd';

const { Content } = Layout;
const { Title } = Typography;


const Auth = ({ title, children }) => {
  return (
    <Layout className="layout layout--full-height">
      <Content className='ant-layout-content--indents'>
        <div className='cv-auth'>
          <div className='cv-auth-form'>
            <div className="cv-auth-form__head">
              <Title level={3}> {title}</Title>
            </div>
            { children }
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Auth;