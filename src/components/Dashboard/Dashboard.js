import React from 'react';
import { Layout } from 'antd';
import AppHeader from '../Header/Header'; 
import styles from './Dashboard.scss';

const { Content, Footer } = Layout;

const Dashboard = () => {
  return (
    <Layout className={styles.layout}>
      <AppHeader />
      <Layout style={{ minHeight: '10vh' }}> {/* Set minHeight to fill the viewport */}
        <Layout style={{ padding: '20px' }}> {/* Add padding and remove unnecessary nested layout */}
          <Content className={styles.content}>
            {/* Your content goes here */}
          </Content>
         
          
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
