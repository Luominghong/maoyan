import Vue from 'vue'
import Vuex from 'vuex'
import vuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)
/*仓库*/
export default new Vuex.Store({
  /*使用插件存储每次改变的值*/
  plugins: [vuexPersisted()],
  state: {
    // city: window.localStorage.getItem('selectedCity')||"深圳",
    city: "深圳",
    show: true
  },
  mutations: {
    /*方法changeShow传值进来payload改变共享show的值*/
    changeShow(state, payload){ //改变show的状态值
      state.show = payload
    },
    /**/
    changeCity(state,payload){
      state.city = payload.name
    }
  },
  actions: {

  },
  getters: {

  }
})
