<!-- 学生首页的每个课程卡片 -->
<template>
    <div :class="[detail.progress == '0%' ? 'class  active' : 'class']">
        <div class="top-wrap">
            <div class="top">
                <div class="header">
                    <p>
                        {{ task + 1 }}
                    </p>
                </div>
                <div class="detail">
                    <p calss="content">
                    <h5>{{ detail.title }}:</h5>{{ detail.detail }}
                    </p>
                </div>
                <div class="pro">{{ detail.progress }}</div>
            </div>
        </div>
        <div class="progress-wrap">
            <div class="progress" :style="{
        width: detail.progress, backgroundColor: (detail.progress == '100%' ? '#e8e839' : '#5d5959')
    }">
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue';
defineProps(['task', 'detail']);

</script>

<style scoped lang="less">
.class {
    &.active {
        opacity: 0.3;
        background-color: #d9d9d9;
    }

    color:#000000;
    height: 200px;
    width: 170px;
    position: relative;
    background: #ffffff;

    .top-wrap {
        height: 170px;
        width: 100%;
        position: relative;
        border-bottom: 1px solid #ace9bd8d;
        overflow: hidden;

        .top {
            height: 100%;
            width: 100%;

            .header {
                height: 40px;
                font-size: 30px;
                font-weight: 600;

                p {
                    margin-left: 5px;
                }
            }

            .detail {
                width: 178px;
                height: 100px;
                padding: 5px;

                p {
                    width: 100%;
                    line-height: 20px;
                    word-wrap: break-word;

                    h5 {
                        font-size: 16px;
                        font-weight: 400;
                    }
                }
            }

            .pro {
                height: 30px;
                width: 100%;
                font-size: 30px;
                line-height: 30px;
            }
        }
    }

    @keyframes dance6123 {
        to {
            background-position: 450px;
        }
    }

    &:hover .progress-wrap .progress {
        background-image: linear-gradient(to right,
                rgb(250, 82, 82),
                rgb(250, 82, 82) 16.65%,
                rgb(190, 75, 219) 16.65%,
                rgb(190, 75, 219) 33.3%,
                rgb(76, 110, 245) 33.3%,
                rgb(76, 110, 245) 49.95%,
                rgb(64, 192, 87) 49.95%,
                rgb(64, 192, 87) 66.6%,
                rgb(250, 176, 5) 66.6%,
                rgb(250, 176, 5) 83.25%,
                rgb(253, 126, 20) 83.25%,
                rgb(253, 126, 20) 100%,
                rgb(250, 82, 82) 100%);
        animation: 10s linear dance6123 infinite;
        transform: scale(1) translateY(0px);
    }

    .progress-wrap {
        height: 30px;
        width: 170px;
        background-color: #ffffff;
        position: absolute;
        bottom: 0px;

        .progress {
            background-color: rgb(255, 255, 255);
            width: 100%;
            height: 100%;
        }
    }
}
</style>
