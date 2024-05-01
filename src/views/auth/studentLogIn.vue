<template>
    <div class="wrap">
        <div class="log-buttons">
            <el-button class="log-button" @click="studentlogin">学生登录</el-button>
            <el-button class="log-button" @click="teacherlogin">教师登录</el-button>
        </div>
        <div class="content">
            <div class="item">
                <div class="label">用户名：</div>
                <input class="put" type="text" name="userName" v-model="userName">
            </div>
            <div class="item">
                <div class="label">密码：</div>
                <input class="put" type="password" name="password" id="" v-model="password">
            </div>
            <div class="button">
                <button @click="login"> 登录</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useUserDataStore } from '@/stores/userData';
import API from '@/api/request.js'
let useUserData = useUserDataStore()// 有token,username,password

const router = useRouter()
let userName = ref('')
let password = ref('')
function studentlogin(){
    router.push("/auth")
}
function teacherlogin(){
    router.push("/auth/teacherLogIn")
}

const {REQUEST_URL} = API() 
function login() {
    let pwd = password.value
    let uname = userName.value
    axios.post(REQUEST_URL + "/user/login", {
        username: uname,
        password: pwd
    }).then(res => {
        let token = res.data.data.token
        console.log(token)
        localStorage.setItem('token', token)
        router.push("/student")
    })
}
function register() {
    // 发送请求 
    // axios({
    //     url: "http://127.0.0.1:4523/m1/4023739-0-default/register",
    //     method: 'post',
    //     params: {
    //         password,
    //         userName
    //     }
    // }).then(res => {
    //     let newToken = res.data.token
    //     changeToken(newToken)
    // })
}
</script>

<style lang="less" scoped>
.wrap {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .log-buttons{
        margin-bottom:90%;
        display: flex;
        flex-direction: row;
        justify-content: space-between; 

        .log-button{
            margin:10px;
            background-color: #ffffff;
            border-color: #ffffff;
            color:#5c9043; 
            font-size: 16px;
        }
    }

    .content {
        height: 70%;
        width: 50%;
        margin-left:-60%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        .item {
            display: flex;
            flex-direction: column; 
            margin-top: -10%;
            margin-bottom: -50%;;

            .label{
                display:block;
                margin-bottom: 5px;
                color:#c1c1c1;
                font-size:14px;
            }

            input{
                box-shadow: 0 0 0 30px rgb(241, 244, 239) inset !important;
                background-color: rgb(241, 244, 239);
                height: 30px;
                width: 230px;
                outline: none;
                border: none;
            }

            p {
                line-height: 25px;
                white-space: nowrap;
                z-index: 10;
            }
        }

        .button {
            width: 230px;
            height: 33px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            button {
                height: 100%;
                width: 100%;
                line-height: 25px;
                border: none;
                background:#5c9043;
                color:#ffffff;
                font-size:16px;

                &:hover {
                    border: 1px solid #20461d;
                }
            }
        }
    }
}
</style>