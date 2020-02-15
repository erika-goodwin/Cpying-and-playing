import Vue from "vue";
import './plugins/fontawesome'
import App from "./App.vue";
import router from "./router";
import './assets/tailwind.css'
// layouts
import Default from '@/layouts/Default.vue';
import Apple from '@/layouts/Apple.vue';
import Instragram from '@/layouts/Instagram.vue';
import Mammut from '@/layouts/Mammut.vue';

// layouts
Vue.component('default-layout', Default);
Vue.component('apple-layout', Apple);
Vue.component('instagram-layout', Instragram);
Vue.component('mammut-layout', Mammut);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
