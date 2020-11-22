import {AxiosResponse, AxiosRequestConfig, CustomSuccessData} from 'axios'

// 泛型接口
export interface Get {
    <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<CustomSuccessData<T>>;
}

export interface Post {
    <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<CustomSuccessData<T>>;
}

export interface SwiperType {
    type: number
}

export interface VideoType {
    video: string,
    comment: string,
    up: string,
    forward: string,
    down: string,
    name: string,
    text: string,
    [name: string]: any
}

// 返回参数类型定义
export interface Res {
    code: number,
    msg: string,
    data: any
}
