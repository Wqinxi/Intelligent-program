<!-- 学生首页的每个课程卡片 -->
<template>
    <div :class="[Content.isActive ? 'class' : 'class  active']">
        <div class="top-wrap">
            <div class="top">
                <div class="header">
                    <p>
                        {{ Content.header }}
                    </p>
                </div>
                <div class="detail">
                    <p calss="content">
                    <h5>详情:</h5>{{ Content.detail }}</p>
                </div>
            </div>
        </div>
        <div class="progress-wrap">
            <div class="progress" :style="{ width: Content.progress }">
            </div>
            <p>充能：{{ Content.progress }}</p>
        </div>
    </div>
</template> 
<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue';
let list = withDefaults(defineProps<{ Content?: any }>(), {
    Content: () => {
        return {
            header: '课程A',
            detail: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            progress: '100%',
            isActive: true,
            task: 4
        }
    }
})
</script>

<style scoped lang="less">
@bgcolor: #d9d9d9;
@color: #000000;
@proGressBarColor: #5d5959;
@proGressColor: rgb(234, 255, 0);




.class {
    &.active {
        opacity: 0.3;
    }

    height: 249px;
    width: 219px;
    position: relative;
    overflow: hidden;
    background: @bgcolor;
    color: @color;
    border-radius: .7rem;





    .top-wrap {
        padding: 10px 20.5px;
        height: 186px;
        width: 100%;
        position: relative;
        overflow: hidden;

        .top {
            height: 100%;
            width: 100%;
            background-color: @bgcolor;

            .header {
                font-size: 32px;
                font-weight: 400;
            }

            .detail {
                width: 178px;
                height: 131px;

                p {
                    color: @color;
                    width: 100%;
                    height: 121px;
                    line-height: 20px;
                    word-wrap: break-word;

                    h5 {
                        font-size: 16px;
                        font-weight: 400;
                    }
                }
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
        animation: 2s linear dance6123 infinite;
        transform: scale(1) translateY(-1px);
    }

    .progress-wrap {
        height: 63px;
        background-color: #ffffff;
        position: relative;



        .progress {
            background-color: @proGressBarColor;
            width: 80%;
            height: 100%;
            line-height: 63px;
            padding-left: 5px;
            font-size: 32px;
        }

        p {
            position: absolute;
            top: 0px;
            z-index: 10;
            color: @proGressColor;
            line-height: 63px;
            text-indent: 1em;
            text-align: center;
            font-size: 32px;
            flex-wrap: nowrap;
            text-shadow: 0px 0px 15px @proGressColor;
        }
    }
}
</style>
