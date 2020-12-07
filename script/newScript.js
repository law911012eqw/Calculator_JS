/*Javascript Calculator code

It is a group of processes that works together to self-build an on-screen calculator.

Programmed by: Beaver Antipolo
Restart Date: Dec 05 2020 -- Got lost in track have to start from the scratch
Last Modification Date: Dec 05 2020
*/

'use strict';
/*DOM Elements*/
const allClear = document.getElementById('allClear');
const clearChar = document.getElementById('backspace');
const equal = document.getElementById('equal');
const calcDisplay = document.getElementById('calc_display');
const calcInput = document.getElementById('calc_input');
const opArray = Array.from(document.querySelectorAll(".operators"));
const digitNodeList = [...document.querySelectorAll(".digits")];
const posNegBtn = document.getElementById('plus-add');
const addDecimal = document.getElementById('decimal');
const factorial = document.getElementById('factorial');

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
function supersedeOperators(v) {
    if (v == "/") {
        return "%";
    }
}
//compare operator then calculate the final total
function evaluate() {
    let arr = calcDisplay.textContent.split(" "); //splitting the characters of the aritmetic expression with the whitespace
    console.log(arr); //for debug
    //let totalOp = countOperators(arr);
    //console.log(totalOp);
    return arr.reduce((p, v, i, arr) => {
        if (v == "/" || v == "*" || v == "+" || v == "-") {
            let op = v;
            return calcInput.textContent = calculate(op, p, arr[i + 1]);
        }
        else if(this.length < 2){
            return calcInput.textContent = v; //return the current value 
        }
    })
}
//counts the total operator in the array 
function countOperators(arr) {
    let howMuchOp = 0;
    arr.forEach(v => {
        if (v == "/" || v == "*" || v == "+" || v == "-") {
            howMuchOp++;
        }
    });
    return howMuchOp;
}
function listOfOperators() {
    let arr = ["%", "*", "/", "+", "-"];
    return arr.forEach(el => el);
}
//display clicked digit input
digitNodeList.forEach(btn => btn.addEventListener("click", () => {
    calcDisplay.textContent += btn.textContent;
}));
//display clicked operator input
opArray.forEach(btn => btn.addEventListener("click", () => {
    //adds a whitespace in-between the operator used as a split character for later
    if (calcDisplay.textContent !== "" || calcDisplay.textContent.charAt(calcDisplay.textContent.length - 1) == ` `) {
        calcDisplay.textContent += ` ${btn.value} `;
    }
}));
//switch to positive or negative number
posNegBtn.onclick = () => {
    let arr = calcDisplay.textContent.split(/(\s)/); //convert array without removing the split delimiter with regex
    let str = arr[arr.length-1]; //store the last array value to a vars
    if (!(str > 0)){
        arr[arr.length-1] = Math.abs(+str);
    }
    else{
        arr[arr.length-1] = -Math.abs(+str);
    }
    return calcDisplay.textContent = arr.join(""); //return with altered last value of display
}

addDecimal.onclick = () => {
    calcDisplay.textContent += ".";
};
factorial.onclick = () => {
	let factorialArray = [];
	let newNum = calcInput.textContent; 
	while(newNum!==0 && newNum!==""){
		factorialArray.push(+newNum);
		newNum--;
	}
	if(calcInput.textContent !== 0){
        calcInput.textContent += '!';
		return factorialVal = factorialArray.reduce((ini,nn) => ini * nn);
	}
	else{return 1;}
}
//clear everything
allClear.onclick = () => {
    calcInput.textContent = '';
    calcDisplay.textContent = '';
}
//remove last character on display text
clearChar.onclick = () => {
    calcDisplay.textContent.charAt(calcDisplay.textContent.length - 1) == " "
        ? calcDisplay.textContent = calcDisplay.textContent.substring(0, calcDisplay.textContent.length - 2) //if equals to a whitespace remove the preceding char aswell
        : calcDisplay.textContent = calcDisplay.textContent.substring(0, calcDisplay.textContent.length - 1); //remove last character of the display text
}
//finalize result
equal.onclick = () => evaluate();
