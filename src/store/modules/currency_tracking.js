import axios from "axios";
const state = {
  currencyState: []
};
const getters = {
  getCurrency: (state) => state.currencyState,
};
const mutations = {
  setCurrency: (state, currency) => {
    state.currencyState = currency;
  },
};
const actions = {
  fetchCurrency: async ({ commit }) => {
    const client = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
    });
    const response = await client.get();
    commit("setCurrency", response.data.TCMB_AnlikKurBilgileri);
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
