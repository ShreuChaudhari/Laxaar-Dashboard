import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import AppHeader from './components/Header/Header';
import Sidebar from './components/sidebar/sidebar';
import CenteredContainer from './components/CenteredContainer/CenteredContainer';
import Customer from './components/CenteredContainer/Customer'
import './App.scss';


const { Sider, Content } = Layout;



const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FA541C', // Change the primary color to your desired color
        },
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <AppHeader />
        <Layout>
          <Sider width={250} style={{ background: 'orange' }}>
            <Customer/>
            <Sidebar />
            
          </Sider>
          <Content>
            <CenteredContainer />
            <div className=
            "centered">
    
    </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
