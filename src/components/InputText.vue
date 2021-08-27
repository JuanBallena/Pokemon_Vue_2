<template>
  <v-text-field
    :label="label"
    :value="value"
    @input="$emit('input', $event)"
    filled
    small
    dense
    placeholder=" ">
  </v-text-field>
</template>

<script lang="ts">
export default {
  props: {
    label: String,
    value: String,
  }
}
</script>
