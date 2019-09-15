import React from 'react';

// Ant UI
import {
  Layout,
} from 'antd';

const { Content } = Layout;

// Component
import Header from "../components/header";


const Base = ({ children }) => {
  return (
    <Layout className="layout layout--full-height">
      <Content className='ant-layout-content--indents'>
        <div className="cv-layout">
          <Header />
          <div className='cv-content'>
            { children }
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Base;