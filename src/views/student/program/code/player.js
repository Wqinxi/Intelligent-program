import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
export default () => {
    const player_direction_left = 1;
    const player_direction_up = 0;
    const player_direction_right = 3;
    const player_direction_down = 2;
    const player_direction_max = 4;

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