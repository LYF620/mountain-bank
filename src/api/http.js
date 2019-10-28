import Axios from 'axios';
import qs from 'qs';

const BASE_URL = 'http://localhost:8888';
// 配置Axios的url
Axios.defaults.baseURL = BASE_URL;
// 设置请求超时时间
Axios.defaults.timeout = 10000;
// 封装GET请求（这里使用promise对象封装请求）
export const httpGet = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    Axios.get(url, {
      params
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
// 封装post请求(使用promise对象封装请求)
export const httpPost = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    Axios.post(url, qs.stringify(data))
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
