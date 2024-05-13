<template>
    <div class="body-wrap">
        <div class="head-wrap">
            <div class="head">{{ Data.title }}：任务{{
                toChineseNum(currentTask + 1) }}</div>
        </div>
        <div class="wrap">
            <div class="wrap-left">
                <div class="map-wrap">
                    <img :src="mapsrc" alt="">
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
                                <div class="isover" ref="isover">
                                    <svg width="30" height="24" viewBox="0 0 30 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 13.7931L9.09091 21L28 2" stroke="#343434" stroke-width="3" />
                                    </svg>
                                </div>
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
                        <div class="runcode" @click="runCode()" style="cursor:pointer">
                            运行代码
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

import { RouterView, RouterLink, useRoute } from "vue-router";
import Dialog from "./components/Dialog.vue";
import Blockly from 'blockly';
import * as hans from 'blockly/msg/zh-hans'
import { useRouter } from 'vue-router'
import useGame from "@/views/student/blockData/game.js"
import usePlayer from "@/views/student/blockData/player.js"
import { ref, onMounted } from 'vue';
import { javascriptGenerator } from 'blockly/javascript';
import { useCurrentTaskStore } from "@/stores/activeTask";
import { useUserDataStore } from "@/stores/userData";
import mitter from '@/utils/emitter';
import { storeToRefs } from "pinia";
Blockly.setLocale(hans);
let userDataStore = storeToRefs(useUserDataStore())
let currentTasklocal = Number(localStorage.getItem('currentTask')) || useCurrentTaskStore().currentTask
let Data = userDataStore.userData.value.Data[currentTasklocal]
let levels = Data.blockList
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

mitter.on('send-data', (val: any) => {
    Data = val
    levels = Data.blockList
})


const route = useRoute()
////////////////////////////////////////// code区
onMounted(() => {
    forward();
    turn_left();
    turn_right();
    exist_path_ahead();
    exist_path_left();
    exist_path_right();
    console.log("onMounted")
    load_level(levels[currentTask.value], currentTask.value);
});

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

    var code =
        `while(not_end()){\n
        ${statements_do}\n
    }\n`;
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
    else {
        var code = '';
    }
    return code;
};


//////////////////

function changeTask(idx: number) {
    currentTask.value = idx
    let blocklyDiv = (document.querySelector('#blocklyDiv') as Element);
    while (blocklyDiv.firstChild) {
        blocklyDiv.removeChild(blocklyDiv.firstChild)
    }
    load_level(levels[currentTask.value], currentTask.value);
}
let current_game = new game();
let mazeman = ref();//人的位置
let mazeend = ref();//终点
let personimg = ref();//人物图像
let mapsrc = ref('../img/maze1-1.png');
function load_level(level: any, currenttask: number) {
    console.log("load_level\n", level, currenttask)
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
    // console.log(level.game.player.direction, level)
    current_game.init_direction = level.game.player.direction;
    current_game.player.position = { x: level.game.player.x, y: level.game.player.y };
    current_game.init_position = { x: level.game.player.x, y: level.game.player.y };
    current_game.goal = { x: level.game.goal.x, y: level.game.goal.y };
    current_game.path = level.game.path;
    current_game.delay = 0;
    mapsrc.value = level.mapSrc
    // personimg.value.style.translate = -49 * 4 * current_game.init_direction + "px";
    personimg.value.style.translate = -49 * 4 * current_game.init_direction + "px";
    mazeman.value.style.left = 10 * current_game.init_position.x + "%";
    mazeman.value.style.top = 10 * (10 - current_game.init_position.y) + "%";
    mazeend.value.style.left = 10 * current_game.goal.x + "%";
    mazeend.value.style.top = 10 * (10 - current_game.goal.y) + "%";
    // 回显数据//如果有的话,本地,云端数据
    if (JSON.parse(localStorage.getItem(`codeSave[${currentTasklocal}][${currenttask}]`) as string) || level.status) {
        let codeData = JSON.parse(localStorage.getItem(`codeSave[${currentTasklocal}][${currenttask}]`) as string) || level.status
        Blockly.serialization.workspaces.load(codeData, current_game.workspace);
    }
    let path = '';
    for (let i = 0; i < level.game.path.length; i++) {
        path += `[${level.game.path[i][0]},${level.game.path[i][1]}]`
        path += (i == level.game.path.length - 1 ? '' : ',');
    }
    const code = javascriptGenerator.workspaceToCode(current_game.workspace);
    mitter.emit('test')
    mitter.emit('sendCode', code);
    mitter.emit('sendMap', path);
    mitter.emit('sendEnd', `[${level.game.goal.x},${level.game.goal.y}]`)
    mitter.emit('sendStart', `[${level.game.player.x},${level.game.player.y}]`)
    function updateCodeThro(timeGap: number) {
        let pre = 0
        let isDo = false
        return function () {
            let current = Date.now()
            if (current - pre >= timeGap) {
                pre = current
                // 修改数据，发送请求，本地保存
                const code = javascriptGenerator.workspaceToCode(current_game.workspace);
                mitter.emit('sendCode', code);
                // 保存code
                let codeData = Blockly.serialization.workspaces.save(current_game.workspace);
                localStorage.setItem(`codeSave[${currentTasklocal}][${currenttask}]`, JSON.stringify(codeData))//保存
                level.status = codeData;
            }
        }
    }
    let updateCode = updateCodeThro(2000)
    current_game.workspace.addChangeListener(updateCode);
    // 初始化 勾选
    isover.value[currentTask.value].style.opacity = (levels[currentTask.value].isOver ? 1 : 0)
    console.log("当前的游戏数据", levels)
}



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
    for (var i = 1; i <= 10; i++) {
        setTimeout(() => {
            mazeman.value.style.left = toNum(mazeman.value.style.left) + x + "%";
            mazeman.value.style.top = toNum(mazeman.value.style.top) - y + "%";
        }, current_game.delay)
        current_game.delay += 100;
    }
    console.log(mazeman.value.style.left, mazeman.value.style.top)
}

function change_dir(x: any) {
    if (x == 1) {
        for (var i = 1; i < 4; i++) {
            setTimeout(() => {
                personimg.value.style.translate = ((toNumPx(personimg.value.style.translate) + 49) >= 0 ? -735 : (toNumPx(personimg.value.style.translate) + 49)) + "px";
            }, current_game.delay);
            current_game.delay += 250;
        }
    }
    else {
        for (var i = 1; i < 4; i++) {
            setTimeout(() => {
                personimg.value.style.translate = (toNumPx(personimg.value.style.translate) - 49) % 784 + "px";
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

// function countBlock() {
//     document.getElementById("countBox").innerText = "目前已使用" + current_game.workspace.getAllBlocks(false).length + "个块";
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
}

function turn_left() {
    eval(javascriptGenerator.INFINITE_LOOP_TRAP);
    var new_direction = (current_game.player.direction - 1) % player_direction_max;
    change_dir(1);
    current_game.player.direction = new_direction;
    console.log(current_game.player.to_string());
}

function turn_right() {
    eval(javascriptGenerator.INFINITE_LOOP_TRAP);
    var new_direction = ((current_game.player.direction + 1) % player_direction_max + player_direction_max) % player_direction_max;
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


let isover = ref()//打勾
function runCode() {
    window.LoopTrap = 10000;
    javascriptGenerator.INFINITE_LOOP_TRAP =
        'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';
    // javascriptGenerator.STATEMENT_PREFIX = 'highlightBlock(%1);\n';
    // javascriptGenerator.addReservedWords('highlightBlock');
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
            levels[currentTask.value].isOver = true
            isover.value[currentTask.value].style.opacity = 1
        }
        else {
            alert("你失败了！");
        }
        reset();
    }, current_game.delay);
    current_game.delay += 10000;
}
////

</script>
<style scoped lang="less">
@startLeft: 10%;
@startTop: 40%;
@markerLeft: 90%;
@markerTop: 10%;

.body-wrap {
    height: 93vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    top: 7vh;

    .head-wrap {
        height: 5vh;
        width: 100%;
        background-color: hsl(94, 48%, 45%);
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
                    transition: all .1s;

                    .person {
                        height: 50px;
                        width: 50px;
                        overflow: hidden;
                        position: relative;
                        transform: translateY(-20%);
                        z-index: 10;

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
                    transform: translate(-50%, -100%);
                    z-index: 5;
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
                            display: flex;
                            justify-content: space-between;

                            &:hover {
                                background-color: #8bb876;
                                color: #fff;
                                transition: all .5s;
                            }

                            .isover {
                                opacity: 0;
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

                    .runcode {
                        z-index: 999;
                        height: 30px;
                        width: 100px;
                        line-height: 30px;
                        text-align: center;
                        margin-left: 20px;
                        position: absolute;
                        bottom: 10px;
                        left: 0px;
                        background-color: #f8a920;
                        color: #fff;
                        border-radius: 15px;
                    }
                }
            }
        }
    }
}
</style>
