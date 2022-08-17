import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from "./useAxios";

axios.get('/get').then((res) => {
  console.log('index',res)
})
/*//创建实例
const instance = axios.create({
  baseURL: 'www.baidu.com'
})*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

