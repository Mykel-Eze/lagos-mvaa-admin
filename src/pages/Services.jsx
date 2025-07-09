/* eslint-disable no-unused-vars */
import React from 'react';
import { Layout } from 'antd';
import ServicesComponent from '../components/ServicesComponent';
const { Content } = Layout;

const Services = () => {
  return (
    <Layout id="servicespage" className="min-h-screen">
      <Content>
        <ServicesComponent />

      </Content>
    </Layout>
  );
};

export default Services;