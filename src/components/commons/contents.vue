<template>
    <div id="box">
            <div class="header">
                <span @click="getBack()">←</span>
                {{ title }}
            </div>
        <div class="box1" v-for="tiem in dataList">
            <div id="bei">
                <img :src='tiem.img.replace("w.h","128.180")'>
                <div class="box3">
                    <p class="bx1">{{tiem.nm}}</p>
                    <p class="bx2">{{tiem.enm}}</p>

                    <p class="bx3" v-if="tiem.sc"><span class="bxa1">{{tiem.sc}}</span><span class="b">({{tiem.wish}}评分)</span></p>
                    <p class="bx2" v-else>占无评分</p>
                    <p class="bx2">{{tiem.cat}}</p>
                    <p class="bx2"><span>{{tiem.src}}/</span><span>{{tiem.dur}}</span></p>
                    <p class="bx2"><span>{{tiem.pubDesc}}</span></p>
                </div>
                <div>→</div>
            </div>
        </div>
        <!--日期功能-->
        <div class="riQi">
            <ul>
                <li v-for="(tiem1,index) in riqidata" @click="nm=index" :class="nm==index?'active':''">{{tiem1}}</li>
            </ul>
        </div>
        <div class="zhong">
            <ul>
                <li @click="quancheng"><span>全城<i class="iconfont icon-shang"></i></span></li>
                <li><span>品牌<i class="iconfont icon-shang"></i></span></li>
                <li><span>特色<i class="iconfont icon-shang"></i></span></li>
            </ul>
            <ul class="diqu">
                <li v-for="(item1,index) in diqu" @click="nm1=index" :class="nm1==index?'active':''">{{item1}}</li>
            </ul>
            <ul class="qiqu1">
                <li v-for="(item2,index) in district1[0]" class="boo3">{{item2.name}}{{item2.count}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        data(){
            return{
                title:"",
                id:'',
                dataList:[],
                back: true,
                riqidata:[],
                nm:0,
                nm1:0,
                zz:"",
                diqu:["商区","地铁"],
                district1:[],//地区
            }
        },
        async created(){
            this.$store.commit("changeShow", false);//修改设置仓库影院我的电影隐藏下面
            this.id=this.$route.params.id
            console.log(this.$route.params.id);
            let res=await this.$http.get("/ajax/detailmovie?movieId="+this.id);
            this.title=res.data.detailMovie.nm;
            console.log(res.data.detailMovie);
            this.dataList.push(res.data.detailMovie)
            /*日期获取*/
            for (var q=0;q<7;q++){
                this.riqidata.push(GetDateStr(q))

            }
            /*时间顺序排列*/
            function GetDateStr(i) {
                    var dd=new Date()
                    dd.setDate(dd.getDate()+i)
                    var m=(dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);
                    var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();
                    var zz=""
                    switch (i) {
                        case 0:
                            return "今天"+m+"月"+d+"日";
                            break;
                        case 1:
                            return "明天"+m+"月"+d+"日";
                            break;
                        case 2:
                            return "后天"+m+"月"+d+"日";
                            break;
                        case 3:
                            if (dd.getDay()==0){
                                zz="周日"
                            } else if (dd.getDay()==1){
                                zz="周一"
                            } else if (dd.getDay()==2){
                                zz="周二"
                            }else if (dd.getDay()==3){
                                zz="周三"
                            }else if (dd.getDay()==4){
                                zz="周四"
                            }else if (dd.getDay()==5){
                                zz="周五"
                            }else if (dd.getDay()==6){
                                zz="周六"
                            }
                            return zz+m+"月"+d+"日";
                            break;
                        case 4:
                            if (dd.getDay()==0){
                                zz="周日"
                            } else if (dd.getDay()==1){
                                zz="周一"
                            } else if (dd.getDay()==2){
                                zz="周二"
                            }else if (dd.getDay()==3){
                                zz="周三"
                            }else if (dd.getDay()==4){
                                zz="周四"
                            }else if (dd.getDay()==5){
                                zz="周五"
                            }else if (dd.getDay()==6){
                                zz="周六"
                            }
                            return zz+m+"月"+d+"日";
                            break;
                        case 5:
                            if (dd.getDay()==0){
                                zz="周日"
                            } else if (dd.getDay()==1){
                                zz="周一"
                            } else if (dd.getDay()==2){
                                zz="周二"
                            }else if (dd.getDay()==3){
                                zz="周三"
                            }else if (dd.getDay()==4){
                                zz="周四"
                            }else if (dd.getDay()==5){
                                zz="周五"
                            }else if (dd.getDay()==6){
                                zz="周六"
                            }
                            return zz+m+"月"+d+"日";
                            break;
                        case 6:
                            if (dd.getDay()==0){
                                zz="周日"
                            } else if (dd.getDay()==1){
                                zz="周一"
                            } else if (dd.getDay()==2){
                                zz="周二"
                            }else if (dd.getDay()==3){
                                zz="周三"
                            }else if (dd.getDay()==4){
                                zz="周四"
                            }else if (dd.getDay()==5){
                                zz="周五"
                            }else if (dd.getDay()==6){
                                zz="周六"
                            }
                            return zz+m+"月"+d+"日";
                            break;
                    }
                }

            let res1=await this.$http.get(" /ajax/filterCinemas?movieId="+this.id+"&day=2019-08-26");
            this.district1.push(res1.data.district.subItems)
            console.log(this.district1);
            console.log(res1.data.district.subItems);
        },
        methods:{
            //获取隐藏下面的电影等
            ...mapMutations(["changeShow"]),
            //点击左返回上一个页面
            getBack(){
                this.$router.go(-1)
                this.$store.commit("changeShow", true);
            },
            quancheng(){

            }
        },
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

    .box1{
        margin-top: 50px;
        width: 100%;
        height: 188px;
        background: #777777;
    }
    .box1>div{
        padding: 18px 14px;
        height: 150px;
        background: rebeccapurple;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .box1>div>img{
        height: 100%;
    }
    .box3{
        width: 58%;
        margin-left: 10px;
        margin-right: 3px;
        margin-top: 2px;
        display: flex;
        flex-direction: column;
        z-index: 99;
    }
    .bx1{
        font-size: 20px;
        font-weight: 700;
        color: #FFFFFF;
        height: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 5px;
    }
    .bx2{
        font-size: 12px;
        color: #FFFFFF;
        margin-top: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .bx3{
        margin-top: 10px;
    }
    .bxa1{
        color: #fc0;
        font-size: 18px;
        font-weight: 700;
        margin-right: 10px;
    }
    .b{
        font-size: 12px;
        opacity: .8;
        color: #FFFFFF;
    }
    .riQi{
        width: 100%;
        height: 45px;
    }
    .riQi>ul{
        list-style: none;
        display: flex;
        justify-content: flex-start;
        overflow-y: hidden;
    }
    .riQi>ul>li{
        width: 115px;
        height: 45px;
        line-height: 45px;
        flex-shrink:0;
        font-size: 14px;
        text-align: center;
    }
    .riQi>ul::-webkit-scrollbar {
        display: none;
    }
    .active{
        color: #f03d37;
        border-bottom: 2px solid #f03d37;
    }
    .zhong{
        height: 40px;
        border-bottom: 1px solid #F0F0F0;
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
    .diqu{
        display: flex;
        list-style: none;
        justify-content: space-around;
        li{
            color: #777;
            font-size: 15px;
            height: 45px;
            flex: 1;
            text-align: center;
            line-height: 45px;
        }
    }
    .zhong>.qiqu1{
        display: flex;
        flex-direction: column;
        list-style: none;
    }
</style>