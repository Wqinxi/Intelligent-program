<script setup lang="ts">
import { defineEmits } from 'vue';
import { ref } from 'vue';
import { nextTick } from 'vue'
import apiComment from '@/api/request.js';
import { useMessageStore } from '@/stores/message';
let messages = useMessageStore().messages
let { addComment, getComment } = apiComment()
// 初始化
// getComment() 应该不用了

const closebox = defineEmits(['close']);

const message = ref('');
const messageContainer = ref(null);
function sendMessage() {
  if (message.value.trim() !== '') {
    messages.push({ sender: 'me', content: message.value, userName: "我" });

    console.log(messages)
    // 上传评论
    // addComment()//暂时没有服务器,没测试

    message.value = '';
    // 滚动到最新消息
    nextTick(() => {
      messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
    });
  }
}
function sendMessageByEnter() {
  if (message.value.trim() !== '') {
    messages.push({ sender: 'me', content: message.value, userName: "我" });
    console.log(messages)
    // 上传评论
    // addComment()//暂时没有服务器,没测试


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
        <div class="message-wrap">
          <div :class="msg.sender == 'me' ? 'send-me' : 'send-other'">
            {{ msg.content }}
            <img src="@/assets/img/me.jpg" class="avatar">
          </div>
        </div>
      </div>
    </div>

    <div class="input-wrapper">
      <input type="text" v-model="message" class="input-field" placeholder="请输入消息" @keyup.enter="sendMessageByEnter">
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
}

.message-container {
  height: 87%;
  background-color: #dfefff;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: auto;
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
  height: 10%;

  .send-me {
    width: 50%;
    height: 100%;
    display: flex;
    position: absolute;
    right: 0px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin: 0px 20px;
  }

  .send-other {
    width: 50%;
    height: 100%;
    display: flex;
    position: absolute;
    left: 0px;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    margin: 0px 20px;
  }
}





.input-wrapper {
  margin-top: 43%;
  display: flex;
  align-items: center;
}

.input-field {
  width: 200px;
  height: 30px;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 5px;
  margin-right: 10px;
}

.send-button {
  padding: 5px 10px;
  background-color: #a2c2e4;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.return-button {
  padding: 5px 10px;
  background-color: #ffde90;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
}
</style>