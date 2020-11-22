import { createStore } from 'vuex'

import { RootState } from './types'
import { global } from './global/index'
import { common } from './common/index'

export default createStore({
    state: {
        version: '1.0.0',
        isLoading: false
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        global,
        common
    }
})
