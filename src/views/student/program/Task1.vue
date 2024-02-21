<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue';
import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
const router = useRouter()

// 工具箱配置
let toolbox = {
  "kind": "categoryToolbox",
  "contents": [
    {
      "kind": "category",
      "name": "控制",
      "contents": [
        {
          "kind": "block",
          "type": "controls_if"
        },
        {
          "kind": "block",
          "type": "controls_whileUntil"
        },
        {
          "kind": "block",
          "type": "controls_for"
        }
      ]
    },
    {
      "kind": "category",
      "name": "逻辑",
      "contents": [
        {
          "kind": "block",
          "type": "logic_compare"
        },
        {
          "kind": "block",
          "type": "logic_operation"
        },
        {
          "kind": "block",
          "type": "logic_boolean"
        }
      ]
    }
  ]
}
let codeContent = ref();
onMounted(() => {
  let workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    grid: {
      spacing: 15,
      length: 4,
      colour: '#ccc',
      snap: true
    },
  });
  function updateCode(event: any) {
    const code = javascriptGenerator.workspaceToCode(workspace);
    console.log(code)
    codeContent.value.innerText = code
  }
  workspace.addChangeListener(updateCode);
});
let isActive = ref(false);
function showCode() {
  isActive.value = (isActive.value == true ? false : true)
}

</script>

<template>
  <div class="code-wrap">
    <div class="code-area" id="blocklyDiv"></div>
    <div class="js-code-wrap">
      <div :class="isActive ? 'js-code-content active' : 'js-code-content'">
        <div class="js-code">
          <p ref="codeContent"></p>
        </div>
        <buttom @click="showCode">查看代码</buttom>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.code-wrap {
  background-color: rgb(0, 255, 255);
  height: 58vh;
  width: 100%;
  position: relative;
  overflow: hidden;

  .code-area {
    height: 100%;
    width: 100%;
    background-color: blueviolet;
  }

  .js-code-wrap {
    height: 100%;
    width: 30%;
    position: absolute;
    top: 0px;
    right: 0px;

    .js-code-content {
      height: 100%;
      width: 100%;
      position: relative;
      right: -100%;
      transition: all .5s;

      &.active {
        right: 0%;

        .js-code {
          display: block;
        }
      }

      .js-code {
        height: 100%;
        width: 100%;
        background-color: #8a8888;
        position: absolute;
        top: 0px;
        left: 0px;
        padding: 10px;

        p {
          color: #fff;
        }
      }

      buttom {
        @width: 80px;
        @height: 25px;
        border-radius: 5px;
        position: absolute;
        white-space: nowrap;
        z-index: 10;
        height: @height;
        width: @width ;
        color: #FFF;
        background-color: rgb(143, 141, 141);
        top: 0px;
        left: -@width;
        text-align: center;
        line-height: @height;
      }
    }
  }
}
</style>