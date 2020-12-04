/*Javascript Calculator code

The functions it consist works together to self-build a on-screen calculator.

Written by: Beaver Bryan Antipolo
Start Date: Dec 02 2020
Last Modification Date: Dec 02 2020

*/

/* 

Pseudocode (xxx) -- Difficulty and complexity by number of tabs
(x)Declare multiple variables to be used: firstVal, secondVal, total, and op.
(x)Declare an empty array that'll be reference as a print display for calculator screen.
()Create a simple getDigits and getOp function. Make sure it returns the total input.
()Enable the functionality of the "all clear" and "plus-add" button.
    ()

*/
'use strict';
/* global variables*/
let arithmeticExpression = [];
//let arExp = {};
let total = 0;
let firstVal = '';
let secondVal = '';
let op = '';

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
const opArray = Array.from(document.querySelectorAll(".operators"));
const digitNodeList = [...document.querySelectorAll(".digits")];

/*
//functions inside the calculator function
function calculator() {
    let op = '';
    digitInput();
    getOp(op);
    resetAllVar();
    calcInput.textContent = customEval(op);
    calcDisplay.textContent = printDisplay();
}

function printDisplay(){
    return arithmeticExpression.map((v,i,arr)=>{
        return arr[i];
    }).join(" ");
}
function customEval(op) {
    equal.onclick = () => {

        arithmeticExpression.push(ope);
        return parseInt(firstVal) + op + parseInt(secondVal);
    }
}

function simpleExpression(){
    if (firstVal !== undefined){
        arithmeticExpression.push(firstVal);
    }
    if (secondVal !== undefined)

    arithmeticExpression.push(ope);
    arithmeticExpression.push(secondVal);
}
function resetAllVar() {
    allClear.onclick = () => {
        // calcInput.textContent = '';
        // calcDisplay.textContent = '';
        // firstVal = '';
        arithmeticExpression = [];
    }
}
*/
//It reads the input of the button text content when it is being clicked 
function getDigits() {
    digitNodeList.forEach(btn => btn.addEventListener("click", () => {
        let tempVal="";
        if(firstVal == "" && op == ""){
            firstVal += btn.textContent;
            tempVal = firstVal;
        }else{
            secondVal += btn.textContent;
            tempVal = secondVal;
        }
        arithmeticExpression.push(tempVal);
        calcDisplay.textContent += btn.textContent;
    }));
    //arithmeticExpression.push(firstVal);
}
function resetAllVar() {
    allClear.onclick = () => {
        calcInput.textContent = '';
        calcDisplay.textContent = '';
        firstVal = '';
        arithmeticExpression = [];
    }
}
const getOp = () => {
    opArray.forEach(btn => btn.addEventListener("click", () => {
        op = btn.value;
        calcDisplay.textContent += op;
        arithmeticExpression.push(op);
    }));
}
function customEval() {
    let arr = arithmeticExpression.map((v) => {
        return !isNaN(v) ? parseInt(v) : v;
    });
    equal.onclick = () => {
        return arr.reduce()
    }
}
getDigits();
getOp();
resetAllVar();
total = customEval(op);
calcInput.textContent = total;
//calculator();
