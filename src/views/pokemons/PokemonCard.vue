<template>
  <v-card
    class="mx-auto accent"
    max-width="300">

    <v-img
      :src="pokemon.url_image || ''"
      class="white--text align-end white"
      height="160px">
      <v-card-title>
        <span class="black--text">{{ pokemon.name }}</span>
      </v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">Tipo</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{ pokemon.type.name }}</div>
      <div>{{ pokemon.trainer.name }}</div>
    </v-card-text>

    <v-card-actions class="white pa-1">
      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <ActionIcon
            @click="$emit('delete-pokemon-card', pokemon.id)"
            icon="fas fa-trash-alt"
            color="primary"
            :active="on">
          </ActionIcon>
        </template>
        <span>Eliminar</span>
      </v-tooltip>
      

      <v-spacer></v-spacer>

      <v-tooltip top>
        <template v-slot:activator="{ on }">
          <ActionIcon
            :to="{ name: 'PokemonFormEdit', params: { id: pokemon.id } }"
            icon="fas fa-pen"
            color="primary"
            :active="on">
          </ActionIcon>
        </template>
        <span>Editar</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    pokemon: Object
  }
})
</script>