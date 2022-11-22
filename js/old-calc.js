
// variables
let result = 0; // first half
let sResult = 0; // second half
var res = 0; // result of an equation
let sign; // sign used in an equatuin
var isSh = false; // is second half boolean
var needNum = false; // if got a result of previous equation reset numbers
var zero = false; // does contain zero at start
var resultReady = false; // did the person already get a result of previous equation

var equation_holder = document.querySelector('#equation'); // the equation holder 
var result_holder = document.querySelector('#result-number'); // first half of equation holder

var BTNnumbers = document.querySelectorAll(".number");
var BTNsign = document.querySelectorAll(".sign");
var BTNspecialsign = document.querySelectorAll(".specialsign");

function addNum(num) {

    let text = num.toString();
    console.log(text);

    if (zero == false) { // checks if the only symbol in equation holder is '0' and replaces it with a new number
        equation_holder.innerHTML = equation_holder.innerHTML.toString().replace(0, '');
        zero = true;
    }

    if (resultReady == true) { // checks if did the person already get a result of previous equation
        equation_holder.innerHTML = text;
        result_holder.innerHTML = " ";
        resultReady = false;
    } else {
        equation_holder.innerHTML += text;
    }

    if (isSh == false) { // checks what part of the equation to update
        result += text;
        console.log(result);
    } else {
        if (needNum == false) { // checks if equation does contain zero at start
            equation_holder.innerHTML = " ";
            needNum = true;
            equation_holder.innerHTML += text;
        }
        sResult += text;
    }
}

// adds sign to an equation
function addSign(NSign) {
    if (resultReady == true) {
        if (res.toString().includes(',') == true)
            res = res.toString().replace(',', '.');
    
        result_holder.innerHTML = " "
        result = res;
        equation_holder.innerHTML = equation_holder.innerHTML + " " + NSign;
        result_holder.innerHTML = equation_holder.innerHTML;
        sign = NSign;
        isSh = true;
        resultReady = false;
    }
    if (isSh == false) {
        equation_holder.innerHTML = equation_holder.innerHTML + " " + NSign;
        result_holder.innerHTML = equation_holder.innerHTML;
        sign = NSign;
        isSh = true;
    }
}

// displays the result in the 'result window'
function resultDisplay() {

    console.log(Math.floor(result) + sign + Math.floor(sResult));
    result_holder.innerHTML += equation_holder.innerHTML;

    const signCheck = {
        '−': substractNumber(Number(result), Number(sResult)),
        '+': addNumber(Number(result), Number(sResult)),
        '×': multiplyNumber(Number(result), Number(sResult)),
        '÷': divideNumber(Number(result), Number(sResult))
    }
    res = signCheck[sign] //checks the sign and counts correct answer
        ?? 'syntax error'

    console.log(res);

    if (res.toString().includes('.') == true) {
        res = Math.round(res * 10000) / 10000;
        res = res.toFixed(4);
        res = res.toString().replace('.', ',');
    }

    equation_holder.innerHTML = res;
    resultReady = true;
    reset();
}

// removes sign form an equation
function remove(hmRemove) {
    if (hmRemove == true) { // removes whole equation
        reset();
        resultReady = false;
        zero = false;
        equation_holder.innerHTML = "0";
        result_holder.innerHTML = " ";
    }
    if (hmRemove == false) { // removes only the last character
        if (zero == true) {
            if (isSh == false) {
                result = (result.toString()).slice(0, -1);
                equation_holder.innerHTML = ((equation_holder.innerHTML).toString()).slice(0, -1);
                console.log(result);
            } else {
                sResult = ((sResult.toString()).slice(0, -1));
                equation_holder.innerHTML = ((equation_holder.innerHTML).toString()).slice(0, -1);
                console.log(result - holder.innerHTML);
            }
        }
        if (equation_holder.innerHTML.toString() == '') {
            equation_holder.innerHTML = 0;
            console.log('show 0');
        }
    }
}

// chnages the sign before equation | positive or negative
function changeNegavity() {
    if ((equation_holder.innerHTML.toString()).includes('-') == true) {
        if (isSh == false) { result = result * -1; console.log(result); }
        else { sResult = sResult * -1; console.log(sResult); }
        equation_holder.innerHTML = (equation_holder.innerHTML).slice(1, (equation_holder.innerHTML).length);
    } else {
        if (isSh == false) { result = -result; console.log(result); }
        else { sResult = -sResult; console.log(sResult); }
        equation_holder.innerHTML = '-' + equation_holder.innerHTML;
    }
}

// adds comma in an equation
function addComma() {
    equation_holder.innerHTML = equation_holder.innerHTML + ',';
    if (isSh == false) {
        result = result + '.';
        console.log(result);
    } else {
        sResult += '.';
        console.log(sResult);
    }
}

// resets everything
function reset() {
    result = 0;
    sResult = 0;
    isSh = false;
    needNum = false;
}

// count functions
const addNumber = (num1, num2) => num1 + num2;
const substractNumber = (num1, num2) => num1 - num2;
const multiplyNumber = (num1, num2) => num1 * num2;
const divideNumber = (num1, num2) => num1 / num2;

BTNnumbers.forEach(number => number.addEventListener('click', () => {
    addNum(number.getAttribute('data-number'))
}));

BTNsign.forEach(sign => sign.addEventListener('click', () => {
    if (sign.getAttribute('data-sign') === '*') { addSign('×'); return; }
    if (sign.getAttribute('data-sign') === '/') { addSign('÷'); return; }
    if (sign.getAttribute('data-sign') === '-') { addSign('−'); return; }
    if (sign.getAttribute('data-sign') === '=') { resultDisplay(); return; }

    addSign(sign.getAttribute('data-sign'));
}));

BTNspecialsign.forEach(splSign => splSign.addEventListener('click', () => {
    if (splSign.getAttribute('data-specialsign') === 'C') { remove(true); return; }
    if (splSign.getAttribute('data-specialsign') === 'R') { remove(false); return; }
    if (splSign.getAttribute('data-specialsign') === ',') { addComma(); return; }
    if (splSign.getAttribute('data-specialsign') === '+/-') { changeNegavity(); return; }

    equation_holder.innerText = 'syntax error';
}));
