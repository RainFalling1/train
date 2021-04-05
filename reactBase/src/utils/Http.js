/**
 * request 网络请求工具
 */
import axios from 'axios';
// 添加请求拦截器
axios.interceptors.request.use(async (config) => {
  const set = config;
  set.url = `https://api.github.com/${config.url}`;
  config.headers['x-ratelimit-limit'] = 60;
  return set;
}, (error) => {
  // 网络出错处理
  console.warn(error);
});

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => response.data,
  (error) => {
    throw error;
  },
);

export default axios;
