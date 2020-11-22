import axios, { AxiosInstance } from 'axios'

declare module 'Vue/types/vue' {
    interface Vue {
        $axios: AxiosInstance
    }
}
