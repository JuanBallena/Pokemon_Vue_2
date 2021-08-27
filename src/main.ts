import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.component('ActionIcon', require('./components/ActionIcon.vue').default);
Vue.component('BtnCancel', require('./components/BtnCancel.vue').default);
Vue.component('BtnSubmit', require('./components/BtnSubmit.vue').default);
Vue.component('CardForm', require('./components/CardForm.vue').default);
Vue.component('CircleButton', require('./components/CircleButton.vue').default);
Vue.component('ConfirmDialog', require('./components/ConfirmDialog.vue').default);
Vue.component('FullColumn', require('./components/FullColumn.vue').default);
Vue.component('InputFile', require('./components/InputFile.vue').default);
Vue.component('InputSelect', require('./components/InputSelect.vue').default);
Vue.component('InputText', require('./components/InputText.vue').default);

