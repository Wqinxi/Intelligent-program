<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import axios from 'axios';
import DiaboxVue from './Diabox.vue'
import apiComment from '@/api/request.js';
import { useMessageStore } from '@/stores/message';
let useMessage = useMessageStore()
let messages = useMessage.messages
const showbox = ref(false)
function openbox() {
  showbox.value = true;
}

const confirm = () => {
  showbox.value = false;
};

</script>

<template>
  <div class="container">
    <div class="message-container">
      <div :class="message.sender === 'me' ? 'chat-message-me' : 'chat-message-other'"
        :style="{ 'padding-bottom': messages.length - 1 === index ? '2rem' : 'none' }"
        v-for="(message, index) in messages" :key="index">

        <div
          :class="message.sender === 'me' ? 'message-me-asWhole-headPortrait' : 'message-other-asWhole-headPortrait'">
          <img src="@/assets/img/me.jpg" class="examineeFace_logo_style">
        </div>
        <div :class="message.sender === 'me' ? 'message-me-asWhole-right' : 'message-other-asWhole-right'">
          <div :class="message.sender === 'me' ? 'message-me-asWhole-top' : 'message-other-asWhole-top'">
            {{ message.userName }}
          </div>
          <div :class="message.sender === 'me' ? 'message-me' : 'message-other'">
            {{ message.content }}
          </div>
        </div>
      </div>
    </div>
    <div class="popup-container" v-if="showbox">
      <DiaboxVue @close="confirm" />
    </div>
    <el-button @click="openbox" class="open-dialog">查看历史聊天记录</el-button>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 30vh;

  .open-dialog{
    background-color:#efefef;
    color:rgb(0, 0, 0);
    border-radius:20px;
    margin-bottom: 0.8%;
    margin-right:1%;
    height:15%;
  }
}

.message-container {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background-color: #e3eadb;
}

.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.el-button {
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 10;
}

.chat-message-other {
  /*background-color: red;*/
  display: flex;
  padding-left: 1rem;

}

.chat-message-me {
  /*background-color: red;*/
  display: flex;
  padding-right: 1rem;

  flex-direction: row-reverse;
  /* 将子div的顺序反转 */

}

.message-me-asWhole-headPortrait {
  padding: 3px;
}

.message-other-asWhole-headPortrait {
  padding: 3px;
}

.message-me-asWhole-right {
  display: flex;
  flex-direction: column;
  /* 设置子元素垂直排列 */
  margin-left: 0.1rem;
}

.message-other-asWhole-right {
  display: flex;
  flex-direction: column;
  /* 设置子元素垂直排列 */
  margin-left: 0.1rem;
}

.message-me-asWhole-top {
  padding: 3px;
  /* font-size: 12px; */
  font-family: 微软雅黑;
  padding: 3px;
  color: rgba(134, 144, 156, 1);
  text-align: right;
}

.message-other-asWhole-top {
  padding: 3px;
  /* font-size: 12px; */
  font-family: 微软雅黑;
  padding: 3px;
  color: rgba(134, 144, 156, 1);
}

.message-me {
  background-color: rgba(242, 243, 245, 1);
  max-width: 280px;
  word-wrap: break-word;
  /* 处理英文单词换行 */
  word-break: break-all;
  /* 处理中文换行 */
  display: inline-block;
  /*将div元素转换为行内块元素*/
  width: auto;
  /* 宽度根据文本宽度自动调正*/
  padding: 6px 12px;
  border-radius: 4px;
}

.message-other {
  background-color: rgba(242, 243, 245, 1);
  max-width: 280px;
  word-wrap: break-word;
  /* 处理英文单词换行 */
  word-break: break-all;
  /* 处理中文换行 */
  display: inline-block;
  /*将div元素转换为行内块元素*/
  width: auto;
  /* 宽度根据文本宽度自动调正*/
  padding: 6px 12px;
  border-radius: 4px;
}


.examineeFace_logo_style {
  width: 30px;
}
</style>