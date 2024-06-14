import React, { useState } from 'react';
import './CenteredContainer.scss';
import { Space, Table, ConfigProvider } from 'antd';
import {
  EditOutlined,
  EyeOutlined,
  DeleteOutlined,
  MailOutlined,
  PrinterOutlined,
} from '@ant-design/icons';

// Define the columns for the table
const columns = [
  {
    title: 'CUSTOMER NAME',
    dataIndex: 'name',
  },
  {
    title: 'DATE',
    dataIndex: 'date',
  },
  {
    title: 'JOB NUMBER',
    dataIndex: 'jobnumber',
  },
  {
    title: 'MOBILE NUMBER',
    dataIndex: 'mobilenumber',
  },
  {
    title: 'STATUS',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color;
          switch (tag) {
            case 'COMPLETED':
              color = 'green';
              break;
            case 'CANCEL':
              color = 'red';
              break;
            case 'PROCESSING':
              color = '#FFC107';
              break;
            default:
              color = 'black';
          }
          return (
            <span style={{ color, fontWeight: 'bold' }} key={tag}>
              {tag.toUpperCase()}
            </span>
          );
        })}
      </>
    ),
  },
  {
    title: 'ACTIONS',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <span className="icon-container" data-tooltip="Edit">
          <EditOutlined style={{ color: '#FA541C' }} />
        </span>
        <span className="icon-container" data-tooltip="View">
          <EyeOutlined style={{ color: '#FA541C' }} />
        </span>
        <span className="icon-container" data-tooltip="Delete">
          <DeleteOutlined style={{ color: '#FA541C' }} />
        </span>
        <span className="icon-container" data-tooltip="Mail">
          <MailOutlined style={{ color: '#FA541C' }} />
        </span>
        <span className="icon-container" data-tooltip="Print">
          <PrinterOutlined style={{ color: '#FA541C' }} />
        </span>
      </Space>
    ),
  },
];

// Define the data for the table
const data = [];
for (let i = 0; i < 7; i++) {
  data.push({
    key: `row_${i}`,
    name: 'Rida Talbi',
    date: '04/10/2021; 02.10 PM',
    jobnumber: 'ABC000006',
    mobilenumber: '0661425689',
    tags: i % 2 === 0 ? ['COMPLETED'] : ['PROCESSING'],
  });
}

// Add a specific entry with the 'CANCEL' status without changing the name
data.push({
  key: 'row_7',
  name: 'Rida Talbi',
  date: '04/11/2021; 03.15 PM',
  jobnumber: 'ABC000007',
  mobilenumber: '0661425690',
  tags: ['CANCEL'],
});

const App = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 'calc(50% + 200px)',
        left: '60%',
        transform: 'translate(-50%, -50%)',
        width: '900px',
      }}
    >
      <ConfigProvider theme={{ token: { colorPrimary: '#FA541C' } }}>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          rowKey={(record) => record.key} // Assigning rowKey dynamically
        />
      </ConfigProvider>
    </div>
  );
};

export default App;
