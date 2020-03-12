import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import  './assets/style.css'

import Routes from './router.js';
Vue.use(VueRouter);

// We create the router instance here.
const router = new VueRouter({
  mode: 'history',
  routes: Routes
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
