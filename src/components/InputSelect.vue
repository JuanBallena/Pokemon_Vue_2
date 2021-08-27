<template>
  <v-select
    :label="label"
    :value="value"
    @input="$emit('input', $event)"
    placeholder="Seleccione"
    :items="items"
    :item-text="text"
    :item-value="val"
    filled
    small
    dense>
  </v-select>
</template>

<script lang="ts">
export default {
  props: {
    label: String,
    value: Number,
    items: Array,
    text: String,
    val: String
  }
}
</script>
