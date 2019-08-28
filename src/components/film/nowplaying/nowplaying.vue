<template>
	<div class="boox">
    <ul class="nowplaying">
		<!--通过点击事件为触发方法功能this.$router.push({name:"contents",params:{id:movie.id}})为其变成路由跳转到拥有同样name:"contents
		的路由就是一个匹配的过程params:{id:movie.id}就是存储的我点击当前的电影对应的信息在contents跳转组件页面通过this.$route.params.id来获取
		id根据id的值可以查看官网详情信息就可以知道拼接一个不同id就可以看到不同的详情信息
		-->
        <li v-for="movie in movieList" :key="movie.id" @click="exhibition(movie)">
			<div class="left">
				<img :src='movie.img.replace("w.h","128.180")' />
			</div>
			<div class="right">
				<div class="text">
					<p>
						<span>{{movie.nm}}</span>
                        <span v-if="movie.version">
                            <template  v-for="(ver,ind) in movie.version.substring(1).split(' ')">
                                <span :key="ind">
                                    {{ver.toUpperCase()}}
                                </span>
                            </template>
                        </span>
					</p>
					<p v-if="movie.globalReleased && movie.sc">
                        观众评分<span>{{movie.sc}}</span>
					</p>
                    <p v-else-if="movie.globalReleased">
                        暂无评分
                    </p>
                    <p v-else>
                        <span>{{movie.wish}}</span>人想看
                    </p>
					
					<p v-if="movie.star" style="width: 147px">
						主演: <span>{{movie.star}}</span>
					</p>
					<p>{{movie.showInfo}}</p>
				</div>
				<div :class="['btn', movie.globalReleased?'red':'blue']">
					{{movie.globalReleased? '购票':'预售'}}
				</div>
			</div>
		</li>
    </ul>
	</div>
</template>
<script>
export default {
    data() {
        return {
            movieList: [],
			show: true
        }
    },
    created() {
        this.getData()  //调用methods里面的方法
    },
    methods: {
        async getData(){
            let res = await this.$http.get("/ajax/movieOnInfoList?token=");
            this.movieList = res.data.movieList //获取电影数据
			console.log(res.data.movieList);
		},
		exhibition(movie){
			this.$router.push({name:"contents",params:{id:movie.id}})
		},
    },
}
</script>

<style lang="scss" scoped>
	.boox{
		margin: 0 15px;
	}
    .nowplaying{
		margin-left: 0px;
		margin-right: 10px;
		display: flex;
		flex-direction: column;
		margin-bottom: 49px;
	}
	.nowplaying li{
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
	}
	.nowplaying li .left{
		width: 64px;
		height: 90px;
	}
	.nowplaying li .left img{
		height: 100%;
	}
	.nowplaying li .right{
		width: 200px;
		margin-left: 8px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 90px;
		padding: 10px 0;
		border-bottom: 1px solid #F0F0F0;
	}
	.nowplaying li .right .text{
		width: 147px;
		font-size: 12px;
		color: #666;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		color: #777;
	}
	.text>p{
		width: 147px;
	}
	.nowplaying li .right .text p:nth-child(1){
		display: flex;
	}
	.nowplaying li .right .text p:nth-child(1)>span:nth-child(1){
		font-size: 16px;
		font-weight: bold;
		color: #333;
		display: inline-block;
		max-width: 180px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.nowplaying li .right .text p:nth-child(1)>span:nth-child(2){
		border: 1px solid #3c9fe6;
		font-size: 12px;
		font-weight: normal;
		border-radius: 3px;
		display: flex;
		align-items: center;
		margin-left: 5px;
	}
	.nowplaying li .right .text p:nth-child(1)>span:nth-child(2) span:nth-child(1){
		background: #3C9FE6;
		color: #fff;
		padding: 0 2px;
		height: 100%;
		display: flex;
		align-items: center;
	}
	.nowplaying li .right .text p:nth-child(1)>span:nth-child(2) span:nth-child(2){
		color: #3C9FE6;
		display: flex;
		align-items: center;
	}
	.nowplaying li .right .text p:nth-child(2) span:nth-child(1){
		margin-right: 5px;
		color: #faaf00;
		font-weight: bold;
		font-size: 14px;
	}
	.nowplaying li .right .text p:nth-child(3){
		width: 147px;
		font-size: 13px;
		width: 16em;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.nowplaying li .right .btn{
		width: 47px;
		height: 27px;
		color: #fff;
		line-height: 27px;
		font-size: 12px;
		border-radius: 5px;
		text-align: center;
	}
	.nowplaying li .right .red{
		background: #EF4238;
	}
	.nowplaying li .right .blue{
		background: #3c9fe6;
	}
</style>