let clearBtn = document.querySelector('.clear');
let delBtn = document.querySelector('.del')
let displayTop = document.querySelector('.display-top');
let displayMain = document.querySelector('.display-main');
let numberBtn = document.querySelectorAll('[data-number]');
let operatorBtn = document.querySelectorAll('[data-operator]');
let decimalBtn = document.querySelector('.decimal');
let resultBtn = document.querySelector('.equal');
let mustResetScreen = false;
let storedOperation = null;
let firstOperand = "";
let secondOperand = "";

clearBtn.onclick = clear;
delBtn.onclick = del;
resultBtn.onclick = result;
numberBtn.forEach((button) => button.addEventListener('click', () => inputNum(button.textContent)));
operatorBtn.forEach((button) => button.addEventListener('click', () => setOperation(button.textContent)));

function  resetScreen() {
displayMain.textContent = "";    
mustResetScreen = false;    

}

function setOperation(operator) {
if (storedOperation !== null) result();
firstOperand = displayMain.textContent;
storedOperation = operator;
displayTop.textContent = `${firstOperand} ${storedOperation}`;
mustResetScreen = true; 
    
}

function result() {
if (storedOperation === null || mustResetScreen) return;
secondOperand = displayMain.textContent;
displayMain.textContent = operate(storedOperation,firstOperand,secondOperand);
displayTop.textContent = `${firstOperand} ${storedOperation} ${secondOperand} =`;
storedOperation = null;
}
    
function operate(operator,a,b){
a =  parseInt(a);
b =  parseInt(b);  
    switch(operator) {
    case '+':
    return plus(a,b); 
    case '-':
    return minus(a,b);
    case '×':
    return multiply(a,b);
    case '÷':
    return divide(a,b);        
    default: return null
    }
   
}

function clear() {   
displayTop.textContent = "";
displayMain.textContent = 0;
firstOperand = "";
secondOperand = "";
storedOperation = null;    
}

function del() {
displayMain.textContent = displayMain.textContent.toString().slice(0, -1)
}

function inputNum(num) {
if(displayMain.textContent == 0 || mustResetScreen === true) resetScreen();   
displayMain.textContent += num;    
}

function plus(a,b) {
return a + b;    
}

function minus(a,b) {
return a - b;    
}

function multiply(a,b) {
return a * b;    
}

function divide(a,b) {
return a / b;    
}

