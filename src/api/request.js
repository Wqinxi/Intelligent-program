import axios from 'axios'

// Api文档链接  https://app.apifox.com/link/project/4023739/apis/api-147912465

//上传评论
export default function () {
    const REQUEST_URL = 'http://121.37.47.29:8080'
    async function addComment(token, task, newmessage) {
        let config = {
            method: 'post',
            url: REQUEST_URL + '/get',
            data: {
                token,
                newmessage,
                task
            },
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
    return { addComment, REQUEST_URL }
}
