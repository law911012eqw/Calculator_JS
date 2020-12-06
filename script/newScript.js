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
/*It's functionality is to ranked the order of each operators in terms of precedence. 
    The highest ranked will be the first set of simple arithmetic expression to return its result.*/
function supersedeOperators(){

}
//compare operator then calculate the final total
function findOperator() {
    let str = calcDisplay.textContent.split(" ");
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
function listOfOperators(){
    let arr = ["%","*","/","+","-"];
    return arr.forEach(el => el);
}
//display clicked digit inputs
digitNodeList.forEach(btn => btn.addEventListener("click", () => {
    calcDisplay.textContent += btn.textContent;
}))
//display clicked digit inputs
opArray.forEach(btn => btn.addEventListener("click", () => {
    //adds a whitespace in-between the operator used as a split character for later
    if (calcDisplay.textContent !== "" || calcDisplay.textContent.charAt(calcDisplay.textContent.length - 1) == ` `){
        calcDisplay.textContent += ` ${btn.value} `;
    }
}))
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
//total input
equal.onclick = () => findOperator();
