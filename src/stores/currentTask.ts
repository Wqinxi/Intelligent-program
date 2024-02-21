import { defineStore } from "pinia";
export const useCurrentStackStore = defineStore('currentTask', () => {
    let task = 1
    function changeTask(current: number) {
        task = current
    }
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
    return { task, changeTask, courseList }
})