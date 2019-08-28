<template>
   <div>
       <div class="nameUser">
           <ul>
               <li v-for="(item,index) in list" @click="show1(index)" :class="inde==index?'active':''">{{item}}</li>
           </ul>
       </div>
       <div v-if="inde==0" class="zhang">
           <input type="text" placeholder="帐户名/手机号/Email">
           <input type="password" placeholder="请输入你的密码">
       </div>
       <div v-if="inde==1" class="shou">
           <p class="p1"><input type="text" placeholder="请输入手机号码" class="ji"><button type="button" value="获取手机验证码" class="ma">获取手机验证码</button></p>
           <p><input type="text" placeholder="请输入手机验证码" class="yan"></p>
       </div>
       <button type="button" value="登陆" class="deng">登陆</button>
       <div class="zhao"><span>立即注册</span><span>找回密码</span></div>
       <div class="kefu"><span>© 猫眼电影 客服电话：</span><span>400-670-5335</span></div>
   </div>
</template>

<script>
    export default {
        data(){
            return{
                list:["美团账号登陆","手机验证登陆"],
                inde:0
            }
        },
        methods:{
            show1(i){
                this.inde=i
                /*var t1=document.getElementsByClassName("zhang")[0]
                var t2=document.getElementsByClassName("shou")[0]
                    if (i==0){
                    t1.style.display="block"
                    t2.style.display="none"
                     } else {
                        t2.style.display="block"
                        t1.style.display="none"
                         }*/
            }
        }
    }
</script>

<style scoped>
    .nameUser{
        margin-top: 50px;
    }
    html,body,div,ul,li,button{
        margin: 0;
        padding: 0;
    }
    .nameUser>ul{
        padding: 0px 20px 8px 20px;
        border-bottom: 4px solid #D6D6D6;
        list-style: none;
        display: flex;
        justify-content: space-between;
        background: #FFFFFF;
    }
    .nameUser>ul>li{
        flex: 1;
        text-align: center;
        height: 37px;
        font-size: 14px;
        line-height: 37px;
        margin-bottom: -11px;
    }
    .active{
        border-bottom: 4px solid #FFC300;
    }
    .zhang>input{
        height: 44px;
        width: 100%;
        padding-left: 20px;
        background: none;
        outline: none;
        border: none;
        border-bottom: 1px solid #D6D6D6;
    }
    .shou>p{
        height: 44px;
        width: 100%;
        border-bottom: 0.03125rem solid #D6D6D6;
    }
    .shou>p>input{
        outline: none;
        border: none;
        line-height: 44px;
    }
    .p1{
        display: flex;
        justify-content: space-around;
        align-content: center;
    }
    .ji{
        margin-left: 11px;
        height: 28px;
        line-height: 28px;
        margin-top: 10px;
        margin-left: 10px;
        width: 60%;
    }
    .yan{
        margin-left: 11px;
        height: 28px;
        line-height: 28px;
        margin-top: 10px;
        background: #D6D6D6;
        width: 100%;
        border-radius: 5px;
    }
    .ma{
        width: 100px;
        height: 30px;
        background: #dcdcdc;
        color: #999;
        border-radius: 5px;
        margin-right: 10px;
        margin-top: 10px;
    }
    .deng{
        background: none;
        outline: none;
        border: none;
        background: #DF2D2D;
        margin: 15px 11px 0 11px;
        height: 30px;
        width: 100%;
        font-size: 15px;
        color: white;
    }
    .zhao{
        color: #FFC300;
        font-size: 13px;
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        padding: 0 10px;
    }
    .kefu{
        width: 100%;
        text-align: center;
        font-size: 15px;
        margin-top: 5px;
    }
    .kefu>span:nth-child(2){
        color: red;
    }
</style>