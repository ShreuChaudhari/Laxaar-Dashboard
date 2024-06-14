import React from 'react';
import { Menu } from 'antd';
import {
  ShoppingCartOutlined,
  UserOutlined,
  StarOutlined,
  TeamOutlined,
  SettingOutlined,
  MessageOutlined,
  MailOutlined,
  FileTextOutlined,
  AppstoreOutlined,
  ExclamationCircleOutlined,
  DashboardOutlined,
  SolutionOutlined,
  FileDoneOutlined,
  CustomerServiceOutlined,
  ToolOutlined,
  ControlOutlined,
  GoldOutlined,
  AlertOutlined,
  UsergroupAddOutlined,
  DatabaseOutlined,
  AuditOutlined,
  ToolFilled,
  ScheduleOutlined,
  TransactionOutlined
} from '@ant-design/icons';
import './sidebar.module.scss';

const items = [
  {
    key: '1',
    label: 'Dashboard',
    icon: <AppstoreOutlined />, 
  },
  {
    key: '2',
    label: 'Service Jobs',
    icon: <ControlOutlined />,
  },
  {
    key: '3',
    label: 'Invoices',
    icon: <FileDoneOutlined />,
  },
  {
    key: '4',
    label: 'Customers',
    icon: <ShoppingCartOutlined />,
  },
  {
    key: '5',
    label: 'Products',
    icon: <StarOutlined />,
  },
  {
    key: '6',
    label: 'Offered Services',
    icon: <SolutionOutlined />,
  },
  {
    key: '7',
    label: 'Parts',
    icon: <ToolOutlined />,
  },
  {
    key: '8',
    label: 'Enquiries',
    icon: <AlertOutlined />,
  },
  {
    key: '9',
    label: 'Users',
    icon: <UsergroupAddOutlined />,
  },
  {
    key: '10',
    label: 'Permissions',
    icon: <GoldOutlined />,
  },
  {
    key: '11',
    label: 'Roles',
    icon: <UserOutlined />,
  },
  {
    key: '12',
    label: 'Email Templates',
    icon: <MailOutlined />,
  },
  {
    key: '13',
    label: 'PDF Templates',
    icon: <FileTextOutlined />,
  },
  {
    key: '14',
    label: 'SMS Templates',
    icon: <MessageOutlined />,
  },
  {
    key: '15',
    label: 'Theming',
    icon: <AuditOutlined />,
  },
  {
    key: '16',
    label: 'Payment Gateways',
    icon: <TransactionOutlined />,
  },
  {
    key: '17',
    label: 'Backup',
    icon: <DatabaseOutlined />,
  },
  {
    key: '18',
    label: 'Configurations',
    icon: <ToolFilled />,
  },
  {
    key: '19',
    label: 'Settings',
    icon: <SettingOutlined />,
  }
];

const Sidebar = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
    <div className="sidebar">
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default Sidebar;
