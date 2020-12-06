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

//return the simple arithmetic expressions associated with the operator
function calculate(op, a, b) {
    let arithmeticObj = {
        "*": +a * +b,
        "/": +a / +b,
        "+": +a + +b,
        "-": +a - +b,
        "%": +a % +b
    };
    return arithmeticObj[op];
}
function convertArithmeticIntoArray() {
    
}
//compare operator then calculate the final total
function findOperator(){
    let str = calcDisplay.textContent.split("");
    console.log(str);
    return str.reduce((p, v, i, arr) => {
        if (v == "%" || v == "/" || v == "*" || v == "+" || v == "-") {
            let op = v;
            console.log(op);
            return calcInput.textContent = calculate(op, p, arr[i + 1]);
        }
        // else {
        //     return calcInput.textContent = "ERROR"
        // }
    })
}

//display clicked digit inputs
digitNodeList.forEach(btn => btn.addEventListener("click", () => {
    calcDisplay.textContent += btn.textContent;
}))
//display clicked digit inputs
opArray.forEach(btn => btn.addEventListener("click", () => {
    calcDisplay.textContent += btn.value;
}))
allClear.onclick = () => {
    calcInput.textContent = '';
    calcDisplay.textContent = '';
}
//total input
equal.onclick = () => findOperator();
