var Calculator = (function() {
    let displayValue = "";
    let resultElement = document.getElementById("result");

    function updateDisplay() {
        resultElement.innerHTML = displayValue;
    }

    function init() {
        digitButtons = document.querySelectorAll(".digit");
        
        digitButtons.forEach(button => {
            
            console.log("adding event listener");

            button.addEventListener('click', () => {
                displayValue += `${button.children[0].innerHTML}`;
                updateDisplay();
                console.log("button pressed");
            });
        });
    }

    return {
        init: init
    }
}());