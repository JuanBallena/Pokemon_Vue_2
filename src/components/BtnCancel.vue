<template>
  <v-btn
    class="px-5"
    :to="to"
    :block="block"
    :color="color"
    depressed
    outlined
    small>
    {{ title }}
  </v-btn>
</template>

<script lang="ts">
export default {
  props: {
    to: Object,
    block: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'primary'
    },
    title: {
      type: String,
      default: 'Cancelar'
    }
  }
}
</script>