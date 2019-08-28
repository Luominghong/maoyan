<template>
    <div class="header">
        <span v-if="back">←</span>
        {{ title }}
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        back: Boolean
    }
}
</script>

<style lang="scss" scoped>
    .header{
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
        span{
            position: absolute;
            left: 15px;
        }
    }
</style>