<template>
    <div class="commingsoon">
    <div id="box">
        <p>近期最受期待</p>
        <div>
            <ul>
                <li v-for="item in mydata">
                    <div class="tu">
                        <img :src='item.img.replace("w.h","128.180")'>
                        <p></p>
                        <p>{{item.wish}}<span>想看</span></p>
                    </div>
                    <p class="su">{{item.nm}}</p>
                    <p class="ri">{{item.comingTitle.slice(0,6)}}</p>
                </li>
            </ul>
        </div>
    </div>
    <div class="box1" v-for="item in mylassift">
        <p>{{item.title}}</p>
        <div v-for="each in item.content">
            <img :src='each.img.replace("w.h","128.180")'>
            <div class="nei">
                <ul>
                    <li class="li1"><span>{{each.nm}}</span><span>3DIMAX</span></li>
                    <li class="li2">{{each.wish}}<span>人想看</span></li>
                    <li class="li3">主演:{{each.star}}</li>
                    <li class="li4">{{each.rt}}上映</li>
                </ul>
                <span>预售</span>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            mydata:[],
            mylassift:[],
            comingTitle:[]
        }
    },
    created(){
      this.getData()
      this.getlassift()
    },
    methods:{
        async getData(){
            let res=await this.$http.get("/ajax/mostExpected?ci=30&limit=10&offset=0&token=")
            this.mydata=res.data.coming;
        },
        async getlassift(){
            let res=await this.$http.get('/ajax/comingList?ci=30&token=&limit=10');
            res.data.coming.forEach(item=>{
                this.comingTitle.push(item.comingTitle)
            })
            this.comingTitle=[...new Set(this.comingTitle)]
            var obj = {}
            this.comingTitle.forEach(item=>{
                obj = {title: item, content: []};
                this.mylassift.push(obj);
                res.data.coming.forEach(each=>{
                    if (each.comingTitle==item){
                        obj.content.push(each)
                    }
                })
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    html,body,div,p,ul,li,img{margin: 0px;padding: 0px}
    .commingsoon{
        margin: 0 15px;
    }
    #box{
        margin-right: 20px;
        padding: 12px 0px 20px 15px;
        height: 216px;
        border-bottom: 10px solid #F5F5F5;
        height: 160px;
    }
    #box>p{
        font-size: 14px;
        color: #333333;
        margin-bottom: 12px;
    }
    #box>div>ul{
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: flex-start;
        overflow-y: hidden;
    }
    #box>div>ul>li{
        width: 85px;
        margin-right: 15px;
    }
    #box>div>ul::-webkit-scrollbar {
        display: none;
    }
    .tu{
        position: relative;
    }
    .tu>img{
        width: 85px;
        height: 115px;
    }
    .tu>p:nth-of-type(1){
        width: 28px;
        height: 28px;
        background: #222222;
        position: absolute;
        top: 0;
        left: 0;
    }
    .tu>p:nth-of-type(2){
        width: 85px;
        font-size: 11px;
        font-weight: 600;
        color: #faaf00;
        position: absolute;
        bottom: 2px;
        left: 4px;
        overflow: hidden;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .su{
        font-size: 13px;
        color: #222222;
        margin-bottom: 3px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .ri{
        font-size: 12px;
        color: #999999;
    }
    html,body,div,p,ul,li,img{margin: 0px;padding: 0px}
    .box1{
        overflow: scroll;
        margin-right: 12px;
    }
    .box1>p{
        font-size: 14px;
        color: #333;
        padding: 12px 15px 0;
        margin-bottom: 15px;
    }
    .box1>div{
        height: 92px;
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }
    .box1>div>img{
        width: 64px;
        height: 90px;
        margin-left: 12px;
        margin-right: 12px;
    }
    .box1>div>.nei{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 15px;
        border-bottom: 1px solid #F5F5F5;
    }
    .nei>ul{
        list-style: none;
        margin-left: 0px;
        margin-right: 10px;
    }
    .nei>ul>li:not(:nth-child(1)){
        margin-top: 10px;
    }
    .nei>ul>li:nth-child(1){
        font-size: 17px;
        color: #333333;
        font-weight: 700;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .nei>ul>li:nth-child(2){
        font-size: 13px;
        color: #faaf00;
        font-weight: 600;
    }
    .nei>ul>li:nth-child(2)>span{
        color: #666;
    }
    .nei>ul>li:nth-child(3),.nei>ul>li:nth-child(4){
        font-size: 13px;
        color: #666666;
    }
    .nei>span{
        width: 50px;
        height: 27px;
        font-size: 12px;
        line-height: 27px;
        text-align: center;
        background: #3c9fe6;
        color: white;
        margin-right: 20px;
    }
</style>