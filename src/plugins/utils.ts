/*
 * @Description: 自定义封装各种工具
 * @Author: QiangWei
 * @Date: 2020-01-03 14:52:05
 * @LastEditors  : QiangWei
 * @LastEditTime : 2020-01-14 12:05:16
 */
/**
 * @description: 对本地存储 WebStorage 进行封装操作，包含设置、读取，删除和清空
 * @return: Object
 * @author: QiangWei
 */
export const handleWebStorage = {
    // 设置数据
    setLocalData: (key: any, value: any, type = 'sessionStorage') => {
        // 如果value为对象或数组，则进行序列化
        if (Object.prototype.toString.call(value) === '[object Object]' ||
            Object.prototype.toString.call(value) === '[object Array]') {
            value = JSON.stringify(value)
        }

        if (type === 'sessionStorage') {
            // 如果操作为默认的localStorge
            sessionStorage.setItem(key, value)
        } else if (type === 'sessionStorage') {
            sessionStorage.setItem(key, JSON.stringify(value))
        } else {
            throw new Error('params "type" is Error, it must able of "sessionStorage" or "sessionStorage"')
        }
    },

    // 获取数据
    getLocalData: (key: string, type: any = 'sessionStorage') => {
        if (type === 'sessionStorage') {
            const temp: string | null = sessionStorage.getItem(key)
            if (temp) {
                return temp
            }
            // return JSON.parse(sessionStorage.getItem(key));
        } else if (type === 'sessionStorage') {
            const temp: string | null = sessionStorage.getItem(key)
            if (temp) {
                return JSON.parse(temp)
            }
            // return JSON.parse(sessionStorage.getItem(key): string | null);
        }
    },

    // 删除某条数据
    removeLocalData: (key: string, type = 'sessionStorage') => {
        if (type === 'sessionStorage') {
            sessionStorage.removeItem(key)
        } else {
            sessionStorage.removeItem(key)
        }
    },

    // 清空数据
    clearLocalData: (type = 'sessionStorage') => {
        if (type === 'sessionStorage') {
            sessionStorage.clear()
        } else {
            sessionStorage.clear()
        }
    },

    // 批量将对象参数中的信息存入本地
    batchSetLocalData: (obj: any, type = 'sessionStorage') => {
        if (Object.prototype.toString.call(obj) !== '[object Object]') {
            throw new Error('params "obj" must be a Object')
        }

        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                if (type === 'sessionStorage') {
                    sessionStorage.setItem(key, obj[key])
                } else {
                    sessionStorage.setItem(key, obj[key])
                }
            }
        }
    }
}

/**
 * @description 获取当前年月日期
 * @return time
 * @author chenmo
 */
export const handleDate = {
    // 获取当前年份
    getCurrentFullYear() {
        return String(new Date().getFullYear())
    },
    // 获取当前月份
    getMonth() {
        const mon = new Date().getMonth() + 1
        return mon < 10 ? `0${mon}` : String(mon)
    },

    getDay() {
        const day = new Date().getDay()
        return day < 10 ? `0${day}` : String(day)
    },

    getFormatFullDate() {
        return this.getCurrentFullYear() +
            this.getMonth() +
            this.getDay()
    }
}

/**
 * @description 获取url参数
 * @param param string 参数名
 * @return 参数对应value
 * @author chenmo
 */
export function getQueryString(param: any) {
    const reg = new RegExp('(^|&)' + param + '=([^&]*)(&|$)')
    const r = window.location.search.split('?').length > 1
        ? window.location.search.split('?')[1].match(reg)
        : null
    if (r != null) {
        return unescape(r[2])
    }
    return null
}

/**
 * 节流
 * @param  {function} func 处理函数
 * @param  {number} mustRunDelay 触发过程中的执行处理函数规定的时间间隔
 * @param  {number} delay 停止触发及最后一次执行处理函数的延迟时间
 */
export function throttle(method: any, mustRunDelay: number, delay: number) {
    let timer: any
    let start: number
    return (...args: any[]) => {
        const now: number = Date.now()
        if (!start) {
            start = now
        }
        if (timer) {
            clearTimeout(timer)
        }
        if (now - start >= mustRunDelay) {
            method(args)
            start = now
        } else {
            timer = setTimeout(() => {
                if (now !== start) {
                    method(args)
                }
            }, delay)
        }
    }
}
/**
 * 防抖
 * @param  {function} func 处理函数
 * @param  {number} delay 延迟时间
 */
export function debounce(func: any, delay: number) {
    let timer: any = null
    return (...args: any[]) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func(args)
        }, delay)
    }
}

/**
 * @description: 判断是否登陆
 * @param : that 获取当前this
 * @return: boolean
 * @Author: ChenMo
 */
export function isLogin(that: any) {
    const token: any = sessionStorage.getItem('access_token')
    if (token) {
        return true
    } else {
        return false
    }
}
