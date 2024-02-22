

<template>
  <div class="body-wrap">
    <div class="head-wrap">
      <div class="head">课程A：任务一</div>
    </div>
    <div class="wrap">
      <div class="wrap-left">
        <div class="map-wrap">
          <img src="https://blockly.games/maze/tiles_pegman.png" alt="">
          <div class="person-wrap" ref="person">
            <div class="person">
              <img src="@/assets/img/person.png" alt="" ref="personimg">
            </div>
          </div>
          <div class="marker" ref="marker">
            <img src="https://blockly.games/maze/marker.png" alt="">
          </div>
        </div>
        <div class="list-wrap">
          <div class="list">
            <div class="list-head">任务清单</div>
            <ul class="list-content">
              <li v-for="(item, idx) in list">
                {{ item.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="wrap-right">
        <div class="dialog-wrap">
          <div class="dialog">
            <Dialog />
          </div>
        </div>
        <div class="code">
          <div class="code-wrap">
            <div class="code-area" id="blocklyDiv"></div>
            <div class="js-code-wrap">
              <div :class="isActive ? 'js-code-content active' : 'js-code-content'">
                <div class="js-code">
                  <p ref="codeContent"></p>
                </div>
                <buttom @click="showCode">查看代码</buttom>
                <div class="runcode" @click="runCode()">
                  运行代码
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterView, RouterLink, useRoute } from "vue-router";
import Dialog from "./Dialog.vue";
import Blockly from 'blockly';
import * as hans from 'blockly/msg/zh-hans'
import { useRouter } from 'vue-router'
import useFunction from "@/views/student/program/code/function.js"
import useBlock from "@/views/student/program/code/block.js"
import { ref, onMounted } from 'vue';
import { javascriptGenerator } from 'blockly/javascript';
let { toolbox } = useBlock();
Blockly.setLocale(hans);

const route = useRoute()
let list = [
  {
    imgSrc: "adsfadsf",
    name: "任务一"
  }, {
    imgSrc: "adsfadsf",
    name: "任务二"
  },
  {
    imgSrc: "adsfadsf",
    name: "任务三"
  },
  {
    imgSrc: "adsfadsf",
    name: "任务四"
  },
  {
    imgSrc: "adsfadsf",
    name: "任务五"
  },
]
////////////////////////////////////////// code区

// 工具箱配置

let direction = ref(1);
let person = ref();
let personimg = ref();
let marker = ref();
let codeContent = ref();
let workspace: any;
function change(num: any) {
  return num * 10 + "%"
}
let startnum = [4, 1];
let endnum = [1, 9];
let start = startnum.map(change)
let end = endnum.map(change)


onMounted(() => {
  //////
  personimg.value.style.translate = "0px";
  [person.value.style.top, person.value.style.left] = start;
  [marker.value.style.top, marker.value.style.left] = end;
  let workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    grid: {
      spacing: 15,
      length: 4,
      colour: '#ccc',
      snap: true
    },
    maxBlocks: 10
  });

  ////

  function updateCode(event: any) {
    const code = javascriptGenerator.workspaceToCode(workspace);
    console.log(code)
    codeContent.value.innerText = code
  }
  workspace.addChangeListener(updateCode);
});

function runCode() {
  let LoopTrap = 10000;
  console.log(start)
  // Blockly.JavaScript.INFINITE_LOOP_TRAP =
  //   'if (--window.LoopTrap == 0) throw "出现死循环！";\n';
  var code = javascriptGenerator.workspaceToCode(workspace);
  console.log(code);
  try {
    eval(code);
  } catch (e) {
    alert(e);
  }
  //   setTimeout(function () {
  //     if (!not_end()) {
  //       alert("你成功了！\n\n使用了" + workspace.getAllBlocks(false).length + "个块\n");
  //     }
  //     else {
  //       alert("你失败了！");
  //     }
  //     reset();
  //   }, current_game.delay);
  //   current_game.delay += 1000;
}
let timegap = [0, -196, -392, -588, -735];

function turnRight() {
  direction.value++;
  if (direction.value > 4) {
    direction.value = 1;
  }
  if (direction.value < 1) {
    direction.value = 4
  }
  let delay = 0;
  let pos = timegap[direction.value - 1];
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      pos += 49;
      personimg.value.style.translate = pos + "px";
    }, delay)
    delay += 100;
  }
}

function turnLeft() {
  direction.value--;
  if (direction.value > 4) {
    direction.value = 1;
  }
  if (direction.value < 1) {
    direction.value = 4
  }
  let delay = 0;
  let pos = timegap[direction.value + 1];
  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      pos -= 49;
      personimg.value.style.translate = pos + "px";
    }, delay)
    delay += 100;
  }
};
function reset() {

}


function moveForward() {
  if (direction.value == 1) {
    startnum[0]--;
  }
  else if (direction.value == 2) {
    startnum[1]++;
  }
  else if (direction.value == 3) {
    startnum[0]++;
  }
  else if (direction.value == 4) {
    startnum[1]--;
  }
  person.value.style.left = change(startnum[1])
  person.value.style.top = change(startnum[0])
}

let isActive = ref(false);
function showCode() {
  isActive.value = (isActive.value == true ? false : true)
}


</script>
<style scoped lang="less">
@startLeft: 10%;
@startTop: 40%;

@markerLeft: 90%;
@markerTop: 10%;

.body-wrap {
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  top: 7vh;

  .head-wrap {
    height: 5vh;
    width: 100%;
    background-color: rgb(103, 104, 104);
    position: relative;

    .head {
      height: 5vh;
      line-height: 5vh;
      margin-left: 5vh;
      color: #fff;
    }
  }

  .wrap {
    height: 88vh;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    .wrap-left {
      height: 100%;
      width: 30%;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;

      .map-wrap {
        height: 300px;
        width: 300px;
        position: relative;

        img {
          height: 100%;
          width: 100%;
          position: absolute;
          left: 0px;
          top: 0px;
        }

        .person-wrap {
          height: 50px;
          width: 50px;
          position: absolute;
          left: @startLeft;
          top: @startTop;
          transform: translate(-50%, -50%);
          z-index: 999;
          transition: all 1s;

          .person {
            height: 50px;
            width: 50px;
            overflow: hidden;
            position: relative;

            @keyframes turn_right_1 {
              from {
                transform: translateX(0px);
              }

              to {
                transform: translateX(-196px);
              }
            }

            @keyframes turn_right_2 {
              from {
                transform: translateX(-196px);
              }

              to {
                transform: translateX(-392px);
              }
            }

            @keyframes turn_right_3 {
              from {
                transform: translateX(-392px);
              }

              to {
                transform: translateX(-588px);
              }
            }

            @keyframes turn_right_0 {
              0% {
                transform: translateX(-588px);
              }

              100% {
                transform: translateX(-735px);
              }
            }

            @keyframes turn_left_0 {
              from {
                transform: translateX(-196px);
              }

              to {
                transform: translateX(0px);
              }
            }

            @keyframes turn_left_1 {
              from {
                transform: translateX(-392px);
              }

              to {
                transform: translateX(-196px);
              }
            }

            @keyframes turn_left_2 {
              from {
                transform: translateX(-588px);
              }

              to {
                transform: translateX(-392px);
              }
            }

            @keyframes turn_left_3 {
              from {
                transform: translateX(-735px);
              }

              to {
                transform: translateX(-588px);
              }
            }

            img {
              height: 50px;
              width: 1029px;
              transform: translateX(-588);
            }
          }
        }

        .marker {
          height: 34px;
          width: 20px;
          position: absolute;
          left: @markerLeft;
          top: @markerTop;
          transform: translate(-50%, -50%);
          z-index: 999;
          border-radius: 50%;
        }
      }


      .list-wrap {
        margin-top: 20px;
        height: auto;
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .list {
          height: 100%;
          width: 80%;

          .list-head {
            height: 30px;
            line-height: 30px;
          }

          .list-content {

            li {
              height: 32px;
              line-height: 32px;
              width: 100%;
              margin: 5px 0px;
              transition: all .5s .01s;
              cursor: pointer;
              border-radius: 15px;
              padding: 0px 5px;

              &:hover {
                background-color: #8d8a8a;
                color: #fff;
                transition: all .5s;
              }
            }
          }
        }
      }
    }

    .wrap-right {
      height: 100%;
      width: 70%;
      position: relative;

      .dialog-wrap {
        height: 30vh;
        width: 100%;
        position: relative;

        .dialog {
          height: 100%;
          width: 100%;
          position: relative;
        }
      }

      .code {
        height: 58vh;
        width: 100%;
        position: relative;

        .code-wrap {
          height: 58vh;
          width: 100%;
          position: relative;
          overflow: hidden;

          .code-area {
            height: 100%;
            width: 100%;
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

              @width: 80px;
              @height: 25px;

              buttom {
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

              .runcode {
                height: @height;
                width: @width ;
                left: -@width;
                bottom: 0px;
                text-align: center;
                line-height: @height;
                background-color: #000000;
                position: absolute;
                color: #Fff;
                border-radius: 15px;
              }
            }
          }
        }


      }
    }
  }
}
</style>
