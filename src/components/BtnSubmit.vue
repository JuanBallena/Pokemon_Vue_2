<template>
  <v-btn
    :block="block"
    :color="color"
    class="white--text px-5"
    depressed
    small>
    {{ title }}
  </v-btn>
</template>

<script lang="ts">
export default {
  props: {
    block: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'success'
    },
    title: {
      type: String,
      default: 'Enviar'
    },
  }
}
</script>