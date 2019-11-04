/********
 * Defines the state of a simple calculator. Does not perform the arithmatic.
 * 
 * Getters return operands as type number, and operator as type string.
 * 
 * Setters will accepts operands as type number or string but only string for
 * the operator.
 */

var Calculator = (function() {
/******** private funcitons and properties *********/
    let leftOperand = 0;
    let rightOperand = 0;
    let operator = '';

    // this function allows flexibility in the use of this "class". User can
    //  send values as string or number without having to worry about it
    function validateNumber(num) {
        if (typeof num == "number") {
            return num;
        } else if (typeof num == "string") {
            return Number(num);
        } else {
            return 0;
        }
    }


/******** public funcitons and properties *********/
    // getters
    function getLeftOperand() { return leftOperand; }
    function getRightOperand() { return rightOperand; }
    function getOperator() { return this.operator; }

    // setters
    function setLeftOperand(num) { leftOperand = validateNumber(num); }
    function setRightOperand(num) { rightOperand = validateNumber(num); }
    function setOperator(operator) {
        if (operator == "+" ||
            operator == "-" ||
            operator == "*" ||
            operator == "/" ||
            operator == "**") {

            this.operator = operator;

        } else {
            operator = '';
        } 
    }
    
    function clearVars() {
        leftOperator, rightOperator = 0;
        operator = '';
    }

    return {
        getLeftOperand: getLeftOperand,
        getRightOperand: getRightOperand,
        getOperator: getOperator,

        setLeftOperand: setLeftOperand,
        setRightOperand: setRightOperand,
        setOperator: setOperator,

        clearVars: clearVars
    }
}());