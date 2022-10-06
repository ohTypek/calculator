// variables
let result = 0; // first half
let sResult = 0; // second half
var res = 0; // result of an equation
let sign; // sign used in an equatuin
var isSh = false; // is second half boolean
var needNum = false; // if got a result of previous equation reset numbers
var zero = false; // does contain zero at start
var resultReady = false; // did the person already get a result of previous equation

var equation = document.querySelector('#equation'); // the equation holder 
var FHResult = document.querySelector('#result-number'); // first half of equation holder
    

const newAddNum = (num) => {

    let text = num.toString();
    console(text)

    if (zero) { return; }
    if (!resultReady) { equation.innerHTML += text; return; }
    if (isSh) { if (!needNum) { equation.innerHTML = " "; needNum = true; equation.innerHTML += text } sResult += text; return; }

    equation.innerHTML = equation.innerHTML.toString().replace(0, '');
    zero = true;
    equation.innerHTML = text;
    FHResult.innerHTML = " ";
    resultReady = false;
    result += text;
    console.log(result);

}

// adds sign to an equation
function addSign(NSign) {
    if (resultReady == true) {
        if (res.toString().includes(',') == true)
            res = res.toString().replace(',', '.');
        
        FHResult.innerHTML = " "
        result = res;
        equation.innerHTML = equation.innerHTML + " " + NSign;
        FHResult.innerHTML = equation.innerHTML;
        sign = NSign;
        isSh = true;
        resultReady = false;
    }
    if (isSh == false) {
        equation.innerHTML = equation.innerHTML + " " + NSign;
        FHResult.innerHTML = equation.innerHTML;
        sign = NSign;
        isSh = true;
    }    
}

// displays the result in 'result window'
function resultdisplay() {

    console.log(Math.floor(result) + sign + Math.floor(sResult));
	FHResult.innerHTML += equation.innerHTML;

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
