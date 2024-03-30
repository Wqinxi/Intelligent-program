import axios from 'axios'

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

    return { addComment }
}
