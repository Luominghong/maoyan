<template>
<h1>啥都没有</h1>
</template>

<script>
    export default {
        created(){
            this.getData()
        },
       methods: {
           async getData() {
               let res = await $.get("https://www.easy-mock.com/mock/5d5dfff6d0506f041064b6ec/chengshi/chengshi");
               console.log(res);
               this.mycinemas = res;
           }
       }
    }
</script>

<style lang="scss" scoped>

</style>