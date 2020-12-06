/*Javascript Calculator code

The functions it consist works together to self-build a on-screen calculator.

Written by: Beaver Bryan Antipolo
Start Date: Dec 02 2020
Last Modification Date: Dec 04 2020

*/

'use strict';
let arithmeticArray = [];

/*DOM Elements*/
const allClear = document.getElementById('allClear');
const clearChar = document.getElementById('clearEntry');
const equal = document.getElementById('equal');
const calcDisplay = document.getElementById('calc_display');
const calcInput = document.getElementById('calc_input');
const opArray = Array.from(document.querySelectorAll(".operators"));
const digitNodeList = [...document.querySelectorAll(".digits")];

//let arithmeticArray = calcDisplay.textContent.split(""); 
//simple functions

  function calculate(op, a, b) {
    let arithmeticObj = {
        "*": a * b,
        "/": a / b,
        "+": a + b,
        "-": a - b
    };
    return arithmeticObj[op];
}
function calculator() {
    let arr = [];
    let n = ''; //num input
    let op = '';
    getDigits(n,arithmeticArray);
    getOp(n,op,arithmeticArray);
    resetAllVar(n,op,arithmeticArray);
    equal.onclick = () => {
        calculate(op, a, b);
    }
    someOperator(arithmeticArray);
    console.table(arithmeticArray);
    console.log(n);
}
//It reads the input of the button text content when it is being clicked 
function getDigits(n,arr) {
    let arrLastEl = arr[arr.length - 1];
    n = '';
    digitNodeList.forEach(btn => btn.addEventListener("click", () => {
        n += btn.textContent;
        calcInput.textContent += n;
        if (isNaN(parseInt(arrLastEl))) {
            arr.shift(arrLastEl)
        }function calculate(op, a, b) {
            let arithmeticObj = {
                "*": a * b,
                "/": a / b,
                "+": a + b,
                "-": a - b
            };
            return arithmeticObj[op];
        }
    }));
}

//get the operator
const getOp = (op,n,arr) => {
    opArray.forEach(btn => btn.addEventListener("click", () => {
        //if the last value of the array is an operator therefore the function is skipped
        calcInput.textContent = '';
        op = btn.value;
        arr.push(op);
        printDisplay(arr);
        return n = '';
    }));
}

//it empties all variables  
function resetAllVar(n,op) {
    allClear.onclick = () => {
        calcInput.textContent = '';
        calcDisplay.textContent = '';
        op = '';
        n = '';
        return arr = [];
    }
}

function printDisplay(arr) {
    return calcDisplay.textContent = arr.join("");
}
function customEval(op, a, b, arr) {
    let newArr = arr.reduce((a, v, i, arr) => {
        return i == 0 || i % 2 != 0 ? parseInt(v) : v;
    });
    equal.onclick = () => {
        calcInput = whichArithmetic(op, a, b);
    }
}
//object of operators -- use to compare to a value and returns the followring arithmetic expressions
function whichArithmetic(op, a, b) {
    let arithmeticObj = {
        "*": a * b,
        "/": a / b,
        "+": a + b,
        "-": a - b
    };
    return arithmeticObj[op];
}

calculator();