<script setup lang="ts">
import { defineEmits } from 'vue';
import { ref } from 'vue';
import { nextTick } from 'vue'
import axios from 'axios';
import mitter from '@/utils/emitter';
import { useMessageStore } from '@/stores/message';
import API from '@/api/request.js';
let useMessage = useMessageStore()
let messages = useMessage.messages
let { addComment } = API()
const closebox = defineEmits(['close']);
const message = ref('');
const messageContainer = ref();
let codMsg = '';
let mapMsg = '';
let startpoint = '';
let endpoint = '';
mitter.on('sendCode', (res: any) => {
  console.log('sendCode', res)
  codMsg = res;
})
mitter.on('sendMap', (res: any) => {
  console.log('sendMap', res)

  mapMsg = res;
})
mitter.on('sendEnd', (res: any) => {
  console.log('sendEnd', res)

  endpoint = res;
})
mitter.on('sendStart', (res: any) => {
  console.log('sendStart', res)

  startpoint = res;
})
function sendMessage() {
  if (message.value.trim() !== '') {
    messages.push({ sender: 'me', content: message.value, userName: "我" });
    console.log(messages)
    // 上传评论
    var data = {
      name: "user",
      block: "'向前走':'forward()','向左转':'turn left()','向右转':'turn right()','循环':'while_do(){}','没到达终点':'not_end()','如果,否则':'if_else'",
      map: `[[x,y],${mapMsg}]`,
      code: codMsg,
      startpoint: startpoint,
      endpoint: endpoint,
      query: message.value,
    }
    var config = {
      method: 'post',
      url: 'http://121.37.47.29:8080/user/chat',
      headers: {
        'token': localStorage.getItem('token')
      },
      data: data
    };
    axios(config)
      .then(function (res) {
        // console.log(JSON.stringify(res.data));
        console.log(mapMsg, codMsg, startpoint, endpoint, message.value);
        console.log(res)
        let response = JSON.parse(res.data.data)
        messages.push({ sender: 'other', content: response.content, userName: "木木老师" });
      })
      .catch(function (error) {
        console.log(error);
        console.log(mapMsg, codMsg, startpoint, endpoint, message.value);
      });

    message.value = '';
    // 滚动到最新消息
    nextTick(() => {
      messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
    });
  }
}
</script>

<template>
  <div class="message-box">
    <div class="message-container" ref="messageContainer">
      <div v-for="msg in messages" class="message-item">
        <div :class="msg.sender == 'me' ? 'send-me' : 'send-other'">
          <div class="content">{{ msg.content }}</div>
          <img src="@/assets/img/me.jpg" class="avatar">
        </div>
      </div>
    </div>

    <div class="input-wrapper">
      <input type="text" v-model="message" class="input-field" placeholder="请输入消息">
      <button @click.native="closebox('close')" class="return-button">返回课程页面</button>
      <button @click="sendMessage" class="send-button">发送</button>
    </div>

  </div>
</template>

<style scoped lang="less">
.message-box {
  background-color: white;
  border-radius: 30px;
  text-align: center;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* 添加定位属性 */
  overflow: hidden;
  box-sizing: border-box;
}

.message-container {
  height: 87%;
  background-color: #eefae7;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: auto;
  box-sizing: border-box;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}


.message-item {
  margin-top: 2%;
  position: relative;
  width: 100%;
  box-sizing: border-box;

  .content {
    background-color: rgb(212, 212, 212);
    max-width: 280px;
    word-wrap: break-word;
    /* 处理英文单词换行 */
    word-break: break-all;
    /* 处理中文换行 */
    display: inline-block;
    /*将div元素转换为行内块元素*/
    padding: 6px 12px;
    border-radius: 4px;
  }

  .send-me {
    width: 100%;
    height: 100%;
    display: flex;
    right: 0px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  .send-other {
    width: 50%;
    height: 100%;
    display: flex;
    left: 0px;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
  }

}

.input-wrapper {
  margin-top: auto;
  display: flex;
  align-items: center;
  height: 15vh;

  .input-field {
    width: 200px;
    height: 30px;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    margin-right: 10px;
    display: flex;
    margin-top: 4vh;
  }

  .send-button {
    padding: 5px 10px;
    background-color: #e2e2e1;
    color: rgb(0, 0, 0);
    border: none;
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    margin-top: 4vh;
  }

  .return-button {
    padding: 5px 10px;
    background-color: #e2e2e1;
    color: rgb(0, 0, 0);
    border: none;
    border-radius: 15px;
    cursor: pointer;
    margin-right: 5px;
    margin-top: 4vh;
  }
}
</style>