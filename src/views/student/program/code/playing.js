import useGame from "@/views/student/program/code/game.js"
import useLevel from "@/views/student/program/code/level.js"
import usePlayer from "@/views/student/program/code/player.js"
import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import * as hans from 'blockly/msg/zh-hans'
import { ref } from 'vue'
let { levels } = useLevel()
Blockly.setLocale(hans);
let { game } = useGame()

let {
    player_direction_left,
    player_direction_up,
    player_direction_right,
    player_direction_down,
    player_direction_max,
    player
} = usePlayer()


export default () => {

    let current_game = new game();
    var maze_map = ref()
    var maze_man = ref();
    var maze_end = ref();
    load_level(levels[1]);


    function load_level(level) {
        let toolbox = {
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
        current_game.init_direction = level.game.player.direction;
        current_game.player.position = { x: level.game.player.x, y: level.game.player.y };
        current_game.init_position = { x: level.game.player.x, y: level.game.player.y };
        current_game.goal = { x: level.game.goal.x, y: level.game.goal.y };
        current_game.path = level.game.path;
        current_game.delay = 0;
        maze_map.value.src = level.img
        maze_man.value.style.backgroundPosition = 49 * 4 * current_game.init_direction + "px";
        maze_man.value.style.left = 10 * current_game.init_position.x + "%";
        maze_man.value.style.top = 10 * (10 - current_game.init_position.y) + "%";
        maze_end.value.style.left = 10 * current_game.goal.x + "%";
        maze_end.value.style.top = 10 * (10 - current_game.goal.y) + "%";
    }

    // // function onchange(event) {
    // //     document.getElementById("blockSum").textContent = current_game.workspace.getAllBlocks(false).length;
    // //     document.getElementById('capacity').textContent = current_game.workspace.remainingCapacity();
    // // }

    // current_game.workspace.addChangeListener(onchange);
    // onchange();

    function is_movable(new_position) {
        return current_game.path.find(element => element[0] == new_position.x && element[1] == new_position.y) != undefined
    }

    function toNum(percent) {
        var str = percent.replace("%", "");
        str = Number(str);
        return str;
    }

    function toNumPx(str) {
        var res = str.replace("px", "");
        res = Number(res);
        return res;
    }

    function move(x, y) {
        for (var i = 1; i <= 10; i++) {
            setTimeout(function () {
                maze_man.value.style.left = toNum(maze_man.value.style.left) + x + "%";
                maze_man.value.style.top = toNum(maze_man.value.style.top) - y + "%";
            }, current_game.delay);
            current_game.delay += 100;
        }
    }

    function change_dir(x) {
        if (x == 1) {
            for (var i = 1; i <= 4; i++) {
                setTimeout(function () {
                    maze_man.value.style.backgroundPositionX = (toNumPx(maze_man.value.style.backgroundPositionX) + 49) % 784 + "px";
                }, current_game.delay);
                current_game.delay += 250;
            }
        }
        else {
            for (var i = 1; i <= 4; i++) {
                setTimeout(function () {
                    maze_man.value.style.backgroundPositionX = (toNumPx(maze_man.value.style.backgroundPositionX) - 49 + 784) % 784 + "px";
                }, current_game.delay);
                current_game.delay += 250;
            }
        }
    }

    function reset() {
        current_game.player.position = { x: current_game.init_position.x, y: current_game.init_position.y };
        current_game.player.direction = current_game.init_direction;
        maze_man.value.style.backgroundPosition = 49 * 4 * current_game.init_direction + "px";
        maze_man.value.style.left = 10 * current_game.init_position.x + "%";
        maze_man.value.style.top = 10 * (10 - current_game.init_position.y) + "%";
        current_game.delay = 0;
        // console.log(current_game.player.to_string());
    }

    // function countBlock(){
    // 	document.getElementById("countBox").innerText = "目前已使用" + current_game.workspace.getAllBlocks(false).length + "个块";
    // }

    //向前走
    function forward() {
        eval(Blockly.JavaScript.INFINITE_LOOP_TRAP);
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
        console.log(current_game.player.to_string());
    }

    function turn_left() {
        eval(Blockly.JavaScript.INFINITE_LOOP_TRAP);
        var new_direction = (current_game.player.direction + 1) % player_direction_max;

        // setTimeout(function() {
        // 	maze_man.value.style.animation = "turn_left_" + current_game.player.direction + " 1s steps(4) forwards";
        // 	console.log("turn_left_" + current_game.player.direction + " 1s steps(4) forwards");
        // 	maze_man.value.style.animation = "";
        // }, current_game.delay);
        // current_game.delay += 1000;

        change_dir(1);

        current_game.player.direction = new_direction;
        console.log(current_game.player.to_string());
    }

    function turn_right() {
        eval(Blockly.JavaScript.INFINITE_LOOP_TRAP);
        var new_direction = ((current_game.player.direction - 1) % player_direction_max + player_direction_max) % player_direction_max;

        // setTimeout(function() {
        // 	maze_man.value.style.animation = "turn_right_" + current_game.player.direction + " 1s steps(4) forwards";
        // 	maze_man.value.style.animation = "";
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
        window.LoopTrap = 10000;
        Blockly.JavaScript.INFINITE_LOOP_TRAP =
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
    return {
        forward, turn_left, turn_right, runCode, exist_path_ahead, exist_path_right, exist_path_left,
        maze_map,
        maze_man,
        maze_end
    }
}