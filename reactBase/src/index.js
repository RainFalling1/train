import React from 'react';
import ReactDOM from 'react-dom';
// import "@babel/polyfill";
// import './index.css';
// eslint-disable-next-line import/no-unresolved
// import './styles/index.less'
// 引入
import TrainRouter from './pages/router/TrainRouter';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    // eslint-disable-next-line react/jsx-filename-extension
  <React.StrictMode>
    {/* <App /> */}
    <TrainRouter />
  </React.StrictMode>,
  document.getElementById('container'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
