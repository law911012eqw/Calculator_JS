/*Javascript Calculator code

Programmed by: Beaver Bryan Antipolo
Restart Date: Dec 05 2020 -- Got lost in track have to start from the scratch
Last Modification Date: Dec 05 2020
*/

'use strict';
/*DOM Elements*/
const allClearBtn = document.getElementById('allClear');
const clearCharBtn = document.getElementById('backspace');
const equalBtn = document.getElementById('equal');
const calcDisplay = document.getElementById('calc_display');
const calcInput = document.getElementById('calc_input');
const opArray = Array.from(document.querySelectorAll(".operators"));
const digitNodeList = [...document.querySelectorAll(".digits")];
const posNegBtn = document.getElementById('plus-add');
const decimalBtn = document.getElementById('decimal');
const factorialBtn = document.getElementById('factorial');
//const allButtons = document.getElementsByTagName(`button[data-key="${e.keyCode}"]`)
//limiters
let display = calcDisplay.textContent;
let allowDecimal = true;
let allowOp = false;

//return the simple arithmetic expressions associated with the operator
function calculate(op, a, b) {
    let arithmeticObj = {
        "*": +a * +b,
        "/": +a / +b,
        "+": +a + +b,
        "-": +a - +b,
    };
    return arithmeticObj[op];
}
/*It's functionality is to ranked the order of each operators in terms of precedence. 
    The highest ranked will be the first set of simple arithmetic expression to return its result.*/
function supersedeOperators(v, ii) {
    if (v == "/" && ii == 0) {
        return "/";
    }
    else if (v == "*" && ii == 1) {
        return "*";
    }
    else if (v == "+" && ii == 2) {
        return "+";
    }
    else if (v == "-" && ii == 3) {
        return "-";
    }
}
function evaluateSimple() {
    let arr = calcDisplay.textContent.split(" ");
    if (arr.length == 3) {
        return calcInput.textContent = calculate(arr[1], arr[0], arr[2]);
    }
}
//compare operator then calculate the final total
function evaluateComplex() {
    let arr = calcDisplay.textContent.split(" "); //splitting the characters of the aritmetic expression with the whitespace
    let total = 0;
    for (let ii = 0; ii <= 3; ii++) { //ii=0 is divide, ii=0 is multiply, ii=0 is add, ii=0 is substraction
        arr.reduce((p, v, i, arr) => {
            if (v == supersedeOperators(v, ii)) {
                let op = v;
                p = arr[i - 1];
                total = calculate(op, p, arr[i + 1]);
                arr[i + 1] = total; //replace the next value as total
                arr[i] = " "; //replace the current value with whitespace 
                arr[i - 1] = " ";//replace the previous value with whitespace 
            }
            else if (arr.length < 2) {
                return calcInput.textContent = v; //return the current value 
            }
        });
        arr = arr.filter(function (str) {// removes all whitespaces value in the array
            return /\S/.test(str);
        });
    }
    return calcInput.textContent = arr[0];
}

//display entered digit
function digits() {
    digitNodeList.forEach(btn => btn.addEventListener("click", () => {
        calcDisplay.textContent += btn.textContent;
        //calcInput.textContent += btn.textContent;
    }));
}


//display entered operator unit
function operators() {
    opArray.forEach(btn => btn.addEventListener("click", () => {
        //adds a whitespace in-between the operator used as a split delimiter for later
        //calcInput.textContent = '';
        evaluateSimple();
        allowDecimal = true;
        if (previousOp() == true) {
            calcDisplay.textContent += ` ${btn.value} `;
        }
    }));
}

//limits the usability of the operator 
function previousOp() {
    return display.textContent.length != 0 || display.textContent.charAt(display.textContent.length - 1).match(/[\+d\D]/) ? true : false;
}

//switch to positive or negative number
function plusAdd() {
    posNegBtn.onclick = () => {
        let arr = calcDisplay.textContent.split(/(\s)/); //convert array without removing the split delimiter with regex
        let str = arr[arr.length - 1]; //store the last array value to a var
        if (!(str > 0)) {
            arr[arr.length - 1] = Math.abs(+str);
        }
        else {
            arr[arr.length - 1] = -Math.abs(+str);
        }
        return calcDisplay.textContent = arr.join(""); //return with altered last value of display
    }
}

//add decimal character
function decimal() {
    if (allowDecimal === true) {
        decimalBtn.onclick = () => {
            calcDisplay.textContent += ".";
            return allowDecimal = false;
        };
    }
}

function factorial() {
    factorialBtn.onclick = () => {
        if (calcInput.textContent !== "") {
            let product = parseInt(calcInput.textContent);
            for (let i = product - 1; i > 1; i--) {
                product *= i;
            }
            calcInput.textContent = product;
        }
    }
}

//clear everything
function allClear() {
    allClearBtn.onclick = () => {
        calcInput.textContent = '';
        calcDisplay.textContent = '';
    }
}

//remove last character on display text
function clearChar() {
    clearCharBtn.onclick = () => {
        calcDisplay.textContent.charAt(calcDisplay.textContent.length - 1) == " "
            ? calcDisplay.textContent = calcDisplay.textContent.substring(0, calcDisplay.textContent.length - 2) //if equals to a whitespace remove the preceding char aswell
            : calcDisplay.textContent = calcDisplay.textContent.substring(0, calcDisplay.textContent.length - 1); //remove last character of the display text
    }
}

//keyboard support
function keyboard(e) {
    const allButtons = document.querySelector(`button[data-key="${e.keyCode}"]`);
    allButtons.onclick = () => calcDisplay.textContent += btn.data - key;
}

document.addEventListener('keydown', function (event) {
    if (event.keyCode == 57) {
        digits();
    }
    else if (event.keyCode == 32) {
        plusAdd();
    }
});

//finalize result
equal.onclick = () => evaluateComplex();
digits();
operators();
plusAdd();
decimal();
factorial();
allClear();
clearChar();

