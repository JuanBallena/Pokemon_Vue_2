<template>
  <v-btn
    @click="$emit('click', $event)"
    :to="to"
    v-on="active"
    small
    text
    fab>
    <v-icon
      :color="color"
      x-small>
      {{ icon }}
    </v-icon>
  </v-btn>
</template>

<script lang="ts">
export default {
  props: {
    color: {
      type: String,
      default: 'secondary',
    },
    to: Object,
    active: Object,
    icon: String,
  }
}
</script>