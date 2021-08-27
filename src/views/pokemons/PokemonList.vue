<template>
  <div>
    <div class="d-flex">
      <h2>Lista de Pokemones</h2>

      <CircleButton
        :to="{ name: 'PokemonFormCreate' }"
        icon="fas fa-plus"
        color="green">
      </CircleButton>
    </div>
    <v-row align="center" justify="center" v-if="pokemonData.length > 0">
      <v-col cols="12" lg="2" md="3" sm="4"
        v-for="pokemon in pokemonData" 
        :key="pokemon.id">

        <PokemonCard
          :pokemon="pokemon"
          @delete-pokemon-card="openConfirmDialog">
        </PokemonCard>

      </v-col>
    </v-row>
    <div v-else style="height: 800px;"></div>

    <v-pagination
      class="text-center"
      color="primary"
      v-model="page"
      :length="pokemonPages"
      :total-visible="6"
      @input="onChangePage(page)">
    </v-pagination>

    <ConfirmDialog
      title="Eliminar Pokemon"
      body="Está seguro de eliminar este pokemon?"
      colorButtonConfirm="danger"
      titleButtonConfirm="Eliminar"
      v-model="confirmDialog"
      @cancel="confirmDialog = false"
      @confirm="deletePokemonCard()">
    </ConfirmDialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PokemonCard from './PokemonCard.vue';
import { mapState, mapMutations, mapActions } from "vuex";

export default Vue.extend({
  data: () => {
    return {
      page: -1,
      confirmDialog: false,
      idPokemonDeleted: -1,
    }
  },

  components: {
    PokemonCard
  },
  
  async created() {
    const page = this.$route.query.page;
    this.page = !page ? 1 : Number(page);
    const paramsUrl = `?page=${this.page}`;
    await this.getPokemons(paramsUrl);
  },

  async beforeRouteUpdate(to, from, next){
    next();
    if (from.query.page == '1' && !to.query.page || !from.query.page && to.query.page == '1'){
      return
    } else {
      const page = this.$route.query.page;
      this.page = !page ? 1 : Number(page);
      const paramsUrl = `?page=${this.page}`;
      await this.getPokemons(paramsUrl);
    }
  },
  
  computed: {
    ...mapState('pokemon', ['pokemonData','pokemonPages']),
  },

  methods: {
    ...mapMutations('pokemon', ['SET_POKEMON_DATA']),
    ...mapActions('pokemon', ['getPokemons','deletePokemon']),

    async onChangePage(page: number) {
      if(page != Number(this.$route.query.page)){
        this.$router.push({ query: { page: `${page}` } });
      }
    },

    openConfirmDialog(idPokemon: number) {
      this.confirmDialog = true;
      this.idPokemonDeleted = Number(idPokemon);
    },

    async deletePokemonCard() {
      await this.deletePokemon(this.idPokemonDeleted);
      this.confirmDialog = false;
      const page = this.$route.query.page;
      const paramsUrl = `?page=${page}`;
      await this.getPokemons(paramsUrl);
    }
  },

  beforeDestroy() {
    this.SET_POKEMON_DATA([]);
  },
})
</script>