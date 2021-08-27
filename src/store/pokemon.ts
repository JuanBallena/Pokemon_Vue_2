import { getApiUrl, getConfig } from "@/api/index";
import { Pokemon } from "@/interfaces/Pokemon";
import axios from 'axios';

export default {
  namespaced: true,

  state: {
    pokemonData: [],
    pokemonPages: -1,
    savedPokemon: false,
    pokemonEdit: null
  },

  mutations: {
    SET_POKEMON_DATA(state: { pokemonData: Pokemon[] }, data: Pokemon[]) {
      state.pokemonData = data
    },

    SET_POKEMON_PAGES(state: { pokemonPages: number }, pages: number) {
      state.pokemonPages = pages
    },

    SET_SAVED_POKEMON(state: { savedPokemon: boolean }, value: boolean) {
      state.savedPokemon = value
    },

    SET_POKEMON_EDIT(state: { pokemonEdit: Pokemon }, data: Pokemon) {
      state.pokemonEdit = data
    },
  },

  actions: {
    async getPokemons({ commit }: any, paramsUrl = '') {
      try {
        const response = await axios.get(getApiUrl()+`/pokemons${paramsUrl}`, getConfig());
        commit('SET_POKEMON_DATA', response.data.data);
        commit('SET_POKEMON_PAGES', response.data.meta.last_page);
      } catch (error) {
        console.log(error.response);
      }
    },

    async savePokemon({ commit }: any, params: Pokemon) {
      commit('SET_SAVED_POKEMON', false);
      try {
        await axios.post(getApiUrl()+`/pokemons`, params, getConfig());
        commit('SET_SAVED_POKEMON', true);
      } catch (error) {
        console.log(error.response);
        commit('SET_SAVED_POKEMON', false);
      }
    },

    async getPokemonEdit({ commit }: any, idPokemon: number) {
      try {
        const response = await axios.get(getApiUrl()+`/pokemons/${idPokemon}/edit`, getConfig())
        commit('SET_POKEMON_EDIT', response.data.data);
      } catch (error) {
        console.log(error.response);
      }
    },

    async updatePokemon({ commit }: any, { idPokemon, params }: any) {
      commit('SET_SAVED_POKEMON', false);
      try {
        await axios.post(getApiUrl()+`/pokemons/${idPokemon}?_method=PUT`, params, getConfig());
        commit('SET_SAVED_POKEMON', true);
      } catch (error) {
        console.log(error.response);
        commit('SET_SAVED_POKEMON', false);
      }
    },

    async deletePokemon({ commit }: any, idPokemon: number) {
      try {
        await axios.delete(getApiUrl()+`/pokemons/${idPokemon}`, getConfig())
        commit('SET_SAVED_POKEMON', false);
      } catch (error) {
        console.log(error.response);
      }
    },

    async deleteImagePokemon({ commit }: any, idPokemon: number)
    {
      try {
        const res = await axios.get(getApiUrl()+`/deleteImagePokemon/${idPokemon}`, getConfig());
        console.log(res);
        commit('SET_SAVED_POKEMON', true);
      } catch (error) {
        console.log(error.response);
      }
    },
  }
}