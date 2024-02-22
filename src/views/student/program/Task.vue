<!-- 每个课程的视频 -->
<template>
    <div class="wrap">
        <div class="header">
            <div class="header-left">
                <p>
                    {{ courseList.name }}:第{{ toChineseNum(currentLesson) }}讲
                </p>
            </div>
            <div class="header-right" @click="goCoding"><span>进入编程</span></div>
        </div>
        <div class="body">
            <div class="left-wrap">
                <video :src="videoSrc" controls></video>
            </div>
            <div class="right-wrap">
                <div class="detail-wrap">
                    <div class="detail-img"><img alt="" :src="courseList.imgSrc"></div>
                    <div class="detail">
                        <h5>课程详情：</h5>
                        <p>
                            {{ courseList.courseDetail }}
                        </p>
                    </div>
                </div>
                <div class="class-list">
                    <div class="list-header">
                        <h3>课程目录</h3>
                    </div>
                    <div class="course">
                        <ul>
                            <li v-for="(item, idx) in courseList.coursePage" @click="changeVideo(item.videoSrc, idx)">
                                <p> 第{{ toChineseNum(idx + 1) }}讲:{{ item.name }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCurrentStackStore } from '@/stores/currentTask'
import { useToken } from '@/stores/token'
import API from '@/api/request.js'
let { GetNowTask } = API();
let token = useToken().token;
const CurrentStackStore = useCurrentStackStore()//得到第几个课程
let task = CurrentStackStore.task
// 请求所得数据,是第几个课程就请求哪一个
GetNowTask(token, task)
let courseList = CurrentStackStore.courseList
const router = useRouter()
let currentLesson = ref(1);
let videoSrc = ref(courseList.coursePage[0].videoSrc)
function changeVideo(src: string, idx: number) {
    videoSrc.value = src
    currentLesson.value = idx + 1;
    console.log(`初${task}个课程`, courseList)

}

// 未定式
function goCoding() {
    router.push('/student/program')
}


function toChineseNum(number: any) {
    const chineseNum = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
    const chineseUnit = ["", "十", "百", "千", "万", "亿"];
    let numStr = number.toString();
    let len = numStr.length;
    let str = "";
    for (let i = 0; i < len; i++) {
        str += chineseNum[parseInt(numStr[i])] + chineseUnit[len - 1 - i];
    }
    str = str.replace(/零[十百千]/g, "零");
    str = str.replace(/零+/g, "零");
    str = str.replace(/^零+/, "");
    str = str.replace(/零+$/, "");
    if (str[str.length - 1] === "零") {
        str = str.slice(0, -1);
    }
    return str;
}


</script>
<style scoped lang="less">
.wrap {
    // height: 1016px;
    height: 91.4vh;
    width: 100%;
    position: relative;

    .header {
        height: 8vh;
        width: 100%;
        background-color: hsl(0, 3%, 29%);
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .header-left {
            line-height: 8vh;
            text-indent: 2vh;
            color: #fff;
            font-size: 3vh;
        }

        .header-right {
            height: 5.5vh;
            width: 17.5vh;
            margin-right: 2.5vh;

            text-align: center;
            font-weight: 400;
            /* Yoinked from CodePen, but improved the animation
so that it is smooth among other more minor things */
            display: block;
            cursor: pointer;
            color: white;
            position: relative;
            font-weight: 600;
            border-radius: 6px;
            overflow: hidden;
            padding: 3px;
            isolation: isolate;


            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 400%;
                height: 100%;
                background: linear-gradient(115deg, #4fcf70, #fad648, #a767e5, #12bcfe, #44ce7b);
                background-size: 25% 100%;
                animation: an-at-keyframe-css-at-rule-that-translates-via-the-transform-property-the-background-by-negative-25-percent-of-its-width-so-that-it-gives-a-nice-border-animation_-We-use-the-translate-property-to-have-a-nice-transition-so-it_s-not-a-jerk-of-a-start-or-stop .75s linear infinite;
                animation-play-state: paused;
                translate: -5% 0%;
                transition: translate 0.25s ease-out;
            }

            &:hover::before {
                animation-play-state: running;
                transition-duration: 0.75s;
                translate: 0% 0%;
            }

            @keyframes an-at-keyframe-css-at-rule-that-translates-via-the-transform-property-the-background-by-negative-25-percent-of-its-width-so-that-it-gives-a-nice-border-animation_-We-use-the-translate-property-to-have-a-nice-transition-so-it_s-not-a-jerk-of-a-start-or-stop {
                to {
                    transform: translateX(-25%);
                }
            }

            & span {
                line-height: 5vh;
                position: relative;
                display: block;
                font-size: 1.1rem;
                background: #000;
                border-radius: 3px;
                height: 100%;
            }

        }

    }

    .body {
        height: 83.4vh;
        width: 100%;
        display: flex;

        .left-wrap {
            width: 75%;
            height: 83.4vh;
            position: relative;

            video {
                height: 99%;
                width: 100%;
                object-fit: cover !important;
                margin: 0px;
                padding: 0px;
                background-color: burlywood;
            }
        }

        .right-wrap {
            height: 83.4vh;
            width: 25%;
            position: relative;

            .detail-wrap {
                position: relative;
                height: 16.5vh;
                width: 100%;
                display: flex;

                .detail-img {
                    height: 16.5vh;
                    width: 16.5vh;
                    background-color: #d9d9d9;

                    img {
                        height: 100%;
                        width: 100%;
                    }
                }

                .detail {
                    height: 16.5vh;
                    width: 262px;
                    padding: 5px;

                    p {
                        height: 13.5vh;
                        line-height: 25px;
                        text-indent: 1em;
                        word-wrap: break-word;
                        -webkit-line-clamp: 4;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        display: -webkit-box;
                        text-overflow: ellipsis;

                    }

                    h5 {
                        font-size: 17px;
                        font-weight: 500;
                    }
                }
            }

            .class-list {
                height: 66.9vh;
                width: 100%;
                position: relative;

                .list-header {
                    height: 10vh;
                    border-bottom: 2px solid #999;

                    h3 {
                        line-height: 10vh;
                        text-align: center;
                        font-weight: 500;
                        font-size: 24px;
                    }
                }

                .course {
                    overflow-y: auto;
                    height: 56.9vh;


                    ul {
                        height: 100%;
                        width: 100%;

                        li {
                            height: 10vh;
                            border-bottom: 2px solid #9999995a;
                            font-size: 16px;
                            padding: 5px 15px;
                            cursor: pointer;
                            transition: all .5s .1s;

                            &:hover {
                                background-color: #999;
                                color: #fff;
                                transition: all .5s;
                            }

                            &.active {
                                background-color: #999;
                            }

                            p {
                                line-height: 10vh;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                text-wrap: nowrap;
                            }
                        }
                    }
                }
            }
        }
    }

}
</style> 