<template>
  <div class="mine">
    <div class="header">
      <span @click="getBack()">←</span>
      {{ title }}
    </div>
    <Wode></Wode>
  </div>
</template>

<script>
import Wode from '@/components/wode/wode.vue'
import {mapMutations} from 'vuex'
export default {
  name: 'mine',
  data() {
    return {
      title: "我的",
      isBack: false
    }
  },
  created(){
    this.$store.commit("changeShow", false);
  },
  methods:{
    //获取隐藏下面的电影等
    ...mapMutations(["changeShow"]),
    //点击左返回上一个页面
    getBack(){
      this.$router.go(-1)
      this.$store.commit("changeShow", true);
    }
  },
  components: {Wode}
}
</script>
<style lang="scss" scoped>
  .header {
    background-color: #e54847;
    color: #fff;
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  span {
    position: absolute;
    left: 15px;
  }
  }
</style>
