import axios from 'axios'
import { MessageBox } from 'element-ui'

const service = axios.create({
  //baseURL: process.env.NODE_ENV === 'production'?'http://inqiu.com':'http://127.0.0.1:4000', 
  //timeout: 5000 // 请求超时时间
})

axios.interceptors.request.use((config) => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest'
  return config
})

service.interceptors.response.use(
  (response) => {
    const r = response.data;
    //和业务逻辑有关错误处理
    //根据返回的业务逻辑code值来做不同的处理（和后端约定）
    if(r.code === 0){
        return Promise.resolve(r)
    }else{
        return Promise.reject(r)
    }
  }, 
  (err) => {//请求错误、和业务逻辑无关
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
    MessageBox({type: 'error', title:`${err.response.status}`, message:`${ err.message }`})
    return Promise.reject(err)
  }
)


export default service
