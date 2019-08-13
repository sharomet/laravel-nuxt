import { API_PATH } from '../constants';

export const state = () => ({
    users: []
});

export const mutations = {
  SET_USERS(state, users) {
      state.users = users;
  }
};

export const actions = {
  async FETCH_USERS({ commit }) {
      const users = await this.$axios.$get(API_PATH + '/users');
      commit('SET_USERS', users);
  }
};

export const getters = {
  GET_USERS: s => s.users
};