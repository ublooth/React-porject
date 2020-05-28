import axios from 'axios';
import { Toast } from 'antd-mobile';

axios.interceptors.response.use(response => { // 请求正确
  if (response.status === 200) {
    // console.log('response', response)
    return response;
  } else {
    console.log('response.data.message', response.data)
    return response
  }
}, error => { // 错误
  const response = error.response
  if (response.status === 401) {
    console.log('401')
    Toast.info('请求失败', 2);
  } else {
    console.log('else 401')
    Toast.info('请求失败', 2);
  }
  return Promise.resolve(error.response); // 转为 Promise 对象 
})

// 解决http请求的缓存问题,加一个时间戳
// let date = new Date();
// let timer = date.getTime().toString();

// function post(method, url, obj) {
//   obj.t = timer;
//   return axios({
//     method: method,
//     url: url,
//     data: obj,
//     headers: {
//       'X-Requested-With': 'XMLHttpRequest',
//       'Content-Type': 'application/json',
//     }
//   })
// }
function get(url, params) {
  // params.t = timer;
  return axios({
    method: 'GET',
    url: url,
    params,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
    }
  })
}

// 热门城市列表
export const getPopCityList = (obj) => get('/v1/cities', obj)

// 所有城市
export const getAllCityList = (obj) => get('/v1/cities', obj)

// 获取当前所在城市
export const currentcity = (number, obj) => get('/v1/cities/' + number, obj);

// 搜索地址
export const searchplace = (obj) => get('/v1/pois/', obj);

//  获取msite页面食品分类列表
export const getBannerList = (geohash) => get('/v2/index_entry', {
  geohash,
  group_type: '1',
	'flags[]': 'F'
});

// cityGuess获取首页默认地址
export const cityGuess = (obj) => get('/v1/cities', obj)

// 页面地址信息
export const msiteAddress = (obj) => get(`/v2/pois/${obj}`)

/**
 * 获取msite商铺列表
 */

export const shopList = (latitude, longitude, offset, restaurant_category_id = '', restaurant_category_ids = '', order_by = '', delivery_mode = '', support_ids = []) => {
	let supportStr = '';
	support_ids.forEach(item => {
		if (item.status) {
			supportStr += '&support_ids[]=' + item.id;
		}
	});
	let data = {
		latitude,
		longitude,
		offset,
		limit: '20',
		'extras[]': 'activities',
		keyword: '',
		restaurant_category_id,
		'restaurant_category_ids[]': restaurant_category_ids,
		order_by,
		'delivery_mode[]': delivery_mode + supportStr
	};
	return get('/shopping/restaurants', data);
};