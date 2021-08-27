<template>
  <div>
    <v-row>
      <v-col cols="12" lg="3" md="3" sm="4">
        <v-text-field
          label="Correo electrónico"
          v-model="email"
          type="email"
          placeholder=" ">
        </v-text-field>
        <v-text-field
          label="Correo electrónico"
          v-model="password"
          :append-icon="showPassword ? 'fa-eye' : 'fa-eye-slash'"
          :type="showPassword ? 'text' : 'password'"
          placeholder=" "
          @click:append="showPassword = !showPassword">
        </v-text-field>
        <v-btn
          color="secondary"
          small
          @click.prevent="login()">
          Acceder
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';
import { setUserToLocalstorage, setTokenToLocalstorage } from '@/localstorage/index'
export default Vue.extend({
  data: () => {
    return {
      showPassword: false,
      email: 'jpbu2310@gmail.com',
      password: '123456',
    }
  },

  methods: {
    async login() {
      const credentials = {
        email: this.email,
        password: this.password,
      }
      try {
        await axios.get('/sanctum/csrf-cookie');
        const response = await axios.post('/login', credentials);
        const data = response.data;
        console.log(data);
        setUserToLocalstorage(data.user);
        setTokenToLocalstorage(data.token);
      } catch(e) {
        console.log(e.response)
      }
    }
  }
})
</script>