/*
 * @Description:
 * @Author: QiangWei
 * @Date: 2019-12-11 17:57:43
 * @LastEditors  : QiangWei
 * @LastEditTime : 2020-01-10 15:43:13
 */
import { Module, ActionTree, MutationTree, GetterTree } from 'vuex'
import { CommonState } from './types'
import { RootState } from '../types'
import Vue from 'vue'
// import { api } from '@/api'
import axios from '@/plugins/axios'
import { handleWebStorage } from '@/plugins/utils'

// state
export const state: CommonState = {
    channelList: [],
    serviceList: []
}

// getters
export const getters: GetterTree<CommonState, RootState> = {
    // getChannelList(state: CommonState): string {
    //   return state.channelList;
    // },
    // getServiceList(state: CommonState): string {
    //   return state.serviceList;
    // }
}

// mutations
export const mutations: MutationTree<CommonState> = {
    // updateChannelList(state: CommonState, payload) {
    //   state.channelList = payload;
    // },
    // updateServiceList(state: CommonState, payload) {
    //   state.serviceList = payload;
    // }
}

// actions
export const actions: ActionTree<CommonState, RootState> = {
    // 获取通道列表
    // async getChannelList({ dispatch, commit }, data) {
    //   try {
    //     const res: any = await Vue.axios.get(api.commChannelList, {
    //       params: data
    //     });
    //     commit('updateChannelList', res.data.records);
    //   } catch (err) {
    //     throw new Error(err || 'Unknow Error!');
    //   }
    // },
    // 获取业务列表
    // async getServiceList({ dispatch, commit }, data) {
    //   try {
    //     const res: any = await Vue.axios.get(api.commServiceList, {
    //       params: data
    //     });
    //     commit('updateServiceList', res.data.records);
    //   } catch (err) {
    //     throw new Error(err || 'Unknow Error!');
    //   }
    // }

}

const namespaced = true
export const common: Module<CommonState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}
