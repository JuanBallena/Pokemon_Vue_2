<template>
  <v-img
    :src="src || require('@/assets/pokeball.png')"
    class="align-end accent"
    height="260">
    <v-card-title class="pa-3">
      <v-tooltip bottom v-if="buttonDeleteImage">
        <template v-slot:activator="{ on }">
          <CircleButton
            :active="on"
            color="danger"
            icon="fas fa-trash-alt"
            @click="$emit('delete-image')">
          </CircleButton>
          
        </template>
        <span>Eliminar foto</span>
      </v-tooltip>

      <template v-else>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <CircleButton
              :active="on"
              color="success"
              icon="fas fa-camera"
              @click="$emit('add-image')">
            </CircleButton>
          </template>
          <span>Añadir foto</span>
        </v-tooltip>

        <v-spacer></v-spacer>

        <v-tooltip bottom v-if="buttonRemoveImage">
          <template v-slot:activator="{ on }">
            <CircleButton
              :active="on"
              color="danger"
              icon="fas fa-times"
              @click="$emit('remove-image')">
            </CircleButton>
          </template>
          <span>Borrar foto</span>
        </v-tooltip>
      </template>
    </v-card-title>
  </v-img>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    src: {
      type: String,
      default: ''
    },
    buttonDeleteImage: {
      type: Boolean,
      default: false
    },
    buttonRemoveImage: {
      type: Boolean,
      default: false
    }
  }
})
</script>