<script setup>
import { defineEmits } from 'vue';
import { ref } from 'vue';
import { nextTick } from 'vue'

const closebox = defineEmits(['close']);

const messages = ref([]);
const message = ref('');
const messageContainer = ref(null);

function sendMessage() {
  if (message.value.trim() !== '') {
    messages.value.push(message.value);
    message.value = '';

    // 滚动到最新消息
    nextTick(() => {
      const messageContainer = document.getElementById('messageContainer');
      messageContainer.scrollTop = messageContainer.scrollHeight;
    });
  }
}
</script>

<template>  
  <div class="message-box">
    <div class="message-container" ref="messageContainer">
      <div class="my-message">
        <div v-for="msg in messages" class="message-item">
          {{ msg }}
          <img src="@/assets/img/me.jpg" class="avatar">
        </div>
      </div>
      <div class="robot-message">

      </div>
    </div>

    <div class="input-wrapper">
      <input type="text" v-model="message" class="input-field" placeholder="请输入消息">
      <button @click.native="closebox('close')" class="return-button">返回课程页面</button>
      <button @click="sendMessage" class="send-button">发送</button>
    </div>

  </div>
</template>

<style>
.message-box {
  background-color: white;
  border-radius: 30px;
  text-align: center;
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* 添加定位属性 */
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
.my-message{
  margin-left:60%;
  margin-top: 3%;
}
.message-item{
  margin-top: 2%;
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
  margin-right:5px;
}

</style>