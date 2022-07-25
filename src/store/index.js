import Vue from "vue";
import Vuex from "vuex";
import currency_tracking from "./modules/currency_tracking"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {currency_tracking},
});
