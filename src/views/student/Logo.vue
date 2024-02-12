<!-- 用来放Logo -->
<template>
    <div class="logo">
        <img :src=imgSrc alt="">
    </div>
</template>
<script lang="ts" setup>
//Logo
let imgSrc = 'https://gitcode.net/T_J_J_/picture/-/raw/master/03.jpg'
</script>
<style scoped lang="less">
.logo {
    background-color: #D9D9D9;
    height: 119px;
    width: 475px;
    position: relative;

    img {
        height: 100%;
        width: 100%;
    }
}
</style>