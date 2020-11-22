/*
 * @Description: Axios 二次封装(增加默认配置、请求拦截和响应拦截)
 * @Author: QiangWei
 * @Date: 2020-01-10 14:44:37
 * @LastEditors  : QiangWei
 * @LastEditTime : 2020-01-10 14:56:25
 */
// import router from '../router';
import axios from 'axios'
import store from '../store'
import { handleWebStorage } from '@/plugins/utils'

const Axios = axios.create({
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    }
})
const baseUrl = 'http://218.6.173.214:11100'

// http request请求拦截器(所有请求发送都要执行的操作)
Axios.interceptors.request.use(
    (config: any) => {
        // 根据环境设置baseURL
        config.baseURL = baseUrl
        // if (!config.url.endsWith('/auth/token') || !config.url.endsWith('/user/register') || !config.url.endsWith('/tradeCompany/add')) {
        //   config.headers.token = sessionStorage.getItem('access_token') || null;
        // }
        return config
    }, (error) => {
        return Promise.reject(error)
    }
)

// http response响应拦截器
Axios.interceptors.response.use(
    (response: any) => {
        // 这里可以做一些响应拦截的操作
        if (response.status === 200) {
            if (response.data.code === '401') { // 登录失效或者token 过期;400: 用户登陆失败  || response.data.code === '400'
                // Vue.prototype.$message.error(response.message);
                // store.dispatch('global/logout');
                // router.push({
                //   path: '/login'
                // });
            } else if (response.data.code === '404') {
                // 接口404返回到404页面
                // router.push({
                //   path: '/404'
                // });
            }
            return response.data
        } else if (response.status === 404) {
            // 接口404返回到404页面
            // router.push({
            //   path: '/404'
            // });
        }
    }, (error) => {
        return Promise.reject(error)
    }
)

export default Axios
