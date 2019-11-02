var CalculatorOperations = (function () {
    /******** private functions *********/
    function add(n1, n2) {
        return n1 + n2;
    }
    
    function subtract(n1, n2) {
        return n1 - n2;
    }
    
    function multiply(n1, n2) {
        return n1 * n2;
    }
    
    function divide(n1, n2) {
        return n1 / n2;
    }

    function validNumber(num) {
        return !isNaN(num);
    }


    /******** public functions *********/
    function operate(operands, operator) {
        if (!validNumber(operands[0]) || !validNumber(operands[1])) {
            console.log(`operate::\nOperand 1: ${operands[0]}\nOperand 2: ${operands[1]}`);
            return "Error: invalid number";
        }

        switch (operator) {
            case "+":
                return add(operands[0], operands[1]);
            case "-":
                return subtract(operands[0], operands[1]);
            case "*":
                return multiply(operands[0], operands[1]);
            case "/":
                return divide(operands[0], operands[1]);
            default:
                return "Error: invalid operator";
        }
    }

    return {
        operate: operate
    }

}());

/* Tests
console.log(CalculatorOperations.operate([2, 7], "+"));
console.log(CalculatorOperations.operate([2, 7], "-"));
console.log(CalculatorOperations.operate([2, 7], "*"));
console.log(CalculatorOperations.operate([2, 7], "/"));
*/