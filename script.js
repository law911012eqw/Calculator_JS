/*Javascript Calculator code

The functions it consist works together to self-build a on-screen calculator.

Written by: Beaver Bryan Antipolo
Start Date: Dec 02 2020
Last Modification Date: Dec 02 2020*/

'use strict';
/* global variables*/
let arithmeticExpression = [];
let arExp = {};
let total = 0;
let firstVal = '';
let secondValue = '';

/*DOM Elements*/
const allClear = document.getElementById('allClear');
const clearChar = document.getElementById('clearEntry');
const addition = document.getElementById('add');
const substraction = document.getElementById('minus');
const multiplication = document.getElementById('multiply');
const division = document.getElementById('divide');
const modulus = document.getElementById('remainder');
const equal = document.getElementById('equal');
const calcDisplay = document.getElementById('calc_display');
const calcInput = document.getElementById('calc_input');
const op = Array.from(document.querySelectorAll(".operators"));
const digitNodeList = [...document.querySelectorAll(".digits")];

//functions inside the calculator function
function calculator() {
    let op = '';
    digitInput();
    getOp(op);
    resetAllVar();
    //populateDisplay();
    total = customEval(op);
}
const getOp = (ope) => {
    op.forEach(btn => btn.addEventListener("click", () => {
        ope = btn.textContent;
        calcDisplay.textContent += ope;
        return ope;
    }));
}
// function populateDisplay(){
//     arithmeticExpression.forEach(e => )
// }
function customEval(op) {
    equal.onclick = () => {
        return parseInt(firstVal) + op + parseInt(secondVal);
    }
}
//It reads the input of the button text content when it is being clicked 
function digitInput(op) {
    digitNodeList.forEach(btn => btn.addEventListener("click", () => {
        calcInput.textContent += btn.textContent;
        firstVal += calcInput.textContent;
        calcDisplay.textContent += btn.textContent;
    }));
    if (op !== undefined){
        calcInput.textContent = '';
    }
    arithmeticExpression.push(firstVal);
}
function resetAllVar() {
    allClear.onclick = () => {
        calcInput.textContent = '';
        calcDisplay.textContent = '';
        firstVal = '';
    }
}


calculator();
