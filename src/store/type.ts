import { getApiUrl, getConfig } from "@/api/index";
import  { Type }  from "@/interfaces/Type";
import axios from 'axios';

export default {
  namespaced: true,

  state: {
    typeData: [],
  },

  mutations: {
    SET_TYPE_DATA(state: { typeData: Array<Type> }, data: Array<Type>) {
      state.typeData = data
    },
  },

  actions: {
    async getTypes({ commit }: any, paramsUrl = '') {
      try {
        const response = await axios.get(getApiUrl()+`/types${paramsUrl}`, getConfig());
        commit('SET_TYPE_DATA', response.data.data);
      } catch (error) {
        console.log(error.response);
      }
    },
  }
}