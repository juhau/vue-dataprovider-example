import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export default {
  namespaced: true,
  state: {
    users: [],
    loading: false,
  },
  getters: {
    get(state) {
      return state.users;
    },
    loading(state) {
      return state.loading;
    },
  },
  mutations: {
    load(state, value) {
      state.users = value;
    },
    loading(state, value) {
      state.loading = value;
    },
  },
  actions: {
    load({ commit }) {
      const url = '/users';

      commit('loading', true);

      Axios.get(url).then(({ data }) => {
        commit('load', data);
      }).then(() => commit('loading', false));
    },
  },

};
