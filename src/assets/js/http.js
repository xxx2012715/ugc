import axios from 'axios'

//填写域名
axios.defaults.baseURL = '/api';

//get请求
export const getRequest = (url) => {
  return axios({
    method: 'get',
    url: url,
  });
}
//post请求
export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: url,
    data: params,
  });
}
//put请求
export const putRequest = (url, params) => {
  return axios({
    method: 'put',
    url: url,
    data: params,
  });
}
//delete请求
export const deleteRequest = (url) => {
  return axios({
    method: 'delete',
    url: url,
  });
}
//文件上传
export const uploadFileRequest = (url, params) => {
  return axios({
    method: 'post',
    url: url,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}
