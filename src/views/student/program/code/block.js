import Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
export default function () {

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
    javascriptGenerator.forBlock['forward'] = function (block, generator) {
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
    javascriptGenerator.forBlock['change_direction'] = function (block, generator) {
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
    javascriptGenerator.forBlock['while_do'] = function (block, generator) {
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
    javascriptGenerator.forBlock['if_else'] = function (block, generator) {
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
        return code;
    };
    return {}
}