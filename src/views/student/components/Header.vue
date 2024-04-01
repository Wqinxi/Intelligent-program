<!-- 学生页的Header -->
<template>
    <div class="header">
        <div class="wrap-left">
            <div class="logo">智能编程平台</div>
            <div class="home" @click="goHome">
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19 19C19 19.5523 18.5523 20 18 20H4C3.44772 20 3 19.5523 3 19V10H0L10.3273 0.611503C10.7087 0.264753 11.2913 0.264753 11.6727 0.611503L22 10H19V19Z" />
                </svg>
                <p class="back-home">回到主界面</p>
            </div>
            <div class="change">
                <div class="back" @click="goBack">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.8284 7.0007L7.7782 11.9504L6.364 13.3646L0 7.0007L6.364 0.636719L7.7782 2.05093L2.8284 7.0007Z"
                            fill="#666666" />
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
            <div class="img"><img :src="headImg" alt=""></div>
            <div class="save" style="cursor:pointer">保存进度</div>
            <div class="login" @click="goLogin">登录</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useUserDataStore } from '@/stores/userData';
let useUserData = useUserDataStore()
let headImg = useUserData.userData.userHeadImgs
import axios from 'axios'
import { ref } from 'vue'
// let result=axios.get('')// 获取头像图片
const router = useRouter()
function goBack() {
    window.history.go(-1)
}
function goFowards() {
    window.history.go(1)
}
function goHome() {
    router.push('/student')
}
function goLogin() {
    router.push('/auth/studentLogIn')
}
</script>
<style scoped lang="less">
@radius: 1vh;

.header {
    z-index: 999;
    height: 7vh;
    width: 100%;
    background-color: #ffffff;
    position: relative;
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 50px #ffffff5d;
    border-bottom: 1px solid #d9d9d990;
    color:#5da365;
    white-space: nowrap;
    font-weight: 550;

    .wrap-left {
        height: 5.5vh;
        line-height: 5.5vh;
        width: 40vh;
        margin-left: 4.5vh;
        position: relative;
        display: flex;
        justify-content: space-between;

        .logo {
            height: 90%;
            margin: 0px 3vh;
            margin-top: 1%;
            margin-left:-1%;
            white-space: nowrap;
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 18vh;
            font-weight: 900;
            font-size: 25px;
            color:  #2d5331;
        }

        .home {
            margin-left: 15%;
            margin-top: 1%;
            height: 90%;
            width: 18vh;
            display: flex;
            align-items: center;
            justify-content: space-around;
            cursor: pointer;
            border-radius: @radius;

            svg {
                path {
                    fill: #6cb975;
                }
            }

            &:hover {
                color: #6cb975;

                svg {
                    path {
                        fill:  #6cb975;
                    }
                }
            }

            p {
                margin-left: 1vh;
            }
        }

        .change {
            margin-top: 1%;
            height: 100%;
            width: 7.5vh;
            display: flex;
            align-items: center;
            justify-content: space-between;
            line-height: 24px;
            text-align: center;

            &>:hover {
                svg {
                    path {
                        fill: #c4c4c4;
                    }
                }
            }

            .back {
                margin-left:30%;
                margin-right:30%;
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
        width: 30vh;
        position: absolute;
        right: 8vh;
        display: flex;
        justify-content: space-between;

        .img {
            height: 5.5vh;
            width: 5.5vh;
            border-radius: 50%;
            overflow: hidden;

            img {
                height: 100%;
                width: 100%;
            }
        }

        .save {
            line-height: 5.5vh;
            text-align: center;

            &:hover {
                color: #6cb975;
            }
        }

        .login {
            line-height: 5.5vh;
            text-align: center;
            width: 12vh;
            cursor: pointer;

            &:hover {
                color: #6cb975;
            }
        }
    }
}
</style>