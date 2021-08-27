<template>
  <v-row justify="center">
    <v-dialog
      @input="$emit('input', $event)"
      :value="value"
      max-width="450"
      class="pa-3">
      <v-card>
        <v-card-title class="headline accent pb-4 mb-4">{{ title }}</v-card-title>
        <v-card-text>{{ body }}</v-card-text>

        <v-card-actions class="pa-5">
          <v-btn
            @click="$emit('click:cancel')"
            class="primary--text"
            :color="colorButtonCancel"
            depressed
            small>
            {{ titleButtonCancel }}
          </v-btn>
          
          <v-spacer></v-spacer>

          <v-btn
            @click="$emit('click:confirm')"
            :color="colorButtonConfirm"
            class="white--text"
            depressed
            small>
            {{ titleButtonConfirm }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean,
    title: {
      type: String,
      default: 'Confirmar'
    },
    body: {
      type: String,
      default: 'Desea continuar?'
    },
    colorButtonCancel: {
      type: String,
      default: 'accent'
    },
    titleButtonCancel: {
      type: String,
      default: 'Cancelar'
    },
    colorButtonConfirm: {
      type: String,
      default: 'primary'
    },
    titleButtonConfirm: {
      type: String,
      default: 'Aceptar'
    }
  }
}
</script>