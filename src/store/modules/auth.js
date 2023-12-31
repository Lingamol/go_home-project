import { loginUser, registerUser, logout, currentUser } from '@/services/auth.services';

const initialState = { user: '', token: '' };

export default {
  namespaced: true,
  state: { ...initialState },
  getters: {
    isLoggedIn(state) {
      return Boolean(state.token);
    },
  },
  mutations: {
    // setUserData(state, payload) {
    //   state.user = payload;
    // },
    setUserData(state, userData) {
      state.user = userData;
    },

    setToken(state, token) {
      state.token = token;
    },
    clearUserData(state) {
      Object.assign(state, { ...initialState });
    },
  },
  actions: {
    async login(context, payload) {
      const { commit } = context;
      const { data } = await loginUser(payload);
      const { user, token } = data;
      commit('setUserData', user);
      commit('setToken', token);
    },
    async registerUser(context, payload) {
      const { commit } = context;
      const { data } = await registerUser(payload);
      const { user, token } = data;
      commit('setUserData', user);
      commit('setToken', token);
    },
    async logout({ commit }) {
      await logout();
      commit('clearUserData');
    },
    async refreshUser(context) {
      const { commit } = context;
      const { data } = await currentUser();
      const { user, token } = data;
      commit('setUserData', user);
      commit('setToken', token);
    },
  },
};
