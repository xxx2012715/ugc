import axios from 'axios'

//填写域名
axios.defaults.baseURL = 'http://172.20.10.2:8080/api';

//get请求
export const getRequest = (url, headers, responseType) => {
  return axios({
    method: 'get',
    url: url,
    headers: headers,
    responseType: responseType,
  });
}
//post请求
export const postRequest = (url, params, headers) => {
  return axios({
    method: 'post',
    url: url,
    data: params,
    headers: headers,
  });
}
//put请求
export const putRequest = (url, params, headers) => {
  return axios({
    method: 'put',
    url: url,
    data: params,
    headers: headers,
  });
}
//delete请求
export const deleteRequest = (url, headers) => {
  return axios({
    method: 'delete',
    url: url,
    headers: headers
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
