<template>
  <v-col cols="12" :lg="size" :md="size" :sm="size">
    <slot></slot>
  </v-col>
</template>

<script lang="ts">
export default {
  props: {
    size: Number,
  }
}
</script>