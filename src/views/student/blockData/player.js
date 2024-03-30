import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
export default () => {
    let player_direction_up = 0;
    let player_direction_right = 1;
    let player_direction_down = 2;
    let player_direction_left = 3;
    let player_direction_max = 4;

    class player {
        constructor(direction = player_direction_up, start_x = 0, start_y = 0) {
            this.direction = direction;
            this.position = { x: start_x, y: start_y, };
        }

        to_string() {
            return "direction : " + this.direction.toString() + ", position : { " + this.position.x + ", " + this.position.y + " }";
        }
    }
    return {
        player_direction_left,
        player_direction_up,
        player_direction_right,
        player_direction_down,
        player_direction_max,
        player
    }
}