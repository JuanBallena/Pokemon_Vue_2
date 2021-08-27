import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#607D8B',
        secondary: '#424242',
        accent: '#ECEFF1',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        danger: '#EF5350',
      },
    },
  },
  icons: {
    iconfont: 'fa',
  },
});
