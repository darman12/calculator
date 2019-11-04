/********
 * Defines the variables and methods necessary for a calculator to operate.
 * This does not handle the calculations. Rather, it accepts and validates
 * input for the operands and operator.
 */

var Calculator = (function() {
/******** private funcitons and properties *********/
    let leftOperand = "0";
    let rightOperand = "0";
    let operator = '';


/******** public funcitons and properties *********/
    function evaluate() {
        return operate([Number(leftOperand), Number(rightOperand), operator]);   
    }

    function deleteKey() {
        if (rightOperand != 0) {
            leftOperand
        }
    }

    return {
        init: init
    }
}());