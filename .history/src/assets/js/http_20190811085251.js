import axios from 'axios'
import cookies from 'vue-cookies'
import swal from 'sweetalert2'

axios.interceptors.request.use(config => {
  return config;
}, err => {
  alert('请求超时！');
  return Promise.resolve(err);
})
axios.interceptors.response.use(data => {
  if (typeof (data.data.byteLength) == 'number') {
    return data;
  } else {
    if (data.data.meta.code == 0) {
      return data
    } else if (data.data.meta.code != 0) {
      console.log(data.data.meta.code);
      if (data.data.meta.code == 1000) {
        cookies.remove('username');
        cookies.remove('authorization');
        cookies.remove('appId');
        localStorage.removeItem('authorization');
        swal.fire({ text: "登录已过期，请重新登录！", type: 'error', title: '' });
        location.replace(`/`);
      } else if (data.data.meta.code == 1007) {
        swal.fire({ text: "密码错误，请重新输入！", type: 'error', title: '' });
        return;
      } else if (data.data.meta.code == 1111) {
        swal.fire({ text: "服务器开小差！", type: 'error', title: '' });
        return;
      } else {
        swal.fire({ text: data.data.meta.msg, type: 'error', title: '' });
        return;
      }
    }
  }
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400: err.message = '请求错误(400)'; break;
      case 401: err.message = '未授权，请重新登录(401)'; break;
      case 403: err.message = '拒绝访问(403)'; break;
      case 404: err.message = '请求出错(404)'; break;
      case 408: err.message = '请求超时(408)'; break;
      case 500: err.message = '服务器错误(500)'; break;
      case 501: err.message = '服务未实现(501)'; break;
      case 502: err.message = '网络错误(502)'; break;
      case 503: err.message = '服务不可用(503)'; break;
      case 504: err.message = '网络超时(504)'; break;
      case 505: err.message = 'HTTP版本不受支持(505)'; break;
      default: err.message = `连接出错(${err.response.status})!`;
    }
  } else {
    swal.fire({ text: '连接服务器失败!', type: 'error', title: '' });
  }
})

axios.defaults.baseURL = 'http://172.20.10.7:8080'; //填写域名

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



