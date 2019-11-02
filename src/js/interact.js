var Calculator = (function() {
    let displayValue = "0";
    let resultElement = document.getElementById("result");

    let operatorActive = new Boolean(false);
    let opJustActivated = new Boolean(false);
    let justCalculated = new Boolean(false);
    let activeOperator = '';
    let operands = [0,0];

    /******** private functions *********/
    function updateDisplay(event) {
        resultElement.innerHTML = displayValue;
    }

    function activateOperator(key) {
        if (!operatorActive) {
            activeOperator = key;
            operatorActive = true;
            opJustActivated = true;
            operands[0] = Number(displayValue);
        } else {
            activeOperator = key;
        }
    }

    function deactivateOperator() {
        activeOperator = '';
        operatorActive = false;
    } 

    function calculate() {
        operands[1] = displayValue;
        displayValue = `${CalculatorOperations.operate([Number(operands[0]), Number(operands[1])], activeOperator)}`;
        console.log(`calculated display value: ${displayValue}`);
        justCalculated = true;
    }

    function keyPressed(key) {
        if ((displayValue == "0" || opJustActivated)) {
            opJustActivated = false;
            displayValue = '';
            console.log("clearing 0");
        }


        switch(key) {
            case "0":
                displayValue += key;
                break;
            case "1":
                displayValue += key;
                break;
            case "2":
                displayValue += key;
                break;
            case "3":
                displayValue += key;
                break;
            case "4":
                displayValue += key;
                break;
            case "5":
                displayValue += key;
                break;
            case "6":
                displayValue += key;
                break;
            case "7":
                displayValue += key;
                break;
            case "8":
                displayValue += key;
                break;
            case "9":
                displayValue += key;
                break;
            case ".":
                (displayValue == '') ? displayValue = "0." : displayValue += key;
                break;
            case "+":
                activateOperator(key);
                break;
            case "-":
                activateOperator(key);
                break;
            case "*":
                activateOperator(key);
                break;
            case "/":
                activateOperator(key);
                break;
            case "Enter":
                calculate();
                deactivateOperator();
                break;
            case "c":
                displayValue = 0;
                break;
            case "Backspace":
                if (displayValue.length <= 1) {
                    displayValue = 0;
                    break;
                } else {
                    displayValue = displayValue.slice(0, displayValue.length - 1)
                    break;
                }
            default:
                break;
        }
    }

    function popButton(event) {
        // animate buttons
    }

    function createListeners() {
        digitButtons = document.querySelectorAll(".digit");
    
        digitButtons.forEach(button => {
            button.addEventListener('click', () => {
                keyPressed(`${button.children[0].innerHTML}`)
                updateDisplay(event);
            });
        });
    
        document.addEventListener('keydown', (event) => {
            console.log(`Key pressed: ${event.key}\nCorresponding code: ${event.keyCode}`);
            if (event.key == "Backspace" || event.key == "/") {
                event.preventDefault();
            }
            keyPressed(event.key);
            updateDisplay(event);
        });
    }

    /******** public functions *********/
    function init() {
        createListeners();
    }

    return {
        init: init
    }
}());