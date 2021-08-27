<template>
  <v-file-input
    :label="label"
    :value="value"
    @input="$emit('input', $event.target.files)"
    @change="$emit('change', $event)"
    placeholder="Seleccione"
    prepend-icon=""
    filled
    dense>
  </v-file-input>
</template>

<script lang="ts">
export default {
  props: {
    label: String,
    value: Object,
  }
}
</script>
