import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '请选择您的城市',
    count: 0,
    cityId: 310100,
    usermobile: ''
  },
  getters: {
    // getCityCount: function (state) {
    //   return '我要加点字符串' + state.count
    // }
  },
  mutations,
  actions,
  plugins: [createPersistedState()]
})
