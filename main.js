// variables
let result = 0; // first half
let sResult = 0; // second half
var res = 0; // result of an equation
let WSign; // sign used in an equatuin
var isSh = false; // is second half boolean
var needNum = false; // if got a result of previous equation reset numbers
var zero = false; // does contain zero at start
var resultReady = false; // did the person already get a result of previous equation

var equation = document.querySelector('#equation'); // the equation holder 
var FHResult = document.querySelector('#result-number'); // first half of equation holder
    
// adds number to an equation
function addNum(num) {
    
    let text = num.toString();
    console.log(text);

    if (zero == false) { // checks if the only symbol in equation holder is '0' and replaces it with a new number
        equation.innerHTML = equation.innerHTML.toString().replace(0, '');
        zero = true;
    }

    if (resultReady == true) { // checks if did the person already get a result of previous equation
        equation.innerHTML = text;
        FHResult.innerHTML = " ";
        resultReady = false;
    } else {
        equation.innerHTML += text;
    }

    if (isSh == false) { // checks what part of the equation to update
            result += text;
            console.log(result);
    } else {
        if (needNum == false) { // checks if equation does contain zero at start
            equation.innerHTML = " ";
            needNum = true;
            equation.innerHTML += text;
        }
        sResult += text;
    }
}

// adds sign to an equation
function addSign(sign) {
    if (resultReady == true) {
        FHResult.innerHTML = " "
        result = res;
        equation.innerHTML = equation.innerHTML + " " + sign;
        FHResult.innerHTML = equation.innerHTML;
        WSign = sign;
        isSh = true;
        resultReady = false;
    } else {
        if (isSh == false) {
            equation.innerHTML = equation.innerHTML + " " + sign;
            FHResult.innerHTML = equation.innerHTML;
            WSign = sign;
            isSh = true;
        }
    }
    
}

// displays result in the 'result window'
function resultdisplay() {
    console.log(Number(result) + WSign + Number(sResult));

    FHResult.innerHTML += equation.innerHTML;
    if (WSign == '−') { // substraction
        res = substractNumber(Number(result), Number(sResult));
        console.log("substraction: "+ res.toString() );
    }
    if (WSign == '+') { // addition
        res = addNumber(Number(result), Number(sResult));
        console.log("addition: "+ res.toString() );
    }
    if (WSign == '×') { // multiplication
        res = multiplyNumber(Number(result), Number(sResult));
        console.log("multiplication: "+ res.toString() );
    }
    if (WSign == '÷') { // division
        res = divideNumber(Number(result), Number(sResult));
        console.log("divsion: "+ res.toString() );
    }

    if (res.toString().includes('.') == true) {
        res = res.toString().replace('.', ',');
    }

    // resets everything to deafult settings
    equation.innerHTML = res;
    resultReady = true;
    reset();
}

// removes sign form an equation
function remove(hmRemove) {
    if (hmRemove == true) { // removes whole equation
        reset();
        resultReady = false;
        zero = false;
        equation.innerHTML = "0";
        FHResult.innerHTML = " ";
    }
    if (hmRemove == false) { // removes only the last character
        if (zero == true) {
            if (isSh == false) {
                result = (result.toString()).slice(0, -1);
                equation.innerHTML = ((equation.innerHTML).toString()).slice(0, -1);
                console.log(result);
            } else {
                sResult = ((sResult.toString()).slice(0, -1));
                equation.innerHTML = ((equation.innerHTML).toString()).slice(0, -1);
                console.log(FHResult.innerHTML);
            }
        }
        if (equation.innerHTML.toString() == '') {
            equation.innerHTML = 0;
            console.log('show 0');
        }
    }
}

// chnages the sign before equation | positive or negative
function changeNegavity() {
    if ((equation.innerHTML.toString()).includes('-') == true) {
        if (isSh == false) { result = result * -1; console.log(result); }
        else { sResult = sResult * -1; console.log(sResult); }
        equation.innerHTML = (equation.innerHTML).slice(1, (equation.innerHTML).length);
    } else {
        if (isSh == false) { result = -result; console.log(result); }
        else { sResult = -sResult; console.log(sResult); }
        equation.innerHTML = '-' + equation.innerHTML;
    }
}

// adds comma in an equation
function addComma() {
    equation.innerHTML = equation.innerHTML + ',';
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
const multiplyNumber = (num1,num2) => num1 * num2;
const divideNumber = (num1, num2) => num1 / num2;