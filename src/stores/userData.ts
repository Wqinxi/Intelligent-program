import { defineStore } from "pinia";
import { onMounted, reactive } from "vue";
let player_direction_up = 0;
let player_direction_right = 1;
let player_direction_down = 2;
let player_direction_left = 3;
let player_direction_max = 4;
export const useUserDataStore = defineStore('useUserDataStore', () => {
    let userData = reactive({
        userName: 'userName',//用户名
        username: '',
        password: '',
        userHeadImgs: "https://gitcode.net/T_J_J_/picture/-/raw/master/03.jpg",//头像
        token: '12331213123132',
        Data: [//每个课程的列表
            {//第一个课程
                title: "初始编程",//第一个课程的名字
                detail: "初始编程",//描述
                progress: "0%",//进度
                videoPage: {// 视频列表
                    courseImg: 'https://gitcode.net/T_J_J_/picture/-/raw/master/03.jpg',// 关于视频的图片
                    videoList: [
                        {
                            videoTitle: '初始编程',//视频的title
                            CurrentVideoTime: 0,
                            videoSrc: '../video/1.mp4',
                        }
                    ]
                },
                blockList: [
                    {
                        id: 1,
                        isOver: false,
                        mapSrc: "../img/maze1-1.png",
                        blocks: [
                            'forward',
                        ],
                        game: {
                            player: {
                                direction: player_direction_right,
                                x: 4,
                                y: 5
                            },
                            goal: {
                                x: 6,
                                y: 5
                            },
                            path: [
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
                        mapSrc: "../img/maze1-2.png",
                        max_blocks: 10,
                        blocks: [
                            'forward',
                            'change_direction',
                        ],
                        game: {
                            player: {
                                direction: player_direction_right,
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
                        mapSrc: "../img/maze1-3.png",
                        max_blocks: 10,
                        blocks: [
                            'forward',
                            'change_direction',
                        ],
                        game: {
                            player: {
                                direction: player_direction_right,
                                x: 3,
                                y: 6
                            },
                            goal: {
                                x: 7,
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
                            ]
                        }
                    },
                ]
            },
            {//第一个课程
                title: "基础块与顺序执行",//第一个课程的名字
                detail: "基础块与顺序执行",//描述
                progress: "0%",//进度
                videoPage: {// 视频列表
                    courseImg: 'https://gitcode.net/T_J_J_/picture/-/raw/master/03.jpg',// 关于视频的图片
                    videoList: [
                        {
                            videoTitle: '基础块与顺序执行',
                            CurrentVideoTime: 0,
                            videoSrc: '../video/2.mp4',
                        }
                    ]
                },
                blockList: [
                    {
                        id: 1,
                        isOver: false,
                        mapSrc: "../img/maze2-1.png",
                        blocks: [
                            'forward',
                            'change_direction',
                            'while_do',
                        ],
                        game: {
                            player: {
                                direction: player_direction_right,
                                x: 3,
                                y: 3
                            },
                            goal: {
                                x: 3,
                                y: 7
                            },
                            path: [
                                // [x, y]
                                [3, 3],
                                [4, 3],
                                [5, 3],
                                [6, 3],
                                [7, 3],
                                [7, 4],
                                [7, 5],
                                [7, 6],
                                [7, 7],
                                [6, 7],
                                [5, 7],
                                [4, 7],
                                [3, 7],
                            ]
                        },
                        max_blocks: 6,
                    },
                    {
                        id: 2,
                        isOver: false,
                        mapSrc: "../img/maze2-2.png",
                        max_blocks: 5,
                        blocks: [
                            'forward',
                            'change_direction',
                            'while_do',
                        ],
                        game: {
                            player: {
                                direction: player_direction_right,
                                x: 4,
                                y: 2
                            },
                            goal: {
                                x: 6,
                                y: 8
                            },
                            path: [
                                // [x, y]
                                [4, 2],
                                [5, 2],
                                [6, 2],
                                [6, 3],
                                [6, 4],
                                [6, 5],
                                [6, 6],
                                [6, 7],
                                [6, 8],
                            ]
                        }
                    },
                    {
                        id: 3,
                        isOver: false,
                        mapSrc: "../img/maze2-3.png",
                        max_blocks: 10,
                        blocks: [
                            'forward',
                            'change_direction',
                            'while_do',
                        ],
                        game: {
                            player: {
                                direction: player_direction_right,
                                x: 2,
                                y: 2
                            },
                            goal: {
                                x: 8,
                                y: 8
                            },
                            path: [
                                // [x, y]
                                [2, 2],
                                [3, 2],
                                [4, 2],
                                [4, 3],
                                [4, 4],
                                [5, 4],
                                [6, 4],
                                [6, 5],
                                [6, 6],
                                [2, 6],
                                [3, 6],
                                [4, 6],
                                [5, 6],
                                [7, 6],
                                [8, 6],
                                [2, 7],
                                [4, 7],
                                [8, 7],
                                [2, 8],
                                [4, 8],
                                [8, 8],
                            ]
                        }
                    },
                ]
            },
            {//第一个课程
                title: "循环块",//第一个课程的名字
                detail: "循环块",//描述
                progress: "0%",//进度
                videoPage: {// 视频列表
                    courseImg: 'https://gitcode.net/T_J_J_/picture/-/raw/master/03.jpg',// 关于视频的图片
                    videoList: [
                        {
                            videoTitle: '循环块',
                            CurrentVideoTime: 0,
                            videoSrc: '/video/3.mp4',
                        },
                    ]
                },
                blockList: [
                    {
                        id: 1,
                        isOver: false,
                        mapSrc: "../img/maze3-1.png",
                        blocks: [
                            'forward',
                            'change_direction',
                            'while_do',
                            'if_else',
                        ],
                        game: {
                            player: {
                                direction: player_direction_right,
                                x: 4,
                                y: 6
                            },
                            goal: {
                                x: 2,
                                y: 2
                            },
                            path: [
                                // [x, y]
                                [2, 2],
                                [3, 2],
                                [4, 2],
                                [5, 2],
                                [6, 2],
                                [7, 2],
                                [8, 2],
                                [8, 3],
                                [8, 4],
                                [2, 4],
                                [3, 4],
                                [4, 4],
                                [5, 4],
                                [6, 4],
                                [8, 5],
                                [2, 5],
                                [6, 5],
                                [8, 6],
                                [6, 6],
                                [5, 6],
                                [4, 6],
                                [2, 6],
                                [8, 7],
                                [2, 7],
                                [8, 8],
                                [7, 8],
                                [6, 8],
                                [5, 8],
                                [4, 8],
                                [3, 8],
                                [2, 8],
                            ]
                        },
                        max_blocks: 5,
                    },
                    {
                        id: 2,
                        isOver: false,
                        mapSrc: "../img/maze3-2.png",
                        max_blocks: 6,
                        blocks: [
                            'forward',
                            'change_direction',
                            'while_do',
                            'if_else',

                        ],
                        game: {
                            player: {
                                direction: player_direction_right,
                                x: 2,
                                y: 8
                            },
                            goal: {
                                x: 4,
                                y: 4
                            },
                            path: [
                                // [x, y]
                                [2, 2],
                                [3, 2],
                                [4, 2],
                                [5, 2],
                                [6, 2],
                                [7, 2],
                                [8, 2],
                                [2, 3],
                                [4, 3],
                                [6, 3],
                                [2, 4],
                                [3, 4],
                                [4, 4],
                                [6, 4],
                                [7, 4],
                                [8, 4],
                                [6, 5],
                                [6, 6],
                                [7, 6],
                                [8, 6],
                                [8, 6],
                                [6, 7],
                                [8, 7],
                                [8, 8],
                                [6, 8],
                                [5, 8],
                                [4, 8],
                                [3, 8],
                                [2, 8],
                            ]
                        }
                    },
                    {
                        id: 3,
                        isOver: false,
                        mapSrc: "../img/maze3-3.png",
                        max_blocks: 6,
                        blocks: [
                            'forward',
                            'change_direction',
                            'while_do',
                            'if_else',

                        ],
                        game: {
                            player: {
                                direction: player_direction_right,
                                x: 7,
                                y: 2
                            },
                            goal: {
                                x: 1,
                                y: 6
                            },
                            path: [
                                // [x, y]
                                [3, 2],
                                [5, 2],
                                [7, 2],
                                [8, 2],
                                [9, 2],
                                [3, 3],
                                [2, 3],
                                [4, 3],
                                [5, 3],
                                [6, 3],
                                [9, 3],
                                [3, 4],
                                [5, 4],
                                [7, 4],
                                [8, 4],
                                [9, 4],
                                [3, 5],
                                [5, 5],
                                [7, 5],
                                [9, 5],
                                [1, 6],
                                [2, 6],
                                [3, 6],
                                [4, 6],
                                [5, 6],
                                [6, 6],
                                [7, 6],
                                [8, 6],
                                [9, 6],
                                [3, 7],
                                [2, 8],
                                [3, 8],
                                [4, 8],
                                [5, 8],
                                [6, 8],
                            ]
                        }
                    },
                ]
            },
            {//第一个课程
                title: "选择块",//第一个课程的名字
                detail: "选择块",//描述
                progress: "0%",//进度
                videoPage: {// 视频列表
                    courseImg: 'https://gitcode.net/T_J_J_/picture/-/raw/master/03.jpg',// 关于视频的图片
                    videoList: [
                        {
                            videoTitle: '选择块',
                            CurrentVideoTime: 0,
                            videoSrc: '/video/4.mp4',
                        },
                    ]
                },
                blockList: [// 当前任务的编程任务列表
                    {  // 第一个任务
                        id: 1,
                        isOver: false,
                        mapSrc: "../img/maze1-1.png",  // 地图
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
                        mapSrc: "../img/maze1-2.png",
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
                        mapSrc: "../img/maze1-3.png",
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
                                x: 7,
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
                            ]

                        }
                    },
                ]
            },
        ]
    })
    return { userData }
})