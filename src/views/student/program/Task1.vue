<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue';
import Blockly from 'blockly';

const router = useRouter()

// Blockly 工作区实例
const workspace = ref(null);
// 工具箱配置
const toolbox = {
  kind: 'flyoutToolbox',
  contents: [
    {
      kind: 'block',
      type: 'controls_if',
    },
    {
      kind: 'block',
      type: 'controls_whileUntil',
    },
  ],
};
// Blockly 生成的代码
const code = ref(null);

// 初始化 Blockly
onMounted(() => {
  // 注入到 blockly-div 中
  workspace.value = Blockly.inject('blockly-div', {
    toolbox: toolbox,
  });
  // 为工作区添加修改事件，触发调用 updateCode 函数
  workspace.value.addChangeListener(updateCode);
});

const updateCode = () => {
  // 获取当前块对应的 JS 代码
  code.value = Blockly.JavaScript.workspaceToCode(workspace.value);
};

</script>

<template>
  <div id="blocklyDiv">
    <div>
      <div id="blockly-div"></div>
    </div>
  </div>
</template>

<style scoped>
div#blocklyDiv {
  border: 1px solid;
  height: 290px;
  width: 800px;
  float: left;
}

#blockly-div {
  width: 100%;
  height: 288px;
}
</style>