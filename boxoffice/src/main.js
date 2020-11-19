import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: "/img/loading-svg/loading-bars.svg",
}
);