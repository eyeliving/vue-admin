import axios from 'axios'
// import { Notification } from 'element-ui'

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  // timeout: 5000                  // 请求超时时间
})

// if (process.env.NODE_ENV === 'production') {
// axios.defaults.baseURL = 'xxx.com';
// } else {
// axios.defaults.baseURL = 'http://127.0.0.1:8080';
// axios.defaults.baseURL = '';
// }

// 拦截request,设置全局请求为ajax请求以及配置
// axios.interceptors.request.use((config) => {
//   config.headers['X-Requested-With'] = 'XMLHttpRequest'
//   return config
// })

// 拦截响应response，并做一些错误公共处理
service.interceptors.response.use(
  (response) => {
    // 本地模拟登录/imodule-sso-server/，开发环境使用，处理用户状态session的问题
    if (process.env.NODE_ENV === 'development' && response.config.url.indexOf('/imodule-sso-server/sso/validateLogon') !== -1) {
      return Promise.resolve(response.data)
    }
    const r = response.data.result
      // 请求出错、和业务逻辑有关
      // 根据返回的code值来做不同的处理（和后端约定）
    if (!r) {
      // return Promise.reject({message: '返回数据格式错误'})
      return Promise.reject(response.data)
    }
    if (r.retcode === '0') {
      return Promise.resolve(r.data)
    } else if (r.retcode === '-1') {
      alert(r.retmsg)
      return Promise.reject(r.data)
    }
  },
  (err) => { // 请求错误、和业务逻辑无关
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break
        case 401:
          err.message = '未授权，请登录'
          break
        case 403:
          err.message = '拒绝访问'
          break
        case 404:
          err.message = `请求地址出错: ${err.response.config.url}`
          break
        case 408:
          err.message = '请求超时'
          break
        case 500:
          err.message = '服务器内部错误'
          break
        case 501:
          err.message = '服务未实现'
          break
        case 502:
          err.message = '网关错误'
          break
        case 503:
          err.message = '服务不可用'
          break
        case 504:
          err.message = '网关超时'
          break
        case 505:
          err.message = 'HTTP版本不受支持'
          break
        default:
          err.message = '系统异常，请稍后尝试'
          break
      }
    }
    // 全局错误提示
    // Notification.error({
    //       title: '错误',
    //       message: err.message,
    //       offset: 100
    // });
    // 针对不同的错误可以个别处理
    return Promise.reject(err)
  }
)

export default service
