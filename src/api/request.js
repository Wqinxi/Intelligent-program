import axios from 'axios'
import { useMessageStore } from '@/stores/message'
import { useContentstore } from "@/stores/homeTask"
import { useCurrentStackStore } from '@/stores/currentTask'
let courseList = useCurrentStackStore().courseList
let Content = useContentstore().content
let messages = useMessageStore().messages
// Api文档链接  https://app.apifox.com/link/project/4023739/apis/api-147912465

//上传评论
export default function () {
    async function addComment(token, newmessage) {
        let config = {
            method: 'post',
            url: 'http://127.0.0.1:4523/m1/4023739-0-default/api/messages/get',
            data: {
                token,
                newmessages
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
    async function getComment(token) {
        let config = {
            method: 'get',
            url: 'http://127.0.0.1:4523/m1/4023739-0-default/api/messages/get/',
            params: {
                token
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
            courseList.imgSrc = res.data
            courseList.courseDetail = res.data.courseDetail
            courseList.coursePage = res.data.coursePage
            courseList.console.log(`初始化第${task}个课程`, res.data)
        })
    }

    return { addComment, getComment, GetHomeTask, GetNowTask }
}
