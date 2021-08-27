import { getApiUrl, getConfig } from "@/api/index";
import  { Trainer }  from "@/interfaces/Trainer";
import axios from 'axios';

export default {
  namespaced: true,

  state: {
    trainerData: [],
  },

  mutations: {
    SET_TRAINER_DATA(state: { trainerData: Array<Trainer> }, data: Array<Trainer>) {
      state.trainerData = data
    },
  },

  actions: {
    async getTrainers({ commit }: any, paramsUrl = '') {
      try {
        const response = await axios.get(getApiUrl()+`/trainers${paramsUrl}`, getConfig());
        commit('SET_TRAINER_DATA', response.data.data);
      } catch (error) {
        console.log(error.response);
      }
    },
  },
}