/*Javascript Calculator code

The functions it consist works together to self-build a on-screen calculator.

Written by: Beaver Bryan Antipolo
Start Date: Dec 02 2020
Last Modification Date: Dec 02 2020*/

'use strict';
/* global variables*/
let total = 0;
let firstVal = "";
let secondVal = "";

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
const ope = Array.from(document.querySelectorAll(".operators"));
const digitNodeList = [...document.querySelectorAll(".digits")];

//functions inside the calculator function
function calculator() {
    digitInput();
    //operator(firstVal, secondVal);
    resetAllVar();
}
/*const operator = (a,b) =>  {
    ope.forEach(op => btn.addEventListener("click", ()))
}*/

/*probably not needed -- will fix later
const whichOp = (a,b,op) {
    return `${a} ${op} ${b}`;
}*/
total = equal.onclick = () => {
    return operator = (firstVal, secondVal);
}

//It reads the input of the button text content when it is being clicked 
function digitInput() {
    digitNodeList.forEach(btn => btn.addEventListener("click", () => {
        firstVal = btn.textContent;
        return calcInput.textContent += firstVal;
    }));
}
function resetAllVar() {
    aC.onclick = () => {
        calcInput.textContent = '';
        calcDisplay.textContent = '';
        firstVal = '';
    }
}




calculator();
