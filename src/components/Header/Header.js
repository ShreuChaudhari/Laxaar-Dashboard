// Header.js
import React from 'react';
import { Layout, Menu, Button, Dropdown } from 'antd';
import { MenuFoldOutlined, UserOutlined, FileTextOutlined , GlobalOutlined } from '@ant-design/icons'; // Import icons
import styles from './Header.module.scss'; // Assuming you renamed the CSS file to module for better scoping
import userProfileImage from './user.jpg'; // Import your user profile image

const { Header } = Layout;

const AppHeader = () => {
  const handleMenuClick = (e) => {
    if (e.key === 'signout') {
      // Handle signout action
      console.log('Signing out...');
    } else {
      // Handle other menu items if needed
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="userInfo">
        <div className={styles.userBox}>
          <img src={userProfileImage} alt="User" className={styles.userImage} />
          <div className={styles.userInfoText}>
            <p>User15432</p>
            <p>User15432@gzp.ru</p>
          </div>
        </div>
      </Menu.Item>
      <Menu.Item key="signout">
        <Button type="primary" danger block>Sign out</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className={styles.header}>
      <div className={styles.title}>
        <MenuFoldOutlined style={{ marginRight: '10px', color: 'black' }} />
        <div className={styles.dot}></div>
        <div className={styles.titleText}>
          <span className={styles.arivaa}>arivaa</span>
          <span className={styles.service}>Service</span>
          <span className={styles.jobs}>job</span>
        </div>
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1', '2']} className={styles.menu}>
        {/* Add your menu items here */}
      </Menu>
      <div className={styles.rightContainer}>
        {/* Added FileOutlined icon to Documentation button */}
        <Button type="primary" className={styles.button} style={{ right: '3%' }}>
        <FileTextOutlined /> Documentation
        </Button>
        {/* Added GlobalOutlined icon to English button */}
        <Button type="primary" className={styles.button} style={{right: '3%' }}>
          <GlobalOutlined /> English
        </Button>
        <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
          <span className={styles.userProfile}>
            <img src={userProfileImage} alt="User" className={styles.userImage} />
          </span>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;
