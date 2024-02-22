import axios from 'axios'
import { useMessageStore } from '@/stores/message'
import { useContentstore } from "@/stores/homeTask"
import { useCurrentStackStore } from '@/stores/currentTask'
let courseList = useCurrentStackStore().courseList
let task = useCurrentStackStore().task
let Content = useContentstore().content
let messages = useMessageStore().messages
// Api文档链接  https://app.apifox.com/link/project/4023739/apis/api-147912465

//上传评论
export default function () {
    async function addComment(token, task, newmessage) {
        let config = {
            method: 'post',
            url: 'http://127.0.0.1:4523/m1/4023739-0-default/api/messages/get',
            data: {
                token,
                newmessage,
                task
            },
            headers: {
                'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
            }
        };
        await axios(config)
            .then(function (response) {
                console.log(response.data)
                let data = response.data.content
                messages.push(...data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    //初始化
    async function getComment(token, task) {
        let config = {
            method: 'get',
            url: 'http://127.0.0.1:4523/m1/4023739-0-default/api/messages/get/',
            params: {
                token,
                task
            }
        };
        let comments;
        await axios(config)
            .then(function (response) {
                let content = response.data.content
                messages.length = 0;
                messages.push(...content)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // 初始化首页视频卡片
    async function GetHomeTask(token) {
        await axios({
            method: 'get',
            url: 'http://127.0.0.1:4523/m1/4023739-0-default/allVideo',
            params: {
                token
            }
        }).then(res => {
            Content.length = 0;
            let content = res.data.content;
            console.log("初始化首页视频卡片", content)
            Content.push(...content)
        }).catch(error => {
            Content.length = 0;
            let content = [
                {
                    title: "课程A",
                    detail: "elit sunt sed",
                    progress: "10%"
                },
                {
                    title: "课程A",
                    detail: "aliquip in sit nulla",
                    progress: "60%"
                },
                {
                    title: "课程A",
                    detail: "ipsum sed aliquip anim cillum",
                    progress: "60%"
                },
                {
                    title: "课程A",
                    detail: "do deserunt Duis incididunt qui",
                    progress: "40%"
                },
                {
                    title: "课程A",
                    detail: "qui cupidatat",
                    progress: "50%"
                },
                {
                    title: "课程A",
                    detail: "Excepteur labore sed veniam",
                    progress: "10%"
                },
                {
                    title: "课程A",
                    detail: "culpa",
                    progress: "50%"
                },
                {
                    title: "课程A",
                    detail: "elit enim",
                    progress: "0%"
                },
                {
                    title: "课程A",
                    detail: "in dolor cupidatat eiusmod",
                    progress: "40%"
                },
                {
                    title: "课程A",
                    detail: "fugiat id tempor eiusmod",
                    progress: "0%"
                },
                {
                    title: "课程A",
                    detail: "id",
                    progress: "70%"
                },
                {
                    "title": "安出知",
                    detail: "sunt eu",
                    progress: "20%"
                },
                {
                    "title": "么工回精律认",
                    detail: "Excepteur ut adipisicing dolore sint",
                    progress: "90%"
                },
                {
                    "title": "点地铁家前例",
                    detail: "exercitation",
                    progress: "30%"
                },
                {
                    title: "课程A",
                    detail: "magna adipisicing",
                    progress: "30%"
                },
                {
                    title: "课程A",
                    detail: "mollit eu consectetur",
                    progress: "0%"
                },
                {
                    title: "课程A",
                    detail: "ut Duis exercitation esse dolore",
                    progress: "40%"
                },
                {
                    title: "课程A",
                    detail: "Excepteur",
                    progress: "70%"
                },
                {
                    title: "课程A",
                    detail: "labore esse",
                    progress: "70%"
                },
                {
                    title: "课程A",
                    detail: "cupidatat sunt veniam culpa eu",
                    progress: "40%"
                },
                {
                    title: "课程A",
                    detail: "deserunt",
                    progress: "70%"
                },
                {
                    title: "课程A",
                    detail: "dolore ex laborum id sed",
                    progress: "70%"
                },
                {
                    title: "课程A",
                    detail: "cupidatat commodo officia dolore ut",
                    progress: "10%"
                },
                {
                    title: "课程A",
                    detail: "do minim esse",
                    progress: "10%"
                },
                {
                    title: "课程A",
                    detail: "laborum occaecat",
                    progress: "10%"
                },
                {
                    title: "课程A",
                    detail: "minim",
                    progress: "40%"
                },
                {
                    title: "课程A",
                    detail: "Excepteur minim in",
                    progress: "50%"
                },
                {
                    title: "课程A",
                    detail: "labore do officia",
                    progress: "50%"
                },
                {
                    title: "课程A",
                    detail: "eu sint dolore veniam occaecat",
                    progress: "30%"
                },
                {
                    title: "课程A",
                    detail: "magna ut ea",
                    progress: "40%"
                },
                {
                    title: "课程A",
                    detail: "ipsum cupidatat",
                    progress: "10%"
                },
                {
                    title: "课程A",
                    detail: "pariatur in",
                    progress: "80%"
                },
                {
                    title: "课程A",
                    detail: "nulla commodo",
                    progress: "30%"
                },
                {
                    title: "课程A",
                    detail: "dolore et dolor culpa",
                    progress: "40%"
                },
                {
                    title: "课程A",
                    detail: "fugiat amet",
                    progress: "40%"
                },
                {
                    title: "课程A",
                    detail: "enim",
                    progress: "90%"
                }
            ]
            console.log("初始化首页视频卡片", content)
            Content.push(...content)
        })
    }
    // 初始化某个课程
    async function GetNowTask(token, task) {
        await axios({
            method: 'get',
            url: 'http://127.0.0.1:4523/m1/4023739-0-default/task',
            params: {
                token, task
            }
        }).then(res => {
            courseList.name = res.data.name
            courseList.imgSrc = res.data.imgSrc
            courseList.courseDetail = res.data.courseDetail
            courseList.coursePage = res.data.coursePage
            courseList.console.log(`初始化第${task}个课程`, res.data)
        }).catch(error => {
            courseList.name = "课程A"
            courseList.imgSrc = "https://gitcode.net/T_J_J_/picture/-/raw/master/03.jpg"
            courseList.courseDetail = 'adsfasdfasdfasdfasdf'
            courseList.coursePage = [
                {
                    name: "A",
                    videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
                },
                {
                    name: "B",
                    videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
                },
                {
                    name: "C",
                    videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
                }
                , {
                    name: "D",
                    videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
                }, {
                    name: "E",
                    videoSrc: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4'
                }
            ]
            courseList.console.log(`初始化第${task}个课程`, res.data)
        })
    }

    return { addComment, getComment, GetHomeTask, GetNowTask }
}
