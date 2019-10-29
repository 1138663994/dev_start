import axios from 'axios';


// 每个请求的拦截器方法可能不一样

class AjaxRequest {
  constructor() {
    this.baseURL = process.env.NODE_ENV === 'development' ? '/api/' : '/';
    this.timeout = 20000;
  }

  request(config) { // 用户请求设置的方法
    console.log('config', config)
    let headers = {
      'Content-Type': 'application/json;charset=UTF-8;',
      'X-Requested-With': 'XMLHttpRequest'
    }
    if (config && config.headers) {
      config.headers = Object.assign(headers, config.headers)
    }
    let conf = Object.assign({
      baseURL: this.baseURL,
      timeout: this.timeout,
      changeOrigin: true,
      headers
    }, config)
    console.log('conf', conf)
    const instance = axios.create(conf);
    // 设置拦截器
    instance.interceptors.request.use((config) => {
      // config.headers.Authorization = localStorage.getItem('token');
      return config;
    }, err => Promise.reject(err));
    instance.interceptors.request.use((config) => {
      // config.headers.Authorization = localStorage.getItem('token');
      return config;
    }, err => Promise.reject(err));
    // 设置响应拦截器
    instance.interceptors.response.use(res => res.data, err => Promise.reject(err));

    return instance(config);
  }
  get (url, params = {}, config= {}) {

    console.log('get')
    return this.request({
      url,
      method: 'GET',
      params,
      ...config
    })
  }
  post (url, data, config= {}) {
    return this.request({
      url,
      method: 'POST',
      data,
      ...config
    })
  }
}

export default new AjaxRequest();
