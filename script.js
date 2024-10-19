const display = document.getElementById("display");

function appendToDisplay(value) {
    if (value === 'Back') {
        backspace(); 
    } else {
        display.value += value; 
    }
}

function clearDisplay() {
    display.value = ''; 
}

function calculateResult() {
    try {
        display.value = eval(display.value); 
    } catch {
        display.value = 'Error'; 
        setTimeout(clearDisplay, 1500); 
    }
}

function backspace() {
    display.value = display.value.slice(0, -1); 
}
