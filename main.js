let result = 0;
let sResult = 0;
let WSign;
var isFh = false;
var needNum = false;
var resultReady = false;


function addNumber(num) {
    var equation = document.querySelector('#equation');
    var FHResult = document.querySelector('#result-number');
    let text = num.toString();

    if (resultReady == true) {
        equation.innerHTML = text;
        FHResult.innerHTML = " "
        resultReady = false;
    } else {
        equation.innerHTML += text;
    }

    if (isFh == false) {
        result += text;
        console.log(result);
    } else {
        if (needNum == false) {
            equation.innerHTML = " ";
            needNum = true;
            equation.innerHTML += text;
        }
        sResult += text;
    }
}
function addSign(sign) {
    var equation = document.querySelector('#equation');
    var FHResult = document.querySelector('#result-number');

    if (isFh == false) {
        equation.innerHTML = equation.innerHTML + " " + sign;
        FHResult.innerHTML = equation.innerHTML;
        WSign = sign;
        isFh = true;
    }
    
}
function resultdisplay() {
    console.log(Math.floor(result) + WSign + Math.floor(sResult));

    var FHResult = document.querySelector('#result-number');
    var equation = document.querySelector('#equation');

    FHResult.innerHTML += equation.innerHTML;
    if (WSign == '-') {
        equation.innerHTML = Math.floor(result) - Math.floor(sResult)
        console.log('substraction ' + (Math.floor(result) - Math.floor(sResult)).toString());
    }
    if (WSign == '+') {
        equation.innerHTML = Math.floor(result) + Math.floor(sResult)
        console.log('addition ' + (Math.floor(result) + Math.floor(sResult)).toString())
    }
    if (WSign == 'x') {
        equation.innerHTML = Math.floor(result) * Math.floor(sResult)
        console.log('multiplication ' + (Math.floor(result) * Math.floor(sResult)).toString())
    }
    if (WSign == '/') {
        equation.innerHTML = Math.floor(result) / Math.floor(sResult)
        console.log('divide ' + (Math.floor(result) / Math.floor(sResult)).toString())
    }
    resultReady = true;
    result = 0;
    sResult = 0;
    isFh = false;
    needNum = false;
}
function remove(hmRemove) {
    var equation = document.querySelector('#equation');
    var FHResult = document.querySelector('#result-number');

    if (hmRemove == true) {
        resultReady = false;
        result = 0;
        sResult = 0;
        isFh = false;
        needNum = false;
        equation.innerHTML = " "
        FHResult.innerHTML = " "
    }
    if (hmRemove == false) {
        
    }
}