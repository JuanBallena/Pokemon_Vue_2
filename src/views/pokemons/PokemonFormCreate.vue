<template>
  <div>
    <CardForm titleForm="Formulario Pokemon" :width="600">
      <template v-slot:body>
        <v-row>
          <FullColumn :size="6">
            <v-row>
              <FullColumn :size="12">
                <v-card>
                  <PokemonImageForm
                    :src="imagePreview"
                    :buttonRemoveImage="showButtonRemoveImage"
                    @remove-image="resetPhotoPokemon()"
                    @add-image="$refs.inputFilePhotoPokemon.click()">
                  </PokemonImageForm>
                  <input
                    v-show="false"
                    accept="image/*"
                    ref="inputFilePhotoPokemon" 
                    type="file"
                    @change="onSelectedFilePhotoPokemon">
                </v-card>
              </FullColumn>
            </v-row>
          </FullColumn>
          <FullColumn :size="6">
            <v-row>
              <FullColumn :size="12">
                <InputText 
                  label="Nombre" 
                  v-model="pokemonForm.name">
                </InputText>
              </FullColumn>
              <FullColumn :size="12">
                <InputSelect
                  label="Tipo"
                  v-model="pokemonForm.type_id"
                  :items="typeData"
                  text="name"
                  val="id">
                </InputSelect>
              </FullColumn>
              <FullColumn :size="12">
                <InputSelect
                  label="Entrenador"
                  v-model="pokemonForm.trainer_id"
                  :items="trainerData"
                  text="name"
                  val="id">
                </InputSelect>
              </FullColumn>
            </v-row>
          </FullColumn>
        </v-row>
      </template>
      <template v-slot:actions>
        <BtnCancel
          :to="{ name: 'PokemonList' }">
        </BtnCancel>

        <v-spacer></v-spacer>

        <BtnSubmit
          @click.prevent.native="saveDataPokemon()">
        </BtnSubmit>
      </template>
    </CardForm>
  </div>
</template>

<script lang="ts">
import { uploadedFile } from "@/functions/validate";
import { mapState, mapActions } from "vuex";
import PokemonImageForm from './PokemonImageForm.vue';
import Vue from 'vue';

export default Vue.extend({
  data: () => {
    return {
      pokemonForm: {
        name: '',
        type_id: -1,
        trainer_id: -1,
      },
      photoPokemon: null,
      imagePreview: '',
    }
  },

  components: {
    PokemonImageForm
  },

  async created() {
    await this.getTypes();
    await this.getTrainers();
  },

  computed: {
    ...mapState('pokemon', ['savedPokemon']),
    ...mapState('type', ['typeData']),
    ...mapState('trainer', ['trainerData']),

    showButtonRemoveImage(): boolean {
      return this.imagePreview ? true : false
    },
  },
  
  methods:  {
    ...mapActions('pokemon', ['savePokemon']),
    ...mapActions('type', ['getTypes']),
    ...mapActions('trainer', ['getTrainers']),

    onSelectedFilePhotoPokemon(e: any) {
      const file = e.target.files[0];
      e.target.value = null;
      if (file) {
        this.photoPokemon = file;
        this.imagePreview = URL.createObjectURL(file);
      }
    },

    resetPhotoPokemon() {
      this.photoPokemon = null;
      this.imagePreview = '';
    },

    async saveDataPokemon() {
      const dataPost = new FormData();
      dataPost.append('data', JSON.stringify(this.pokemonForm));

      if (uploadedFile(this.photoPokemon)) {
        console.log('Cargo foto...')
        dataPost.append('avatar', this.photoPokemon || '');
      }
      await this.savePokemon(dataPost)
      if (this.savedPokemon) {
        this.$router.push({ name: "PokemonList" });
      }
    },
  }
})
</script>