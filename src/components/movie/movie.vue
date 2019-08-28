<template>
   <div>
       <div class="tou">
           <ul>
               <li @click="toCity">{{city}}<i class="iconfont icon-shang"></i></li>
               <li><p>搜索</p></li>
           </ul>
       </div>
       <div class="zhong">
           <ul>
               <li><span>全城<i class="iconfont icon-shang"></i></span></li>
               <li><span>品牌<i class="iconfont icon-shang"></i></span></li>
               <li><span>特色<i class="iconfont icon-shang"></i></span></li>
           </ul>
       </div>
       <div class="ding">
           <div class="yingyuan" v-for="item in mycinemas">
               <div>
                   <p>{{item.nm}}<span>{{item.sellPrice}}<i>元起</i></span></p>
                   <p><span>{{item.addr}}</span><span>{{item.distance}}</span></p>
                   <div class="xiao">
                       <div v-if="item.tag.allowRefund">退</div>
                       <div v-if="item.tag.endorse">改签</div>
                       <div v-if="item.tag.snack">小吃</div>
                       <div v-if="item.tag.vipTag">折扣卡</div>
                       <div v-for="(each,i) in item.tag.hallType">{{each}}</div>
                   </div>
                   <p class="top1" v-if="item.promotion.cardPromotionTag"><span>卡</span>开卡特惠，首单2张最高立减6元</p>
               </div>
       </div>
       </div>
   </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data(){
            return{
          mycinemas:[]
            }
        },
        created() {
            this.getData()  //调用methods里面的方法
        },
        methods: {
            async getData(){
                let res = await this.$http.get("/ajax/cinemaList?day=2019-08-22&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1566409649073&cityId=30");
                this.mycinemas=res.data.cinemas;
            },
            toCity(){ //跳转到城市列表页
                this.$router.push({name: "city"})
                this.$store.commit("changeShow", false);  //改变show的状态值
            }
        },
        computed: {
            ...mapState(["city"])
        }
    }
</script>

<style lang="scss" scoped>
    html,body,div,ul,li,p{margin: 0;padding: 0}
    .tou{
        height: 44px;
        background: #f5f5f5;
        position: fixed;
        top: 50px;
        left: 0;
        right: 0;
    }
    .tou>ul{
        list-style: none;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        line-height: 44px;
    }
    .tou>ul>li:nth-child(1){
        width: 60px;
        height: 20px;
        font-size: 15px;
        color: #666666;
        line-height: 20px;
        text-align: center;
        margin-left: 15px;
        margin-top: 5px;
    }
    .tou>ul>li:nth-child(2){
        flex: 1;
        height: 29px;
        background: white;
        font-size: 13px;
        color: #b2b2b2;
        line-height: 29px;
        text-align: center;
        margin-right: 15px;
        margin-left: 16px;
        border-radius: 5px;
        margin-top: 5px;
    }
    .zhong{
        height: 40px;
        border-bottom: 1px solid #F0F0F0;
        position: fixed;
        top: 94px;
        left: 0;
        right: 0;
    }
    .zhong>ul{
        list-style: none;
        display: flex;
        justify-content: space-around;
        line-height: 40px;
        background: white;
    }
    .zhong>ul>li:nth-child(1),.zhong>ul>li:nth-child(3) {
        width: 33%;
        text-align: center;
    }
    .zhong>ul>li:nth-child(2){
        width: 34%;
        text-align: center;
    }
    .zhong>ul>li>span{
        display: inline-block;
        width: 100%;
        height: 18px;
        font-size: 13px;
        line-height: 18px;
        color: #777777;
        border-right: 1px solid #F0F0F0;
    }
    .ding{
        margin-top: 150px;
    }
    .yingyuan{
        margin: 0px 15px 0px 15px;
        min-height: 50px;
        border-bottom: 1px solid #F0F0F0;
    }
    .yingyuan>div{
        margin: 18px 18px 18px 0px;
    }
    .yingyuan>div>p:nth-child(1){
        height: 23px;
        font-size: 16px;
        color: #000000;
        line-height: 23px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .yingyuan>div>p:nth-child(1)>span{
        color: #f03d37;
        font-size: 18px;
        margin-left: 8px;
    }
    .yingyuan>div>p:nth-child(1)>span>i{
        font-size: 11px;
    }
    .yingyuan>div>p:nth-child(2){
        margin-top: 6px;
        color: #666666;
        font-size: 13px;
        display: flex;
    }
    .yingyuan>div>p:nth-child(2)>span:nth-child(1){
        display: inline-block;
        margin-right: 5px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .xiao{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top: 5px;
    }
    .xiao>div:not(:nth-child(1)){
        margin-left: 4px;
    }
    .xiao>div:nth-child(1){
        height: 20px;
        color: #589daf;
        font-size: .6rem;
        border: 1px solid #589daf;
        text-align: center;
        line-height: 20px;
        padding: 0 3px;
    }
    .xiao>div:nth-child(2){
        height: 20px;
        color: #589daf;
        font-size: .6rem;
        border: 1px solid #589daf;
        text-align: center;
        line-height: 20px;
        padding: 0 3px;
    }
    .xiao>div:nth-child(3){
        height: 20px;
        color: #f90;
        font-size: .6rem;
        border: 1px solid #f90;
        text-align: center;
        line-height: 20px;
        padding: 0 3px;
    }
    .xiao>div:nth-child(4){
        height: 20px;
        color: #f90;
        font-size: .6rem;
        border: 1px solid #f90;
        text-align: center;
        line-height: 20px;
        padding: 0 3px;
    }
    .xiao>div:nth-child(5){
        height: 20px;
        color: #589daf;
        font-size: .6rem;
        border: 1px solid #589daf;
        text-align: center;
        line-height: 20px;
        padding: 0 3px;
    }
    .xiao>div:nth-child(6){
        height: 20px;
        color: #589daf;
        font-size: .6rem;
        border: 1px solid #589daf;
        text-align: center;
        line-height: 20px;
        padding: 0 3px;
    }
    .xiao>div:nth-child(7){
        width: 32px;
        height: 20px;
        color: #589daf;
        font-size: .6rem;
        border: 1px solid #589daf;
        text-align: center;
        line-height: 20px;
        padding: 0 3px;
    }
    .xiao>div:nth-child(8){
        height: 20px;
        color: #589daf;
        font-size: .6rem;
        border: 1px solid #589daf;
        text-align: center;
        line-height: 20px;
        padding: 0 3px;
    }
    .top1{
        margin-top: 5px;
        font-size: 11px;
        color: #999999;
    }
    .top1>span{
        display: inline-block;
        width: 15px;
        height: 15px;
        background: #58C0F8;
        color: white;
        font-size: 6px;
        margin-right: 5px;
    }
</style>