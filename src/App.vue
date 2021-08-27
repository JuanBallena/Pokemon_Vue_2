<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark>
      <v-tabs
        v-model="tab"
        centered
        dark
        icons-and-text>
        <v-tabs-slider></v-tabs-slider>
        <v-tab :to="{ name: 'PokemonList' }" replace>
          Pokemones
          <v-icon
            small>
            fas fa-home
          </v-icon>
        </v-tab>
        <v-tab :to="{ name: 'TrainerList' }">
          Entrenadores
          <v-icon
            small>
            fas fa-male
          </v-icon>
        </v-tab>
        <v-tab href="#tab-3">
          Usuarios
          <v-icon
            small>
            fas fa-users
          </v-icon>
        </v-tab>
        <v-tab href="#tab-4">
          Seguridad
          <v-icon
            small>
            fas fa-unlock
          </v-icon>
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-main>
      <div class="ma-3">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => {
    return {
      tab: null,
    }
  },

});
</script>
