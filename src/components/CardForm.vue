<template>
  <v-card
    class="mx-auto pa-2"
    :max-width="width">
    <v-card-text>

      <v-card-title class="pa-0">
        <span class="black--text">{{ titleForm }}</span>
        <v-spacer></v-spacer>
      </v-card-title>

      <slot name="body"></slot>

      <v-card-actions class="pa-0">
        <slot name="actions"></slot>
      </v-card-actions>
      
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
export default {
  props: {
    titleForm: String,
    width: Number,
  }
}
</script>