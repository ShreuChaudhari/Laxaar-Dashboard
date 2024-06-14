import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/reset.css';  // Ensure this line is present
import './index.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
