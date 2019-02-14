import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 0,
  msg: 'Welcome to Your Vue.js App'
};

const mutations = {
  increase(state) {
    state.count += 1;
  },
  reset(state) {
    state.count = 0;
  }
};

const actions = {
  increaseAction({ commit }) {
    commit('increase');
  },
  resetAction({ commit }) {
    commit('reset');
  },
};

const getters = {
  getCount: state => state.count,
  getMsg: state => state.msg
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
