import Vue from "vue";
import App from "./App.vue";
import router from "./routers/index";
import store from "./store/store";
import http from './untils/http'
import { Button } from 'vant';

Vue.use(Button);


Vue.config.productionTip = false;
Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
