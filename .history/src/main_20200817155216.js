import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueSocketIO from 'vue-socket.io'
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://metinseylan.com:1992',
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  },
  options: { path: "/my-app/" } //Optional options
}))
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
