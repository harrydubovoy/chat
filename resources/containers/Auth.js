import React from 'react';

// Ant UI
import {
  Layout,
} from 'antd';

const { Content } = Layout;


const Auth = ({ children }) => {
  return (
    <Layout className="layout layout--full-height">
      <Content className='ant-layout-content--indents'>
        <div className='cv-auth'>
          <div className='cv-auth-form'>
            { children }
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Auth;