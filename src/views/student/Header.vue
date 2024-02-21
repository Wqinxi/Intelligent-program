<!-- 学生页的Header -->
<template>
    <div class="header">
        <div class="wrap-left">

            <div class="home" @click="goHome"><svg width="22" height="20" viewBox="0 0 22 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19 19C19 19.5523 18.5523 20 18 20H4C3.44772 20 3 19.5523 3 19V10H0L10.3273 0.611503C10.7087 0.264753 11.2913 0.264753 11.6727 0.611503L22 10H19V19Z"
                        fill="#666666" />
                </svg>
                <p>回到主界面</p>
            </div>
            <div class="change">
                <div class="back" @click="goBack">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.8284 7.0007L7.7782 11.9504L6.364 13.3646L0 7.0007L6.364 0.636719L7.7782 2.05093L2.8284 7.0007Z"
                            fill="black" />
                    </svg>

                </div>
                <div class="fowards" @click="goFowards">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.1717 7.0007L0.221924 2.05093L1.63614 0.636719L8.0001 7.0007L1.63614 13.3646L0.221924 11.9504L5.1717 7.0007Z"
                            fill="#666666" />
                    </svg>

                </div>
            </div>

        </div>
        <div class="wrap">
            <div class="img"><img :src="imgSrc" alt=""></div>
            <div class="login" @click="goLogin">登录</div>
            <div class="select">
                <select name="" id="">
                    <option value="">简体中文</option>
                </select>

            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import axios from 'axios'
import { ref } from 'vue'
let imgSrc = ref('https://gitcode.net/T_J_J_/picture/-/raw/master/03.jpg')
// let result=axios.get('')// 获取头像图片


const router = useRouter()
function goBack() {
    window.history.go(-1)
}
function goFowards() {
    window.history.go(1)
}
function goHome() {
    router.push('/')
}
function goLogin() {
    router.push('/auth/login')
}
</script>
<style scoped lang="less">
@radius: 1vh;

.header {
    z-index: 999;
    height: 7vh;
    width: 100%;
    background-color: transparent;
    backdrop-filter: blur(20px);
    position: relative;
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 50px #ffffff5d;
    border-bottom: 1px solid #d9d9d990;

    .wrap-left {
        height: 5.5vh;
        width: 218px;
        margin-left: 32px;
        position: relative;
        display: flex;
        justify-content: space-between;

        .home {
            margin-top: 1%;
            height: 90%;
            width: 130px;
            background-color: #d9d9d9e3;
            display: flex;
            align-items: center;
            justify-content: space-around;
            cursor: pointer;
            border-radius: @radius;
            box-shadow: 5px 5px 10px #b3b3b3cd,
                -5px -5px 10px #ffffffac,
                inset -5px -5px 10px #ffffffac,
                inset 5px 5px 10px #b3b3b3cd, ;
        }

        .change {
            margin-top: 1%;
            height: 100%;
            width: 56px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            line-height: 24px;
            text-align: center;

            .back {
                cursor: pointer;
                height: 24px;
                width: 24px;
                position: relative;
            }

            .fowards {
                cursor: pointer;
                height: 24px;
                width: 24px;
            }
        }
    }

    .wrap {
        height: 5.5vh;
        width: 296px;
        position: absolute;
        right: 57px;
        display: flex;
        justify-content: space-between;

        .img {
            height: 5.5vh;
            width: 5.5vh;
            border-radius: 50%;
            background-color: #D9D9D9;

            img {
                height: 100%;
                width: 100%;
                border-radius: 50%;
            }
        }

        .login {
            line-height: 5.5vh;
            text-align: center;
            width: 89px;
            background-color: #D9D9D9;
            cursor: pointer;
            border-radius: @radius;
            box-shadow: 3px 3px 20px #b3b3b3cd,
                -3px -3px 20px #ffffffac,
                inset -5px -5px 10px #ffffffac,
                inset 5px 5px 10px #b3b3b3cd, ;
        }

        .select {
            width: 17.5vh;

            select {
                border-radius: @radius;
                cursor: pointer;
                height: 100%;
                width: 100%;
                background-color: #D9D9D9;
                outline: none;
                border: none;
                box-shadow: 3px 3px 20px #b3b3b3cd,
                    -3px -3px 20px #ffffffac,
                    inset -5px -5px 10px #ffffffac,
                    inset 5px 5px 10px #b3b3b3cd, ;

                option {
                    text-align: center;
                    font-size: 20px;
                    font-weight: 400;
                    box-shadow: 3px 3px 20px #b3b3b3cd,
                        -3px -3px 20px #ffffffac,
                        inset -5px -5px 10px #ffffffac,
                        inset 5px 5px 10px #b3b3b3cd, ;
                }
            }
        }
    }
}
</style>