import Vue from 'vue'
import App from '@/App.vue'//引入最外层的页面信息
import router from '@/router'//导入router路由
import store from '@/store'//导入storeVuex数据共享仓库
import axios from 'axios'//跨域
import Mint from 'mint-ui'  //引入mintUI的UI框架插件需要安装npm install vuex-persistedstate -S
Vue.use(Mint)//让插件
Vue.prototype.$http = axios;//放在原型上使其的子元素都可以使用
import 'reset.css'  //引入重置样式的css
import '@/style/mint.css'  //引入mint.css
import '@/style/iconfont/iconfont.css'
import '@/style/style.css'//重写样式
//它会阻止你显示显示生产模式的消息
Vue.config.productionTip = false

new Vue({
  router,
  store,
  data: {
    bus: new Vue
  },
  render: h => h(App)
}).$mount('#app')
