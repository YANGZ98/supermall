import axios from 'axios'
export function request(config){
  // 1.创建axios 实例
  const instance = axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout:5000
  })
  // 2.设置axios的拦截器
  // 2.1请求拦截的作用
  instance.interceptors.request.use(config=>{
    // 1.比如config中的一些数据不符合服务器的要求
    // 2.比如每次发送网络请求，希望有个加载中图标
    // 3.某些网络请求（比如登录需要携带token）
    return config
  },err=>{
    
  })
  instance.interceptors.response.use(config=>{
    //响应拦截，处理数据，或关闭加载中图标
    return config.data
  },err=>{
    console.log(err);
  })

  //3.发送真正的网络请求
  return instance(config)
}