<template>
  <v-btn
    @click="$emit('click', $event)"
    class="mx-2"
    :color="color"
    :to="to"
    v-on="active"
    depressed
    x-small
    fab>
    <v-icon
      small
      color="white">
      {{ icon }}
    </v-icon>
  </v-btn>
</template>

<script lang="ts">
export default {
  props: {
    active: Object,
    color: {
      type: String,
      default: 'primary',
    },
    to: Object,
    icon: String,
  },
}
</script>