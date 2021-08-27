import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/auth/Login.vue'),
  },
  {
    path: '/pokemons',
    name: 'PokemonList',
    component: () => import('../views/pokemons/PokemonList.vue'),
  },
  {
    path: '/pokemons/registrar',
    name: 'PokemonFormCreate',
    component: () => import('../views/pokemons/PokemonFormCreate.vue')
  },
  {
    path: '/pokemons/editar/:id',
    name: 'PokemonFormEdit',
    component: () => import('../views/pokemons/PokemonFormEdit.vue'),
    props: true,
  },
  {
    path: '/entrenadores',
    name: 'TrainerList',
    component: () => import('../views/trainers/TrainerList.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
