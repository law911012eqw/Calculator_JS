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
let arithmeticArray = [];

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
const buttonArray = [...document.getElementsByTagName("button")];

//let arithmeticArray = calcDisplay.textContent.split(""); 
function calculator(){
    let n =''; //num input
    let op = '';
    getDigits(n);
    getOp(n,op);
    resetAllVar(n,op);
    someOperator(arithmeticArray);
    console.table(arithmeticArray);
    console.log(n);
}
//It reads the input of the button text content when it is being clicked 
function getDigits(n) {
    let arrLastEl = arithmeticArray[arithmeticArray.length-1];
    n = '';
    digitNodeList.forEach(btn => btn.addEventListener("click", () => {
        n += btn.textContent;
        calcInput.textContent = n;
        if(!isNaN(parseInt(arrLastEl))) 
        {
            arithmeticArray.shift(arrLastEl)
        }
        arithmeticArray.push(n);
        console.log(n);
        printDisplay();
        return n = '';
    }));
}

//get the operator
const getOp = (op,n) => {
    opArray.forEach(btn => btn.addEventListener("click", () => {
        //if the last value of the array is an operator therefore the function is skipped
                op = btn.value;
                arithmeticArray.push(op);
                printDisplay();
                return n ='';
    }));
}

//it empties all variables  
function resetAllVar(n,op) {
    allClear.onclick = () => {
        calcInput.textContent = '';
        calcDisplay.textContent = '';
        op =''; 
        n = '';
        return arithmeticArray = [];     
    }
}

function printDisplay(){
    return calcDisplay.textContent = arithmeticArray.join("");
}
function customEval(op,a,b,arr) {
    let newArr = arr.reduce((a,v,i,arr) => {
        return i == 0 || i % 2 != 0 ? parseInt(v) :  v;
    });
    equal.onclick = () => {
        calcInput = whichArithmetic(op,a,b);
    }
}
function someOperator(arr){
    return arr.some(e => e == "/" || e == "*" || e == "-" || e == "+");
}
//object of operators -- use to compare to a value and returns the followring arithmetic expressions
function whichArithmetic(op,a,b){
        let arithmeticObj = {
          "*": a * b,
          "/": a / b,
          "+": a + b,
          "-": a - b
        };
        return arithmeticObj[op];
}

calculator();