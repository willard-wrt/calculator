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
decimalBtn.onclick = decimal;


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
a =  parseFloat(a);
b =  parseFloat(b);  
    switch(operator) {
    case '+':
    return round(plus(a,b)); 
    case '-':
    return round(minus(a,b));
    case '×':
    return round(multiply(a,b));
    case '÷':
    if(b == 0) {    
    mustResetScreen = true; 
    return "cant divide by 0";   
    } else return round(divide(a,b));         
    default: return null
    }
   
}

function round(num){
return Math.round(num * 1000) / 1000;   
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

function decimal() {
if (displayMain.textContent.indexOf(".") == -1) {    
displayMain.textContent += "."; }
else return;
}


function inputNum(num) {
if(displayMain.textContent === "0" || mustResetScreen === true) resetScreen();   
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

