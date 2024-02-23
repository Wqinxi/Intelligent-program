import useGame from "@/views/student/program/code/game.js"
import usePlayer from "@/views/student/program/code/player.js"
import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
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

    const levels = [
        {
            id: 1,
            img: "/src/views/student/program/code/img/maze1-1.png",
            blocks: [
                'forward',
                'change_direction',
            ],
            game: {
                player: {
                    direction: player_direction_right,
                    x: 4,
                    y: 5
                },
                goal: {
                    x: 6,
                    y: 5
                },
                path: [
                    // [x, y]
                    [4, 5],
                    [5, 5],
                    [6, 5],
                ]
            },
            max_blocks: 10,
        },
        {
            id: 2,
            img: "/src/views/student/program/code/img/maze1-2.png",
            max_blocks: 10,
            blocks: [
                'forward',
                'change_direction',
                "while_do",
                "if_else"
            ],
            game: {
                player: {
                    direction: player_direction_right,
                    x: 3,
                    y: 4
                },
                goal: {
                    x: 6,
                    y: 6
                },
                path: [
                    // [x, y]
                    [3, 4],
                    [4, 4],
                    [5, 4],
                    [6, 4],
                    [6, 5],
                    [6, 6],
                ]
            }
        },
        {
            id: 3,
            img: "/src/views/student/program/code/img/maze1-3.png",
            max_blocks: 10,
            blocks: [
                'forward',
                'change_direction',
                "while_do",
                "if_else"
            ],
            game: {
                player: {
                    direction: player_direction_right,
                    x: 3,
                    y: 6
                },
                goal: {
                    x: 7,
                    y: 4
                },
                path: [
                    // [x, y]
                    [3, 6],
                    [4, 6],
                    [5, 6],
                    [5, 5],
                    [5, 4],
                    [6, 4],
                    [7, 4],
                ]
            }
        },
    ]

    return { levels }
}