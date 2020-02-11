import axios from 'axios';

axios.interceptors.response.use(response => { // 请求正确
  if (response.status === 200 && response.data) {
    console.log('response', response)
    return response;
  } else {
    console.log('response.data.message', response.data)
    return response
  }
}, error => { // 错误
  const response = error.response
  if (response.status === 401) {
    console.log('401')
  } else {
    console.log('else 401')
  }
  return Promise.resolve(error.response); // 转为 Promise 对象 
})

// 解决http请求的缓存问题,加一个时间戳
let date = new Date();
let timer = date.getTime().toString();

function request(method, url, data) {
  return axios({
    method: method,
    url: url + `&t=${timer}`,
    data: data,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
    }
  })
}

// 热门城市列表
export const getPopCityList = () => request('get', '/v1/cities?type=hot')
