<template>
  <div class="film">
    <!-- 引入header并传值 -->
    <Header :title="title" />
    <div class="tabs">
      <!--城市-->
      <div @click="toCity">{{city}}<i class="iconfont icon-shang"></i></div>
      <!--tabs切换栏-->
      <ul>
        <li v-for="(item,index) in list" :key="index" :class="nowItem==item.title?'active':''" @click="tabs(item)">{{item.title}}</li>
      </ul>
      <!--搜索图标-->
      <div>
        <i class="iconfont icon-searchicon"></i>
      </div>
    </div>
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapState} from 'vuex'//获取store的的值需要导入
  import {mapMutations} from 'vuex'//通过方法改变store的值
  import Header from '@/components/commons/header.vue'  //引入共用组件header
  let markTab = ""  //用于存储组件导航守卫获取的当前路由值
  export default {
    data() {
      return {
        title: "猫眼电影",
        list: [
          {title: "正在热映", name: "nowplaying"},
          {title: "即将上映", name: "comingsoon"}
        ],
        nowItem: markTab //使用组件导航守卫, 获取当前tab显示(为了避免刷新后显示错误)
      }
    },
    beforeRouteEnter (to, from, next) { //组件导航守卫,路由进入之前
      next()
      switch (to.name) {
        case 'nowplaying':
          markTab = "正在热映"
          break;
        case 'comingsoon':
          markTab = "即将上映"
          break;
        default:
          nowItem = "正在热映"
      }
    },
    methods: {
      tabs(item){ //点击切换正在热映和即将上映
        this.nowItem = item.title //将当前点击的tabs赋值给nowItem(为了显示激活的样式)
        this.$router.push({name: item.name})  //路由切换
      },
      toCity(){ //跳转到城市列表页
        this.$router.push({name: "city"})
        this.$store.commit("changeShow", false);  //改变show的状态值
      }
    },
    /*获取city*/
    computed: {
      ...mapState(["city"]),
      ...mapState(["show"])

    },
    components: {Header}
  }
</script>

<style lang="scss" scoped>
  // scoped属性使得该样式只在该组件独有
  h1{
    color: red;
  }
  .film>:nth-child(3){
    margin-top: 95px;
  }
  .tabs{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    height: 43px;
    border-bottom: 1px solid #F0F0F0;
    position: fixed;
    left: 0;
    right: 0;
    top: 50px;
    background: #fff;
  }
  .tabs ul{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .tabs ul li{
    height: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    margin: 0 10px;
    font-size: 15px;
    font-weight: bold;
    color: #666;
  }
  .tabs ul li.active{
    color: #e54847;
    border-bottom: 2px solid #e54847;
  }
  .tabs div:nth-child(1){
    font-size: 15px;
  }
  .tabs div:nth-child(1) i{
    color: #b0b0b0;
  }
  .tabs div:nth-of-type(2) i{
    color: #e54847;
    font-size: 24px;
    font-weight: bold;
  }
</style>