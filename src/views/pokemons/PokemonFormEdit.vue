<template>
    <div>
    <CardForm titleForm="Actualizar Pokemon" :width="600">
      <template v-slot:body>
        <v-row>
          <FullColumn :size="6">
            <v-row>
              <FullColumn :size="12" v-if="showSkeleton">
                <v-sheet color="accent">
                  <v-skeleton-loader
                    class="mx-auto"
                    height="260"
                    type="image">
                  </v-skeleton-loader>
                </v-sheet>
              </FullColumn>

              <FullColumn :size="12" v-else>
                <v-card>
                  <PokemonImageForm
                    :src="imagePreview"
                    :buttonDeleteImage="showButtonDeleteImage"
                    :buttonRemoveImage="showButtonRemoveImage"
                    @delete-image="confirmDialog = true"
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
        <BtnCancel :to="{ name: 'PokemonList' }" />

        <v-spacer></v-spacer>

        <BtnSubmit title="Actualizar" @click.prevent.native="updateDataPokemon()" />
      </template>
    </CardForm>

    <ConfirmDialog
      title="Eliminar foto"
      body="Está seguro de eliminar la foto?"
      colorButtonConfirm="danger"
      titleButtonConfirm="Eliminar"
      v-model="confirmDialog"
      @cancel="confirmDialog = false"
      @confirm="deletePhotoPokemon()">
    </ConfirmDialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapActions } from "vuex";
import { uploadedFile } from "@/functions/validate";
import PokemonImageForm from './PokemonImageForm.vue';

export default Vue.extend({
  props: ['id'],

  data: () => {
    return {
      pokemonForm: {
        name: '',
        type_id: -1,
        trainer_id: -1,
      },
      url_image: '',
      imagePreview: '',
      photoPokemon: null,
      showSkeleton: true,
      confirmDialog: false,
    }
  },

  components: {
    PokemonImageForm
  },

  async created() {
    await this.getPokemonEdit(Number(this.id));
    this.loadInputs();
    await this.getTypes();
    await this.getTrainers();
    this.showSkeleton = false
  },

  computed: {
    ...mapState('pokemon', ['savedPokemon','pokemonEdit']),
    ...mapState('type', ['typeData']),
    ...mapState('trainer', ['trainerData']),

    showButtonDeleteImage(): boolean {
      return this.url_image ? true : false
    },

    showButtonRemoveImage(): boolean {
      return this.imagePreview ? true : false
    },
  },
  
  methods:  {
    ...mapActions('pokemon', ['getPokemonEdit','updatePokemon','deleteImagePokemon']),
    ...mapActions('type', ['getTypes']),
    ...mapActions('trainer', ['getTrainers']),

    loadInputs() {
      this.pokemonForm.name = this.pokemonEdit.name;
      this.pokemonForm.type_id = this.pokemonEdit.type.id;
      this.pokemonForm.trainer_id = this.pokemonEdit.trainer.id;
      this.url_image = this.pokemonEdit.url_image;

      this.imagePreview = this.pokemonEdit.url_image;
    },

    resetPhotoPokemon() {
      this.imagePreview = '';
      this.photoPokemon = null;
      this.confirmDialog = false
    },

    onSelectedFilePhotoPokemon(e: any) {
      const file = e.target.files[0];
      e.target.value = null;
      if (file) {
        this.photoPokemon = file;
        this.imagePreview = URL.createObjectURL(file);
      }
    },

    async deletePhotoPokemon() {
      await this.deleteImagePokemon(Number(this.id));
      this.confirmDialog = false
      this.url_image = '';
      this.imagePreview = '';
    },

    async updateDataPokemon() {
      const dataPost = new FormData();
      dataPost.append('data', JSON.stringify(this.pokemonForm));

      if (uploadedFile(this.photoPokemon)) {
        dataPost.append('avatar', this.photoPokemon || '');
      }
      
      await this.updatePokemon({ idPokemon: Number(this.id), params: dataPost });
      if (this.savedPokemon) {
        this.$router.push({ name: "PokemonList" });
      }
    },
  }
})
</script>