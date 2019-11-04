/**************
 * This script handles user input through the keyboard and on-screen buttons
 */

function handleInput(input) {
	if (!isNaN(input)) {
		if (Calculator.getOperator() == '') {
			if (Calculator.getLeftOperand() == null) {
				Calculator.setLeftOperand(input);
			} else {
				Calculator.setLeftOperand(Calculator.getLeftOperand().toString() +  	input);
			}
		} else {
			if (Calculator.getRightOperand() == null) {
				Calculator.setRightOperand(input);
			} else {
				Calculator.setRightOperand(Calculator.getRightOperand().toString()
				+ input);
			}
		}
	} else if (isOperator(input)) {
		if (Calculator.getRightOperand() != null) {
			evaluate();
			Calculator.setOperator(input);
		} else if (Calculator.getLeftOperand() != null) {
			console.log("setting operator");
			Calculator.setOperator(input);
		} else {
			console.log("doing nothing");
		}
	} else if (input == "=") {
		if (Calculator.getLeftOperand() != null &&
			 Calculator.getLeftOperand() != null &&
			 Calculator.getOperator() != '') {
				evaluate();
		} else {
			return;
		}
	} else if (input == "clear") {
		Calculator.setLeftOperand(null);
		Calculator.setRightOperand(null);
		Calculator.setOperator('');
	}

	function evaluate() {
		Calculator.setLeftOperand(CalculatorOperations.operate(
			[Calculator.getLeftOperand(), 
			 Calculator.getRightOperand()], 
			 Calculator.getOperator()));

		Calculator.setRightOperand(null);
		Calculator.setOperator('');
	}

	console.log(`Left operand: ${Calculator.getLeftOperand()}\nRight operand: ${Calculator.getRightOperand()}\nOperator: ${Calculator.getOperator()}`);
}

function isOperator(input) {
	if (input == "+" ||
		 input == "-" ||
		 input == "*" ||
		 input == "/" ||
		 input == "**") {
			 return true;
		 } else {
			 return false;
		 }
}

let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		let input = button.children[0].innerHTML;
		input = (input == "x") ? "*" :
				  (input == "÷") ? "/" : 
				   input;
		handleInput(input);
	});
});

document.addEventListener('keypress', (event) => {
	console.log(event.key);
	if (event.key == "c") {
		handleInput("clear");
	} else if (event.key == "/") {
		event.preventDefault();
		handleInput("/");
	} else if (event.key == "Enter" || event.key == "=") {
		handleInput("=");
	} else if (!isNaN(event.key) || isOperator(event.key)) {
		handleInput(event.key);
	}
});