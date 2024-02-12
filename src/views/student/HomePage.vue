<!-- 学生首页 -->
<script setup lang="ts">
import Logo from '@/views/student/Logo.vue'
import Class from '@/views/student/Class.vue'
import { useRouter } from 'vue-router'
import { useCurrentStackStore } from '@/stores/currentTask'
const CurrentStackStore = useCurrentStackStore()
let Content = [{
    header: 'ehrtehrt课程A',
    detail: 'xxxxxxxxxasdffxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    progress: '10%',
    isActive: true,
    task: 1
}, {
    header: '课asd程A',
    detail: 'xxxxxxxxxfadsfxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    progress: '70%',
    isActive: true,
    task: 2
}, {
    header: '课程A',
    detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    progress: '30%',
    isActive: true,
    task: 3
}, {
    header: '课程A',
    detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    progress: '100%',
    isActive: true,
    task: 4
}, {
    header: '课程A',
    detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    progress: '70%',
    isActive: true,
    task: 5
}, {
    header: '课程A',
    detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    progress: '50%',
    isActive: true,
    task: 6
}, {
    header: '课程A',
    detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    progress: '70%',
    isActive: true,
    task: 7
}, {
    header: '课程A',
    detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    progress: '70%',
    isActive: true,
    task: 8
}, {
    header: '课程A',
    detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    progress: '70%',
    isActive: false,
    task: 9
}, {
    header: '课程A',
    detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    progress: '70%',
    isActive: false,
    task: 10
}, {
    header: '课程A',
    detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    progress: '70%',
    isActive: false,
    task: 11
}, {
    header: '课程A',
    detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    progress: '70%',
    isActive: false,
    task: 11
}, {
    header: '课程A',
    detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    progress: '70%',
    isActive: false,
    task: 11
}, {
    header: '课程A',
    detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    progress: '70%',
    isActive: false,
    task: 11
}, {
    header: '课程A',
    detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    progress: '70%',
    isActive: false,
    task: 11
},]
const router = useRouter()
function toTheclass(task: number, isActive: boolean) {
    if (isActive) {
        router.push({
            path: '/student/video',
        })
        CurrentStackStore.task = task
        console.log("当前是第", CurrentStackStore.task, "个课程")
    }
    else {
        alert('加油!!! (ง •_•)ง')
    }
}
</script>

<template>
    <div class="body-wrap">
        <div class="body">
            <div class="logo">
                <Logo />
            </div>
            <div class="content">
                <div class="content-wrap">
                    <ul>
                        <li v-for="item in  Content " @click="toTheclass(item.task, item.isActive)">
                            <Class :Content="item" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>    
<style scoped lang="less">
.body-wrap {
    position: relative;
    background-image: linear-gradient(to bottom, #3778d9b4, #7f94e19a, #afb4e9, #d7d6f1, #fafafa);
    height: 100vh;

    .body {
        overflow-y: auto;
        position: relative;
        height: 100%;
        width: 100%;

        .logo {
            position: absolute;
            top: 8.6vh;
            left: 50%;
            transform: translateX(-50%);
        }

        .content {
            position: relative;
            width: 100%;
            top: 322px;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;

            .content-wrap {
                width: 1290px;
                height: 100%;

                ul {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    position: relative;
                    right: 5.25vh;




                    li {
                        margin-left: 10.5vh;
                        -ms-flex-item-align: center;
                        height: 249px;
                        width: 219px;
                        margin-bottom: 88px;
                        cursor: pointer;
                        box-shadow: 22px 22px 45px #5a5a5aab,
                            -22px -22px 45px #ffffff;
                        transition: all .5s;
                        border-radius: 10px 0px 10px 10px;

                        &:hover {
                            box-shadow: 11px 11px 22px #5a5a5a99,
                                -11px -11px 22px #ffffff;
                            transform: scale(1.1);
                            transition: all .5s;
                        }
                    }

                    &:hover>li:not(:hover) {
                        filter: blur(10px);
                        transform: scale(0.9, 0.9);
                    }
                }
            }
        }

    }
}
</style>