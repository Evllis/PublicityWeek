import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import qs from 'qs'
import { Get, Post } from '@/plugins/interface'
import store from '@/store/index'

class Http {
    private service: any = null
    constructor(url?: string) {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
        this.service = axios.create({
            baseURL: url || '',
            timeout: 5000
        })
        this.service.interceptors.request.use((config: { data: any }) => {
            store.state.isLoading = true
            config.data = qs.stringify(config.data)
            return config
        }, (error: any) => Promise.reject(error))
        // 过滤业务Code
        const filterCode = [100, 200]
        this.service.interceptors.response.use((response: {
            status: number;
            data: { code: number };
        }) => {
            // console.log('返回参数 ==>', response);
            if (response.status === 200) {
                if (!response.data.code || filterCode.includes(response.data.code)) {
                    setTimeout((): void => {
                        store.state.isLoading = false
                    }, 500)
                    return Promise.resolve(response.data || true)
                } else {
                    return Promise.reject(response)
                }
            }
        }, (error: any) => {
            return Promise.reject(error)
        })
    }

    public get: Get = async (url: string, params: any = {}) => {
        return await this.service.get(`${url}`, { params })
    }

    public post: Post = async (url: string, data: any = {}, config: any = {}) => {
        return await this.service.post(`${url}`, data, ...config)
    }
}
export default Http
