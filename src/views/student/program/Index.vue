<template>
  <div class="body-wrap">
    <div class="head-wrap">
      <div class="head">课程A：任务{{ toChineseNum(currentTask + 1) }}</div>
    </div>
    <div class="wrap">
      <div class="wrap-left">
        <div class="map-wrap">
          <img src="./code/img/maze1-2.png" alt="" ref="mazemap">
          <div class="person-wrap" ref="mazeman" id="man">
            <div class="person">
              <img src="@/assets/img/person.png" alt="" ref="personimg">
            </div>
          </div>
          <div class="marker" ref="mazeend" id="marker">
            <img src="https://blockly.games/maze/marker.png" alt="">
          </div>
        </div>
        <div class="list-wrap">
          <div class="list">
            <div class="list-head">任务清单</div>
            <ul class="list-content">
              <li v-for="(item) in levels.length" @click="changeTask(item - 1)">
                任务{{ toChineseNum(item) }}
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
          <!--          把下面那一块换成子组件，然后删掉了下面js的东西  -->
          <div class="code-wrap">
            <div class="code-area" id="blocklyDiv"></div>
            <div class="js-code-wrap">
              <div :class="isActive ? 'js-code-content active' : 'js-code-content'">
                <div class="js-code">
                  <p ref="codeContent"></p>
                </div>
                <button @click="showCode">查看代码</button>
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
import useBlockly from "@/views/student/program/code/block.js"
import useGame from "@/views/student/program/code/game.js"
import useLevel from "@/views/student/program/code/level.js"
import usePlayer from "@/views/student/program/code/player.js"
import { ref, onMounted } from 'vue';
import { javascriptGenerator } from 'blockly/javascript';
import { block } from "blockly/core/tooltip";

Blockly.setLocale(hans);

const route = useRoute()
////////////////////////////////////////// code区

function toChineseNum(number: any) {
  const chineseNum = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  const chineseUnit = ["", "十", "百", "千", "万", "亿"];
  let numStr = number.toString();
  let len = numStr.length;
  let str = "";
  for (let i = 0; i < len; i++) {
    str += chineseNum[parseInt(numStr[i])] + chineseUnit[len - 1 - i];
  }
  str = str.replace(/零[十百千]/g, "零");
  str = str.replace(/零+/g, "零");
  str = str.replace(/^零+/, "");
  str = str.replace(/零+$/, "");
  if (str[str.length - 1] === "零") {
    str = str.slice(0, -1);
  }
  return str;
}
const router = useRouter()
/////////////////////

// 向前走block定义
Blockly.Blocks['forward'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("向前走");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("控制人物在当前方向向前走一格");
    this.setHelpUrl("");
  }
};

// 向前走转换js代码定义
javascriptGenerator.forBlock['forward'] = function (block: any) {
  // TODO: Assemble javascript into code variable.
  var code = 'forward();\n';
  return code;
};

// 转弯block定义
Blockly.Blocks['change_direction'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("向")
      .appendField(new Blockly.FieldDropdown([["左", "left"], ["右", "right"]]), "dir")
      .appendField("转");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("控制人物改变方向");
    this.setHelpUrl("");
  }
};

// 转弯转换js代码定义
javascriptGenerator.forBlock['change_direction'] = function (block: any, generator: any) {
  var dropdown_dir = block.getFieldValue('dir');
  // TODO: Assemble javascript into code variable.
  if (dropdown_dir == 'left') {
    var code = 'turn_left();\n';
  }
  else {
    var code = 'turn_right();\n';
  }
  return code;
};

// 循环block定义
Blockly.Blocks['while_do'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("一直执行直到到达终点");
    this.appendStatementInput("do")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(225);
    this.setTooltip("循环执行语句");
    this.setHelpUrl("");
  }
};

// 循环js代码转换定义
javascriptGenerator.forBlock['while_do'] = function (block: any, generator: any) {
  var statements_do = generator.statementToCode(block, 'do');
  // TODO: Assemble javascript into code variable.
  var code = 'while(not_end()){\n' + statements_do + '}\n';
  return code;
};

// 选择block定义
Blockly.Blocks['if_else'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("如果")
      .appendField(new Blockly.FieldDropdown([["可以向前走", "ahead"], ["可以向左走", "left"], ["可以向右走", "right"]]), "choice");
    this.appendStatementInput("true")
      .setCheck(null)
      .appendField("则");
    this.appendStatementInput("false")
      .setCheck(null)
      .appendField("否则");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(135);
    this.setTooltip("判断语句真假执行");
    this.setHelpUrl("");
  }
};

// 选择转换js代码定义
javascriptGenerator.forBlock['if_else'] = function (block: any, generator: any) {
  var dropdown_choice = block.getFieldValue('choice');
  var statements_true = generator.statementToCode(block, 'true');
  var statements_false = generator.statementToCode(block, 'false');
  // TODO: Assemble javascript into code variable.

  if (dropdown_choice == 'ahead') {
    var code = 'if(exist_path_ahead()){\n' + statements_true + '}\nelse{\n' + statements_false + '}\n';
  }
  else if (dropdown_choice == 'left') {
    var code = 'if(exist_path_left()){\n' + statements_true + '}\nelse{\n' + statements_false + '}\n';
  }
  else if (dropdown_choice == 'right') {
    var code = 'if(exist_path_right()){\n' + statements_true + '}\nelse{\n' + statements_false + '}\n';
  }
  else{
    var code = '';
  }
  return code;
};


//////////////////
let { levels } = useLevel()
let { game } = useGame()

let {
  player_direction_left,
  player_direction_up,
  player_direction_right,
  player_direction_down,
  player_direction_max,
  player
} = usePlayer()


let currentTask = ref(0);

function changeTask(idx: number) {
  currentTask.value = idx
  let blocklyDiv = (document.querySelector('#blocklyDiv')as Element);
  console.log(blocklyDiv)
  while (blocklyDiv.firstChild) {
    blocklyDiv.removeChild(blocklyDiv.firstChild)
  }
  console.log(blocklyDiv)
  load_level(levels[currentTask.value]);
}
let current_game = new game();
let mazemap = ref()//地图
let mazeman = ref();//人的位置
let mazeend = ref();//终点
let codeContent = ref();
let personimg = ref();//人物图像

function load_level(level: any) {
  let toolbox: any = {
    "kind": "flyoutToolbox",
    "contents": []
  };
  for (let i = 0; i < level.blocks.length; i++) {
    toolbox.contents.push({
      "kind": "block",
      "type": level.blocks[i]
    });
  }

  current_game.workspace = Blockly.inject('blocklyDiv', {
    toolbox: toolbox,
    grid: {
      spacing: 15,
      length: 4,
      colour: '#ccc',
      snap: true
    },
    maxBlocks: 10
  });


  Blockly.getMainWorkspace().options.maxBlocks = ('max_blocks' in level) ? (level.max_blocks) : Infinity;
  current_game.player.direction = level.game.player.direction;
  console.log(level.game.player.direction, level)
  current_game.init_direction = level.game.player.direction;
  current_game.player.position = { x: level.game.player.x, y: level.game.player.y };
  current_game.init_position = { x: level.game.player.x, y: level.game.player.y };
  current_game.goal = { x: level.game.goal.x, y: level.game.goal.y };
  current_game.path = level.game.path;
  current_game.delay = 0;
  console.log(mazemap.value.src, level.img)

  mazemap.value.src = level.img
  // personimg.value.style.translate = -49 * 4 * current_game.init_direction + "px";
  personimg.value.style.translate = -49 * 4 * current_game.init_direction + "px";
  mazeman.value.style.left = 10 * current_game.init_position.x + "%";
  mazeman.value.style.top = 10 * (10 - current_game.init_position.y) + "%";
  mazeend.value.style.left = 10 * current_game.goal.x + "%";
  mazeend.value.style.top = 10 * (10 - current_game.goal.y) + "%";
}
onMounted(() => {
  load_level(levels[currentTask.value]);

  function updateCode(event: any) {
    const code = javascriptGenerator.workspaceToCode(current_game.workspace);
    console.log(code)
    codeContent.value.innerText = code
  }
  current_game.workspace.addChangeListener(updateCode);
});


// // function onchange(event) {
// //     document.getElementById("blockSum").textContent = current_game.workspace.getAllBlocks(false).length;
// //     document.getElementById('capacity').textContent = current_game.workspace.remainingCapacity();
// // }

// current_game.workspace.addChangeListener(onchange);
// onchange();

function is_movable(new_position: any) {
  return current_game.path.find((element: any) => element[0] == new_position.x && element[1] == new_position.y) != undefined
}

function toNum(percent: any) {
  var str = percent.replace("%", "");
  str = Number(str);
  return str;
}

function toNumPx(str: any) {
  console.log(str, "str")
  var res = str.replace("px", "");
  res = Number(res);
  console.log(res, "res")
  return res;
}

function move(x: any, y: any) {
  // for (var i = 1; i <= 10; i++) {
  setTimeout(function () {
    mazeman.value.style.left = toNum(mazeman.value.style.left) + 10 * x + "%";
    mazeman.value.style.top = toNum(mazeman.value.style.top) - 10 * y + "%";
  }, current_game.delay);
  current_game.delay += 1000;
  // }
  console.log(mazeman.value.style.left, mazeman.value.style.top)
}

function change_dir(x: any) {
  if (x == 1) {
    for (var i = 1; i <= 4; i++) {
      setTimeout(() => {
        personimg.value.style.translate = (toNumPx(personimg.value.style.translate) + 49) % 784 + "px";
      }, current_game.delay);
      current_game.delay += 250;
    }

  }
  else {
    for (var i = 1; i <= 4; i++) {
      setTimeout(() => {
        personimg.value.style.translate = (toNumPx(personimg.value.style.translate) - 49 + 784) % 784 + "px";
      }, current_game.delay);
      current_game.delay += 250;
    }
  }
}

function reset() {
  current_game.player.position = { x: current_game.init_position.x, y: current_game.init_position.y };
  current_game.player.direction = current_game.init_direction;
  personimg.value.style.translate = -49 * 4 * current_game.init_direction + "px";
  mazeman.value.style.left = 10 * current_game.init_position.x + "%";
  mazeman.value.style.top = 10 * (10 - current_game.init_position.y) + "%";
  current_game.delay = 0;
  console.log(current_game.player.to_string());
}

// function countBlock(){
// 	document.getElementById("countBox").innerText = "目前已使用" + current_game.workspace.getAllBlocks(false).length + "个块";
// }

//向前走
function forward() {
  eval(javascriptGenerator.INFINITE_LOOP_TRAP);
  var new_position = { x: current_game.player.position.x, y: current_game.player.position.y, };
  var xx = 0, yy = 0;
  if (current_game.player.direction == player_direction_left) {
    new_position.x--;
    xx = -1;
  }
  else if (current_game.player.direction == player_direction_up) {
    new_position.y++;
    yy = 1;
  }
  else if (current_game.player.direction == player_direction_right) {
    new_position.x++;
    xx = 1;
  }
  else if (current_game.player.direction == player_direction_down) {
    new_position.y--;
    yy = -1;
  }
  //找到当前新位置判断是否能走
  if (is_movable(new_position)) {
    current_game.player.position = { x: new_position.x, y: new_position.y, };
    move(xx, yy);
  }
  // console.log(current_game.player.to_string());
}

function turn_left() {
  eval(javascriptGenerator.INFINITE_LOOP_TRAP);
  var new_direction = (current_game.player.direction - 1) % player_direction_max;

  // setTimeout(function() {
  // 	mazeman.value.style.animation = "turn_left_" + current_game.player.direction + " 1s steps(4) forwards";
  // 	console.log("turn_left_" + current_game.player.direction + " 1s steps(4) forwards");
  // 	mazeman.value.style.animation = "";
  // }, current_game.delay);
  // current_game.delay += 1000;

  change_dir(1);

  current_game.player.direction = new_direction;
  console.log(current_game.player.to_string());
}

function turn_right() {
  eval(javascriptGenerator.INFINITE_LOOP_TRAP);
  var new_direction = ((current_game.player.direction + 1) % player_direction_max + player_direction_max) % player_direction_max;

  // setTimeout(function() {
  // 	mazeman.value.style.animation = "turn_right_" + current_game.player.direction + " 1s steps(4) forwards";
  // 	mazeman.value.style.animation = "";
  // }, current_game.delay);
  // current_game.delay += 1000;

  change_dir(-1);

  current_game.player.direction = new_direction;
  console.log(current_game.player.to_string());
}

function not_end() {
  return (current_game.player.position.x != current_game.goal.x) || (current_game.player.position.y != current_game.goal.y);
}

function exist_path_ahead() {
  var new_position = { x: current_game.player.position.x, y: current_game.player.position.y, };
  if (current_game.player.direction == player_direction_left) {
    new_position.x--;
  }
  else if (current_game.player.direction == player_direction_up) {
    new_position.y++;
  }
  else if (current_game.player.direction == player_direction_right) {
    new_position.x++;
  }
  else if (current_game.player.direction == player_direction_down) {
    new_position.y--;
  }
  //找到当前新位置判断是否能走
  if (is_movable(new_position)) {
    return true;
  }
  else {
    return false;
  }
}

function exist_path_left() {
  var new_position = { x: current_game.player.position.x, y: current_game.player.position.y, };
  if (current_game.player.direction == player_direction_left) {
    new_position.y--;
  }
  else if (current_game.player.direction == player_direction_up) {
    new_position.x--;
  }
  else if (current_game.player.direction == player_direction_right) {
    new_position.y++;
  }
  else if (current_game.player.direction == player_direction_down) {
    new_position.x++;
  }
  //找到当前新位置判断是否能走
  if (is_movable(new_position)) {
    return true;
  }
  else {
    return false;
  }
}

function exist_path_right() {
  var new_position = { x: current_game.player.position.x, y: current_game.player.position.y, };
  if (current_game.player.direction == player_direction_left) {
    new_position.y++;
  }
  else if (current_game.player.direction == player_direction_up) {
    new_position.x++;
  }
  else if (current_game.player.direction == player_direction_right) {
    new_position.y--;
  }
  else if (current_game.player.direction == player_direction_down) {
    new_position.x--;
  }
  //找到当前新位置判断是否能走
  if (is_movable(new_position)) {
    return true;
  }
  else {
    return false;
  }
}

function runCode() {
  let LoopTrap = 10000;
  javascriptGenerator.INFINITE_LOOP_TRAP =
    'if (--window.LoopTrap == 0) throw "出现死循环！";\n';
  var code = javascriptGenerator.workspaceToCode(current_game.workspace);
  console.log(code);
  try {
    eval(code);
  } catch (e) {
    alert(e);
  }
  setTimeout(function () {
    if (!not_end()) {
      alert("你成功了！\n\n使用了" + current_game.workspace.getAllBlocks(false).length + "个块\n");
    }
    else {
      alert("你失败了！");
    }
    reset();
  }, current_game.delay);
  current_game.delay += 1000;
}
////


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

              button {
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
