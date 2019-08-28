<template>
  <div id="main">
    <div id="tabbar" v-if="show">
      <template v-for="(item,index) in tabbar" >
        <router-link :to="item.path" :key="index">
          <i :class='["iconfont", "icon-"+item.icon]'></i>
          <span>{{item.title}}</span>
        </router-link>
      </template>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import{mapState} from 'vuex'
  export default {
    data() {
      return {
        tabbar: [
          {title: "电影", path: "/film", icon: "dianying"},
          {title: "影院", path: "/cinema", icon: "yingyuana"},
          {title: "我的", path: "/mine", icon: "wode"},
        ]
      }
    },
    /*使用...map需要引入mapState获取show*/
    computed: {
      ...mapState(['show'])
    }
  }
</script>

<style lang="scss">
  #tabbar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 48px;
    border-top: 1px solid #d8d8d8;
    background: #fff;
    a{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      flex: 1;
      height: 100%;
      color: #696969;
      i{
        font-size: 24px;
      }
      span{
        font-size: 13px;
      }
      &.router-link-active{
        color: #f03d37;
      }
    }
  }
  a{
    color: #000;
    text-decoration: none;
  }
</style>
