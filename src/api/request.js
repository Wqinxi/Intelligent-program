import axios from 'axios'
import { useMessageStore } from '@/stores/message'
let messages = useMessageStore().messages
// Api文档链接  https://app.apifox.com/link/project/4023739/apis/api-147912465

//上传评论
export default function () {
    async function addComment() {
        let id = 123;
        let config = {
            method: 'post',
            url: 'http://127.0.0.1:4523/m1/4023739-0-default/api/messages/get',
            data: {
                id,
                messages
            },
            headers: {
                'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
            }
        };
        await axios(config)
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    //初始化
    async function getComment() {
        let config = {
            method: 'get',
            url: 'http://127.0.0.1:4523/m1/4023739-0-default/api/messages/get/',
            params: {
            }
        };
        let comments;
        await axios(config)
            .then(function (response) {
                let data = response.data.data
                messages.length = 0;
                messages.push(...data.comments)
                console.log(messages, '////////////////')
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return { addComment, getComment }
}
