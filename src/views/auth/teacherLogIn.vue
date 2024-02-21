<template>
    <div class="wrap">
        <div class="content">
            <div class="item">
                <p>用户名：</p>
                <input type="text" name="userName" v-model="userName">
            </div>
            <div class="item">
                <p>密码：</p>
                <input type="password" name="password" id="" v-model="password">
            </div>
            <div class="button">
                <button @click="login"> 登录</button>
                <button @click="register">注册</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useToken } from '@/stores/token'
let token = useToken().token
let changeToken = useToken().changeToken
const router = useRouter()
let userName = ref('')
let password = ref('')
function login() {
    axios({
        url: "http://127.0.0.1:4523/m1/4023739-0-default/login",
        method: 'post',
        params: {
            password,
            userName
        }
    }).then(res => {
        let newToken = res.data.token
        changeToken(newToken)
    })
    router.push("/teacher")
}
function register() {
    axios({
        url: "http://127.0.0.1:4523/m1/4023739-0-default/register",
        method: 'post',
        params: {
            password,
            userName
        }
    }).then(res => {
        let newToken = res.data.token
        changeToken(newToken)
    })
    router.push("/teacher")
}
</script>

<style lang="less" scoped>
.wrap {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
        height: 50%;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        .item {
            display: flex;
            flex-direction: row;
            height: 25px;

            input {
                background-color: #ffe4c4;
                height: 25px;
                width: 300px;
                outline: none;
                border: none;
                border-bottom: 1px solid #000;
            }

            p {
                line-height: 25px;
                white-space: nowrap;
                z-index: 10;
            }
        }

        .button {
            width: 100%;
            height: 25px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            button {
                height: 100%;
                width: 50px;
                line-height: 25px;
                border: #ffe4c4 1px solid;
                background: #f1cbdc;
            }
        }
    }
}
</style>