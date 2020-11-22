/*
 * @Description:
 * @Author: QiangWei
 * @Date: 2019-12-11 17:57:43
 * @LastEditors  : QiangWei
 * @LastEditTime : 2020-01-10 15:44:21
 */
import { Module, ActionTree, MutationTree, GetterTree } from 'vuex'
import { GlobalState } from './types'
import { RootState } from '../types'
import Vue from 'vue'
import router from '../../router'
// import { api } from '@/api';
import axios from '@/plugins/http'
import { handleWebStorage } from '@/plugins/utils'

// 从本地获取userName
const getUserName = () => {
    const data: string = handleWebStorage.getLocalData('userName')
    return data || ''
}
// 从本地获取userId
const getUserId = () => {
    const data: string = handleWebStorage.getLocalData('userId')
    return data || ''
}
// 从本地获取SessionId
const getSessionId = () => {
    const data: string = handleWebStorage.getLocalData('sessionId')
    return data || ''
}

// state
export const state: GlobalState = {
    isLoading: true,
    userName: getUserName(),
    userId: getUserId(),
    sessionId: '',
    menuShowFullMode: false // 左侧菜单显示模式
}

// getters
export const getters: GetterTree<GlobalState, RootState> = {
    getLoadingStatus(state: GlobalState): boolean {
        return state.isLoading
    }
    // getUserName(state: GlobalState): string {
    //   return state.userName;
    // },
    // getUserId(state: GlobalState): string {
    //   return state.userId;
    // },
    // getSessionId(state: GlobalState): string {
    //   return state.sessionId;
    // },
    // menuShowFullMode(state: GlobalState): boolean {
    //   return state.menuShowFullMode;
    // }
}

// mutations
export const mutations: MutationTree<GlobalState> = {
    // updateUserName(state: GlobalState, payload) {
    //   state.userName = payload;
    // },
    // updateUserId(state: GlobalState, payload) {
    //   state.userId = payload;
    // },
    // updateSessionId(state: GlobalState, payload) {
    //   state.sessionId = payload;
    // },
    // // 修改当前侧边栏菜单显示模式
    // toggleMenuFullMode(state: GlobalState, payload) {
    //   state.menuShowFullMode = payload;
    // }
}

// actions
export const actions: ActionTree<GlobalState, RootState> = {

    // 登录
    // async login({ dispatch, commit }, data) {
    //   try {
    //     const res: any = await Vue.axios.post(api.login, data);
    //     commit('updateSessionId', res.sessionId);
    //     router.push('/directory');
    //     Vue.prototype.$message({
    //       message: `登录成功`,
    //       type: 'success'
    //     });
    //   } catch (err) {
    //     throw new Error(err || 'Unknow Error!');
    //   }
    // }

}

const namespaced = true
export const global: Module<GlobalState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}
