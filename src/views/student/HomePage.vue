<!-- 学生首页 -->
<script setup lang="ts">
import ClassCard from '@/views/student/components/ClassCard.vue'
import { storeToRefs } from 'pinia';
import mitter from '@/utils/emitter';
import { useRouter } from 'vue-router'
import { useUserDataStore } from '@/stores/userData'
import { useCurrentTaskStore } from '@/stores/activeTask';
let loge = 'https://gitcode.net/T_J_J_/picture/-/raw/master/03.jpg'
let userDataStore = useUserDataStore()
let CurrentTaskStore = useCurrentTaskStore()
let { userData } = userDataStore
const router = useRouter()

function toTheclass(task: number) {
    CurrentTaskStore.currentTask = task
    // console.log(userDataStore.userData.Data[useCurrentTaskStore().currentTask])
    mitter.emit('send-data', userDataStore.userData.Data[useCurrentTaskStore().currentTask])
    localStorage.setItem('currentTask', JSON.stringify(task))
    router.push({
        path: '/student/video',
    })
}
</script>

<template>
    <div class="body-wrap">
        <div class="body">
            <div class="content">
                <div class="content-wrap">
                    <ul>
                        <li v-for="(item, idx) in  userData.Data " @click="toTheclass(idx)">
                            <ClassCard :detail="item" :task="idx" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
.body-wrap {
    background-color:rgb(241, 244, 239) ;
    position: relative;
    height: 100vh;

    .body {
        overflow-y: auto;
        position: relative;
        height: 100%;
        width: 100%;

        .content {
            margin-top:-16%;
            margin-left:10%;
            position: relative;
            width: 80%;
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
                        height: 200px;
                        width: 170px;
                        margin-left: 13vh;
                        margin-bottom: 88px;
                        cursor: pointer;
                        transition: all .5s;
                        box-shadow: 0px 1px 4px 0 rgba(0, 0, 0, .37);

                        &:hover {
                            transform: scale(1.1);
                            transition: all .5s;
                            box-shadow: 0px 1px 10px 0 rgba(0, 0, 0, .37);
                        }
                    }

                    &:hover>li:not(:hover) {
                        transform: scale(0.9, 0.9);
                        box-shadow: 0px 1px 4px 0 rgba(0, 0, 0, .37);
                    }
                }
            }
        }

    }
}
</style>