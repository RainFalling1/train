import React from 'react';
import ReactDOM from 'react-dom';
import "@babel/polyfill";
import './index.css';
// 引入
import TrainRouter from './pages/router/TrainRouter';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <TrainRouter />,
  document.getElementById('container'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
