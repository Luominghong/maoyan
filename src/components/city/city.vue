<template>
    <div>
        <mt-index-list>
            <template v-for="item in dealArr">
                <mt-index-section :index="item.title" :key="item.title">
                    <template v-for="each in item.content">
                        <mt-cell @click.native="selectCity(each)" :title="each.name" :key="each.cityId"></mt-cell>
                    </template>
                </mt-index-section>
            </template>
        </mt-index-list>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        data() {
            return {
                allCity: [],
                letterArr: [],   //所有字母
                dealArr: []     //处理数据之后的数组
            }
        },
        async created() {
            let res = await this.$http.get("https://www.easy-mock.com/mock/5ba06ec82ee5a7654dc13dd7/example/city");
            this.allCity = res.data.data.cities;     //获取的所有城市数据
            // 获取所有的城市首字母(遍历)
            for(var i=65; i<91; i++){
                if(String.fromCharCode(i) != "I" && String.fromCharCode(i) != "O" && String.fromCharCode(i) != "U" && String.fromCharCode(i) != "V")
                    this.letterArr.push(String.fromCharCode(i));
            }
            // 根据城市首字母进行归类处理
            var obj = {}
            this.letterArr.forEach(item=>{
                obj = {title: item, content: []};
                this.dealArr.push(obj) //[{title: "A"},{title: "B"} ]
                this.allCity.forEach(each=>{
                    if(each.pinyin.charAt(0).toUpperCase() == item){
                        obj.content.push(each)
                    }
                })
            })
        },
        methods: {
            selectCity(each){
                this.$router.go(-1);    //回退到上一页
                this.$store.commit("changeCity", each)  //触发mutations的城市状态值改变
                this.$store.commit("changeShow", true)  //触发mutations的show状态值改变
                // window.localStorage.setItem('selectedCity', each.name)
            }
        },
    };
</script>

<style lang="scss" scoped>

</style>