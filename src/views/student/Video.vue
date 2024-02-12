<!-- 视频页 -->
<template>
    <div class="content">
        <Task :courseList="courseList" />
        <!-- 数据传给Task -->
    </div>
</template>
<script lang="ts" setup>
import { useCurrentStackStore } from '@/stores/currentTask'
import Task from '@/views/student/program/Task.vue'
import axios from 'axios'
const CurrentStackStore = useCurrentStackStore()//得到第几个课程

async function getData() {
    try {
        let result = await axios.get('')
    }
    catch (error) {
        alert(error)
    }
}
// 请求所得数据,是第几个课程就请求哪一个
let courseList =
{
    name: '课程A',
    imgSrc: 'https://gitcode.net/T_J_J_/picture/-/raw/master/03.jpg',
    courseDetail: "akjdlgps;fiouhaadfsv2456+2456aefvadfaefghimorsuvhiegrstvijmogsvchijmnsvghijmnpumoujegrvhimouegrvahimouegrsvhiojmusv+2456789adfsv+624589a+56pjhfdsokjfpaiodksjaag",
    coursePage: [//课程的小结视频
        {
            name: 'ginouaefrvghinouefqrvginouyertvwghinoruvwyeghinoruvwyeghioruvw',
            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
        },
        {
            name: 'ginouaefrvghinouefqrvginouyertvwghinoruvwyeghinoruvwyeghioruvw',
            videoSrc: 'https://csdssssssdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
        },
        {
            name: 'ginouaefrvghinouefqrvginouyertvwghinoruvwyeghinoruvwyeghioruvw',
            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
        },
        {
            name: 'ginouaefrvghinouefqrvginouyertvwghinoruvwyeghinoruvwyeghioruvw',
            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
        },
    ]
}

</script>
<style lang="less" scoped>
.content {
    position: relative;
    top: 8.6vh;
    height: 91.4vh;
}
</style>