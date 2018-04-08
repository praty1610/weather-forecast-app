import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex);

const defaultState = {
  cities : []
}


const state = defaultState;

const mutations = {
  SAVE_CITY_TO_CITIES_ARRAY: (state, payload) => {
    state.cities.push(payload)
  },
  DELETE_CITY_FROM_CITIES_ARRAY: (state, payload) => {
    state.cities.splice(payload, 1)
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
