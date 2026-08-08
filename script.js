const display = document.getElementById("display");


// Add numbers and operators to display
function appendValue(value) {
    display.value += value;
}


// Clear everything
function clearDisplay() {
    display.value = "";
}


// Calculate answer
function calculate() {

    try {

        if (display.value === "") {
            display.value = "";
            return;
        }

        display.value = eval(display.value);

    } 
    catch (error) {

        display.value = "Error";

    }

}


// Keyboard support
document.addEventListener("keydown", function(event){

    const key = event.key;


    if(
        key >= "0" && 
        key <= "9" || 
        key === "." ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/"
    ){

        appendValue(key);

    }


    else if(key === "Enter"){

        calculate();

    }


    else if(key === "Escape"){

        clearDisplay();

    }


    else if(key === "Backspace"){

        display.value = display.value.slice(0,-1);

    }

});
