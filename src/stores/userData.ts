import { defineStore } from "pinia";
import { onMounted, reactive } from "vue";
export const useUserDataStore = defineStore('useUserDataStore', () => {
    let userData = reactive({
        userName: 'userName',//用户名
        username: '',
        password: '',
        userHeadImgs: "https://gitcode.net/T_J_J_/picture/-/raw/master/03.jpg",//头像
        token: '12331213123132',
        Data: [//每个课程的列表
            {//第一个课程
                title: "课程A",//第一个课程的名字
                detail: "课程A的描述",//描述
                progress: "100%",//进度
                videoPage: {// 视频列表
                    courseImg: 'https://gitcode.net/T_J_J_/picture/-/raw/master/03.jpg',// 关于视频的图片
                    videoList: [
                        {
                            videoTitle: '课程A的视频1',//视频的title
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频2',
                            CurrentVideoTime: 0,
                            videoSrc: '1111hsttps://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频3',
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频4',
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                    ]
                },
                blockList: [// 当前任务的编程任务列表
                    {  // 第一个任务
                        id: 1,
                        isOver: false,
                        mapSrc: "/public/img/maze1-1.png",  // 地图
                        status: "",
                        blocks: [ //需要的模块
                            'forward',
                            'change_direction',
                        ],
                        game: {
                            player: {
                                direction: 1,  // 初始方向  0,1,2,3
                                x: 4,// 初始位置
                                y: 5
                            },
                            goal: {
                                x: 6,
                                y: 5
                            },
                            path: [// 路径
                                // [x, y]
                                [4, 5],
                                [5, 5],
                                [6, 5],
                            ]
                        },
                        max_blocks: 10,
                    },
                    {
                        id: 2,
                        isOver: false,
                        status: "",
                        mapSrc: "/public/img/maze1-2.png",
                        max_blocks: 10,
                        blocks: [
                            'forward',
                            'change_direction',
                            "while_do",
                            "if_else"
                        ],
                        game: {
                            player: {
                                direction: 1,
                                x: 3,
                                y: 4
                            },
                            goal: {
                                x: 6,
                                y: 6
                            },
                            path: [
                                // [x, y]
                                [3, 4],
                                [4, 4],
                                [5, 4],
                                [6, 4],
                                [6, 5],
                                [6, 6],
                            ]
                        }
                    },
                    {
                        id: 3,
                        isOver: false,
                        status: "",
                        mapSrc: "/public/img/maze1-3.png",
                        max_blocks: 10,
                        blocks: [
                            'forward',
                            'change_direction',
                            "while_do",
                            "if_else"
                        ],
                        game: {
                            player: {
                                direction: 1,
                                x: 3,
                                y: 6
                            },
                            goal: {
                                x: 8,
                                y: 4
                            },
                            path: [
                                // [x, y]
                                [3, 6],
                                [4, 6],
                                [5, 6],
                                [5, 5],
                                [5, 4],
                                [6, 4],
                                [7, 4],
                                [8, 4]
                            ]
                        }
                    },
                ]
            },
            {//第一个课程
                title: "课程B",//第一个课程的名字
                detail: "课程B的描述",//描述
                progress: "80%",//进度
                videoPage: {// 视频列表
                    courseImg: 'https://gitcode.net/T_J_J_/picture/-/raw/master/03.jpg',// 关于视频的图片
                    videoList: [
                        {
                            videoTitle: '课程B的视频1',//视频的title
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程B的视频2',
                            CurrentVideoTime: 0,
                            videoSrc: '1111hsttps://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程B的视频3',
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程B的视频4',
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                    ]
                },
                blockList: [// 当前任务的编程任务列表
                    {  // 第一个任务
                        id: 1,
                        isOver: false,
                        mapSrc: "/public/img/maze1-1.png",  // 地图
                        status: "",
                        blocks: [ //需要的模块
                            'forward',
                            'change_direction',
                        ],
                        game: {
                            player: {
                                direction: 1,  // 初始方向  0,1,2,3
                                x: 4,// 初始位置
                                y: 5
                            },
                            goal: {
                                x: 6,
                                y: 5
                            },
                            path: [// 路径
                                // [x, y]
                                [4, 5],
                                [5, 5],
                                [6, 5],
                            ]
                        },
                        max_blocks: 10,
                    },
                    {
                        id: 2,
                        isOver: false,
                        status: "",
                        mapSrc: "/public/img/maze1-2.png",
                        max_blocks: 10,
                        blocks: [
                            'forward',
                            'change_direction',
                            "while_do",
                            "if_else"
                        ],
                        game: {
                            player: {
                                direction: 1,
                                x: 3,
                                y: 4
                            },
                            goal: {
                                x: 6,
                                y: 6
                            },
                            path: [
                                // [x, y]
                                [3, 4],
                                [4, 4],
                                [5, 4],
                                [6, 4],
                                [6, 5],
                                [6, 6],
                            ]
                        }
                    },
                    {
                        id: 3,
                        isOver: false,
                        status: "",
                        mapSrc: "/public/img/maze1-3.png",
                        max_blocks: 10,
                        blocks: [
                            'forward',
                            'change_direction',
                            "while_do",
                            "if_else"
                        ],
                        game: {
                            player: {
                                direction: 1,
                                x: 3,
                                y: 6
                            },
                            goal: {
                                x: 8,
                                y: 4
                            },
                            path: [
                                // [x, y]
                                [3, 6],
                                [4, 6],
                                [5, 6],
                                [5, 5],
                                [5, 4],
                                [6, 4],
                                [7, 4],
                                [8, 4]
                            ]
                        }
                    },
                ]
            },
            {//第一个课程
                title: "课程C",//第一个课程的名字
                detail: "课程C的描述",//描述
                progress: "0%",//进度
                videoPage: {// 视频列表
                    courseImg: 'https://gitcode.net/T_J_J_/picture/-/raw/master/03.jpg',// 关于视频的图片
                    videoList: [
                        {
                            videoTitle: '课程A的视频1',//视频的title
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频2',
                            CurrentVideoTime: 0,
                            videoSrc: '1111hsttps://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频3',
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频4',
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                    ]
                },
                blockList: [// 当前任务的编程任务列表
                    {  // 第一个任务
                        id: 1,
                        isOver: false,
                        mapSrc: "/public/img/maze1-1.png",  // 地图
                        status: "",
                        blocks: [ //需要的模块
                            'forward',
                            'change_direction',
                        ],
                        game: {
                            player: {
                                direction: 1,  // 初始方向  0,1,2,3
                                x: 4,// 初始位置
                                y: 5
                            },
                            goal: {
                                x: 6,
                                y: 5
                            },
                            path: [// 路径
                                // [x, y]
                                [4, 5],
                                [5, 5],
                                [6, 5],
                            ]
                        },
                        max_blocks: 10,
                    },
                    {
                        id: 2,
                        isOver: false,
                        status: "",
                        mapSrc: "/public/img/maze1-2.png",
                        max_blocks: 10,
                        blocks: [
                            'forward',
                            'change_direction',
                            "while_do",
                            "if_else"
                        ],
                        game: {
                            player: {
                                direction: 1,
                                x: 3,
                                y: 4
                            },
                            goal: {
                                x: 6,
                                y: 6
                            },
                            path: [
                                // [x, y]
                                [3, 4],
                                [4, 4],
                                [5, 4],
                                [6, 4],
                                [6, 5],
                                [6, 6],
                            ]
                        }
                    },
                    {
                        id: 3,
                        isOver: false,
                        status: "",
                        mapSrc: "/public/img/maze1-3.png",
                        max_blocks: 10,
                        blocks: [
                            'forward',
                            'change_direction',
                            "while_do",
                            "if_else"
                        ],
                        game: {
                            player: {
                                direction: 1,
                                x: 3,
                                y: 6
                            },
                            goal: {
                                x: 8,
                                y: 4
                            },
                            path: [
                                // [x, y]
                                [3, 6],
                                [4, 6],
                                [5, 6],
                                [5, 5],
                                [5, 4],
                                [6, 4],
                                [7, 4],
                                [8, 4]
                            ]
                        }
                    },
                ]
            },
            {//第一个课程
                title: "课程D",//第一个课程的名字
                detail: "课程A的描述",//描述
                progress: "100%",//进度
                videoPage: {// 视频列表
                    courseImg: 'https://gitcode.net/T_J_J_/picture/-/raw/master/03.jpg',// 关于视频的图片
                    videoList: [
                        {
                            videoTitle: '课程A的视频1',//视频的title
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频2',
                            CurrentVideoTime: 0,
                            videoSrc: '1111hsttps://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频3',
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频4',
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                    ]
                },
                blockList: [// 当前任务的编程任务列表
                    {  // 第一个任务
                        id: 1,
                        isOver: false,
                        mapSrc: "/public/img/maze1-1.png",  // 地图
                        status: "",
                        blocks: [ //需要的模块
                            'forward',
                            'change_direction',
                        ],
                        game: {
                            player: {
                                direction: 1,  // 初始方向  0,1,2,3
                                x: 4,// 初始位置
                                y: 5
                            },
                            goal: {
                                x: 6,
                                y: 5
                            },
                            path: [// 路径
                                // [x, y]
                                [4, 5],
                                [5, 5],
                                [6, 5],
                            ]
                        },
                        max_blocks: 10,
                    },
                    {
                        id: 2,
                        isOver: false,
                        status: "",
                        mapSrc: "/public/img/maze1-2.png",
                        max_blocks: 10,
                        blocks: [
                            'forward',
                            'change_direction',
                            "while_do",
                            "if_else"
                        ],
                        game: {
                            player: {
                                direction: 1,
                                x: 3,
                                y: 4
                            },
                            goal: {
                                x: 6,
                                y: 6
                            },
                            path: [
                                // [x, y]
                                [3, 4],
                                [4, 4],
                                [5, 4],
                                [6, 4],
                                [6, 5],
                                [6, 6],
                            ]
                        }
                    },
                    {
                        id: 3,
                        isOver: false,
                        status: "",
                        mapSrc: "/public/img/maze1-3.png",
                        max_blocks: 10,
                        blocks: [
                            'forward',
                            'change_direction',
                            "while_do",
                            "if_else"
                        ],
                        game: {
                            player: {
                                direction: 1,
                                x: 3,
                                y: 6
                            },
                            goal: {
                                x: 8,
                                y: 4
                            },
                            path: [
                                // [x, y]
                                [3, 6],
                                [4, 6],
                                [5, 6],
                                [5, 5],
                                [5, 4],
                                [6, 4],
                                [7, 4],
                                [8, 4]
                            ]
                        }
                    },
                ]
            },
            {//第一个课程
                title: "课程E",//第一个课程的名字
                detail: "课程A的描述",//描述
                progress: "100%",//进度
                videoPage: {// 视频列表
                    courseImg: 'https://gitcode.net/T_J_J_/picture/-/raw/master/03.jpg',// 关于视频的图片
                    videoList: [
                        {
                            videoTitle: '课程A的视频1',//视频的title
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频2',
                            CurrentVideoTime: 0,
                            videoSrc: '1111hsttps://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频3',
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频4',
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                    ]
                },
                blockList: [// 当前任务的编程任务列表
                    {  // 第一个任务
                        id: 1,
                        isOver: false,
                        mapSrc: "/public/img/maze1-1.png",  // 地图
                        status: "",
                        blocks: [ //需要的模块
                            'forward',
                            'change_direction',
                        ],
                        game: {
                            player: {
                                direction: 1,  // 初始方向  0,1,2,3
                                x: 4,// 初始位置
                                y: 5
                            },
                            goal: {
                                x: 6,
                                y: 5
                            },
                            path: [// 路径
                                // [x, y]
                                [4, 5],
                                [5, 5],
                                [6, 5],
                            ]
                        },
                        max_blocks: 10,
                    },
                    {
                        id: 2,
                        isOver: false,
                        status: "",
                        mapSrc: "/public/img/maze1-2.png",
                        max_blocks: 10,
                        blocks: [
                            'forward',
                            'change_direction',
                            "while_do",
                            "if_else"
                        ],
                        game: {
                            player: {
                                direction: 1,
                                x: 3,
                                y: 4
                            },
                            goal: {
                                x: 6,
                                y: 6
                            },
                            path: [
                                // [x, y]
                                [3, 4],
                                [4, 4],
                                [5, 4],
                                [6, 4],
                                [6, 5],
                                [6, 6],
                            ]
                        }
                    },
                    {
                        id: 3,
                        isOver: false,
                        status: "",
                        mapSrc: "/public/img/maze1-3.png",
                        max_blocks: 10,
                        blocks: [
                            'forward',
                            'change_direction',
                            "while_do",
                            "if_else"
                        ],
                        game: {
                            player: {
                                direction: 1,
                                x: 3,
                                y: 6
                            },
                            goal: {
                                x: 8,
                                y: 4
                            },
                            path: [
                                // [x, y]
                                [3, 6],
                                [4, 6],
                                [5, 6],
                                [5, 5],
                                [5, 4],
                                [6, 4],
                                [7, 4],
                                [8, 4]
                            ]
                        }
                    },
                ]
            },
            {//第一个课程
                title: "课程F",//第一个课程的名字
                detail: "课程A的描述",//描述
                progress: "100%",//进度
                videoPage: {// 视频列表
                    courseImg: 'https://gitcode.net/T_J_J_/picture/-/raw/master/03.jpg',// 关于视频的图片
                    videoList: [
                        {
                            videoTitle: '课程A的视频1',//视频的title
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频2',
                            CurrentVideoTime: 0,
                            videoSrc: '1111hsttps://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频3',
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频4',
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                    ]
                },
                blockList: [// 当前任务的编程任务列表
                    {  // 第一个任务
                        id: 1,
                        isOver: false,
                        mapSrc: "/public/img/maze1-1.png",  // 地图
                        status: "",
                        blocks: [ //需要的模块
                            'forward',
                            'change_direction',
                        ],
                        game: {
                            player: {
                                direction: 1,  // 初始方向  0,1,2,3
                                x: 4,// 初始位置
                                y: 5
                            },
                            goal: {
                                x: 6,
                                y: 5
                            },
                            path: [// 路径
                                // [x, y]
                                [4, 5],
                                [5, 5],
                                [6, 5],
                            ]
                        },
                        max_blocks: 10,
                    },
                    {
                        id: 2,
                        isOver: false,
                        status: "",
                        mapSrc: "/public/img/maze1-2.png",
                        max_blocks: 10,
                        blocks: [
                            'forward',
                            'change_direction',
                            "while_do",
                            "if_else"
                        ],
                        game: {
                            player: {
                                direction: 1,
                                x: 3,
                                y: 4
                            },
                            goal: {
                                x: 6,
                                y: 6
                            },
                            path: [
                                // [x, y]
                                [3, 4],
                                [4, 4],
                                [5, 4],
                                [6, 4],
                                [6, 5],
                                [6, 6],
                            ]
                        }
                    },
                    {
                        id: 3,
                        isOver: false,
                        status: "",
                        mapSrc: "/public/img/maze1-3.png",
                        max_blocks: 10,
                        blocks: [
                            'forward',
                            'change_direction',
                            "while_do",
                            "if_else"
                        ],
                        game: {
                            player: {
                                direction: 1,
                                x: 3,
                                y: 6
                            },
                            goal: {
                                x: 8,
                                y: 4
                            },
                            path: [
                                // [x, y]
                                [3, 6],
                                [4, 6],
                                [5, 6],
                                [5, 5],
                                [5, 4],
                                [6, 4],
                                [7, 4],
                                [8, 4]
                            ]
                        }
                    },
                ]
            },
            {//第一个课程
                title: "课程G",//第一个课程的名字
                detail: "课程A的描述",//描述
                progress: "100%",//进度
                videoPage: {// 视频列表
                    courseImg: 'https://gitcode.net/T_J_J_/picture/-/raw/master/03.jpg',// 关于视频的图片
                    videoList: [
                        {
                            videoTitle: '课程A的视频1',//视频的title
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频2',
                            CurrentVideoTime: 0,
                            videoSrc: '1111hsttps://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频3',
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频4',
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                    ]
                },
                blockList: [// 当前任务的编程任务列表
                    {  // 第一个任务
                        id: 1,
                        isOver: false,
                        mapSrc: "/public/img/maze1-1.png",  // 地图
                        status: "",
                        blocks: [ //需要的模块
                            'forward',
                            'change_direction',
                        ],
                        game: {
                            player: {
                                direction: 1,  // 初始方向  0,1,2,3
                                x: 4,// 初始位置
                                y: 5
                            },
                            goal: {
                                x: 6,
                                y: 5
                            },
                            path: [// 路径
                                // [x, y]
                                [4, 5],
                                [5, 5],
                                [6, 5],
                            ]
                        },
                        max_blocks: 10,
                    },
                    {
                        id: 2,
                        isOver: false,
                        status: "",
                        mapSrc: "/public/img/maze1-2.png",
                        max_blocks: 10,
                        blocks: [
                            'forward',
                            'change_direction',
                            "while_do",
                            "if_else"
                        ],
                        game: {
                            player: {
                                direction: 1,
                                x: 3,
                                y: 4
                            },
                            goal: {
                                x: 6,
                                y: 6
                            },
                            path: [
                                // [x, y]
                                [3, 4],
                                [4, 4],
                                [5, 4],
                                [6, 4],
                                [6, 5],
                                [6, 6],
                            ]
                        }
                    },
                    {
                        id: 3,
                        isOver: false,
                        status: "",
                        mapSrc: "/public/img/maze1-3.png",
                        max_blocks: 10,
                        blocks: [
                            'forward',
                            'change_direction',
                            "while_do",
                            "if_else"
                        ],
                        game: {
                            player: {
                                direction: 1,
                                x: 3,
                                y: 6
                            },
                            goal: {
                                x: 8,
                                y: 4
                            },
                            path: [
                                // [x, y]
                                [3, 6],
                                [4, 6],
                                [5, 6],
                                [5, 5],
                                [5, 4],
                                [6, 4],
                                [7, 4],
                                [8, 4]
                            ]
                        }
                    },
                ]
            },
            {//第一个课程
                title: "课程H",//第一个课程的名字
                detail: "课程A的描述",//描述
                progress: "100%",//进度
                videoPage: {// 视频列表
                    courseImg: 'https://gitcode.net/T_J_J_/picture/-/raw/master/03.jpg',// 关于视频的图片
                    videoList: [
                        {
                            videoTitle: '课程A的视频1',//视频的title
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频2',
                            CurrentVideoTime: 0,
                            videoSrc: '1111hsttps://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频3',
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频4',
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                    ]
                },
                blockList: [// 当前任务的编程任务列表
                    {  // 第一个任务
                        id: 1,
                        isOver: false,
                        mapSrc: "/public/img/maze1-1.png",  // 地图
                        status: "",
                        blocks: [ //需要的模块
                            'forward',
                            'change_direction',
                        ],
                        game: {
                            player: {
                                direction: 1,  // 初始方向  0,1,2,3
                                x: 4,// 初始位置
                                y: 5
                            },
                            goal: {
                                x: 6,
                                y: 5
                            },
                            path: [// 路径
                                // [x, y]
                                [4, 5],
                                [5, 5],
                                [6, 5],
                            ]
                        },
                        max_blocks: 10,
                    },
                    {
                        id: 2,
                        isOver: false,
                        status: "",
                        mapSrc: "/public/img/maze1-2.png",
                        max_blocks: 10,
                        blocks: [
                            'forward',
                            'change_direction',
                            "while_do",
                            "if_else"
                        ],
                        game: {
                            player: {
                                direction: 1,
                                x: 3,
                                y: 4
                            },
                            goal: {
                                x: 6,
                                y: 6
                            },
                            path: [
                                // [x, y]
                                [3, 4],
                                [4, 4],
                                [5, 4],
                                [6, 4],
                                [6, 5],
                                [6, 6],
                            ]
                        }
                    },
                    {
                        id: 3,
                        isOver: false,
                        status: "",
                        mapSrc: "/public/img/maze1-3.png",
                        max_blocks: 10,
                        blocks: [
                            'forward',
                            'change_direction',
                            "while_do",
                            "if_else"
                        ],
                        game: {
                            player: {
                                direction: 1,
                                x: 3,
                                y: 6
                            },
                            goal: {
                                x: 8,
                                y: 4
                            },
                            path: [
                                // [x, y]
                                [3, 6],
                                [4, 6],
                                [5, 6],
                                [5, 5],
                                [5, 4],
                                [6, 4],
                                [7, 4],
                                [8, 4]
                            ]
                        }
                    },
                ]
            },
            {//第一个课程
                title: "课程I",//第一个课程的名字
                detail: "课程A的描述",//描述
                progress: "100%",//进度
                videoPage: {// 视频列表
                    courseImg: 'https://gitcode.net/T_J_J_/picture/-/raw/master/03.jpg',// 关于视频的图片
                    videoList: [
                        {
                            videoTitle: '课程A的视频1',//视频的title
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频2',
                            CurrentVideoTime: 0,
                            videoSrc: '1111hsttps://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频3',
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                        {
                            videoTitle: '课程A的视频4',
                            CurrentVideoTime: 0,
                            videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
                        },
                    ]
                },
                blockList: [// 当前任务的编程任务列表
                    {  // 第一个任务
                        id: 1,
                        isOver: false,
                        mapSrc: "/public/img/maze1-1.png",  // 地图
                        status: "",
                        blocks: [ //需要的模块
                            'forward',
                            'change_direction',
                        ],
                        game: {
                            player: {
                                direction: 1,  // 初始方向  0,1,2,3
                                x: 4,// 初始位置
                                y: 5
                            },
                            goal: {
                                x: 6,
                                y: 5
                            },
                            path: [// 路径
                                // [x, y]
                                [4, 5],
                                [5, 5],
                                [6, 5],
                            ]
                        },
                        max_blocks: 10,
                    },
                    {
                        id: 2,
                        isOver: false,
                        status: "",
                        mapSrc: "/public/img/maze1-2.png",
                        max_blocks: 10,
                        blocks: [
                            'forward',
                            'change_direction',
                            "while_do",
                            "if_else"
                        ],
                        game: {
                            player: {
                                direction: 1,
                                x: 3,
                                y: 4
                            },
                            goal: {
                                x: 6,
                                y: 6
                            },
                            path: [
                                // [x, y]
                                [3, 4],
                                [4, 4],
                                [5, 4],
                                [6, 4],
                                [6, 5],
                                [6, 6],
                            ]
                        }
                    },
                    {
                        id: 3,
                        isOver: false,
                        status: "",
                        mapSrc: "/public/img/maze1-3.png",
                        max_blocks: 10,
                        blocks: [
                            'forward',
                            'change_direction',
                            "while_do",
                            "if_else"
                        ],
                        game: {
                            player: {
                                direction: 1,
                                x: 3,
                                y: 6
                            },
                            goal: {
                                x: 8,
                                y: 4
                            },
                            path: [
                                // [x, y]
                                [3, 6],
                                [4, 6],
                                [5, 6],
                                [5, 5],
                                [5, 4],
                                [6, 4],
                                [7, 4],
                                [8, 4]
                            ]
                        }
                    },
                ]
            },
        ]
    })
    return { userData }
})