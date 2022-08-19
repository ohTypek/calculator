let result = 0;
let sResult = 0;
var res = 0;
let WSign;
var isFh = false;
var needNum = false;
var zero = false;
var resultReady = false;


function addNumber(num) {
    var equation = document.querySelector('#equation');
    var FHResult = document.querySelector('#result-number');
    let text = num.toString();
    console.log(text + ' działa');

    if (zero == false) {
        equation.innerHTML = equation.innerHTML.toString().replace(0, '');
        zero = true;
    }

    if (resultReady == true) {
        equation.innerHTML = text;
        FHResult.innerHTML = " ";
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

    if (resultReady == true) {
        FHResult.innerHTML = " "
        result = res;
        equation.innerHTML = equation.innerHTML + " " + sign;
        FHResult.innerHTML = equation.innerHTML;
        WSign = sign;
        isFh = true;
        resultReady = false;
    } else {
        if (isFh == false) {
            equation.innerHTML = equation.innerHTML + " " + sign;
            FHResult.innerHTML = equation.innerHTML;
            WSign = sign;
            isFh = true;
        }
    }
    
}
function resultdisplay() {
    console.log(Math.floor(result) + WSign + Math.floor(sResult));

    var FHResult = document.querySelector('#result-number');
    var equation = document.querySelector('#equation');

    FHResult.innerHTML += equation.innerHTML;
    if (WSign == '−') {
        res = Math.floor(result) - Math.floor(sResult)
        console.log('substraction ' + (Math.floor(result) - Math.floor(sResult)).toString());
    }
    if (WSign == '+') {
        res = Math.floor(result) + Math.floor(sResult)
        console.log('addition ' + (Math.floor(result) + Math.floor(sResult)).toString())
    }
    if (WSign == '×') {
        res = Math.floor(result) * Math.floor(sResult)
        console.log('multiplication ' + (Math.floor(result) * Math.floor(sResult)).toString())
    }
    if (WSign == '÷') {
        res = Math.floor(result) / Math.floor(sResult)
        console.log('divide ' + (Math.floor(result) / Math.floor(sResult)).toString())
    }

    if(res.toString().includes('.') == true) {
        res = res.toString().replace('.', ',');
    }
    equation.innerHTML = res;
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
        zero = false;
        equation.innerHTML = "0"
        FHResult.innerHTML = " "
    }
    if (hmRemove == false) {

        if (zero) {
            if (isFh == false) {
                result = (result.toString()).slice(0, -1);
                equation.innerHTML = ((equation.innerHTML).toString()).slice(0, -1);
                console.log(result);
            } else {
                sResult = ((sResult.toString()).slice(0, -1));
                equation.innerHTML = ((equation.innerHTML).toString()).slice(0, -1);
                console.log(FHResult);
            }
        }
        if (equation.innerHTML.toString() == '') {
            equation.innerHTML = 0;
            console.log('show 0');
        }
    }
}
function changeNegavity() {
    var equation = document.querySelector('#equation');

    if ((equation.innerHTML.toString()).includes('-') == true) {
        if (isFh == false) { result = result * -1; console.log(result); }
        else { sResult = sResult * -1; console.log(sResult); }
        equation.innerHTML = (equation.innerHTML).slice(1, (equation.innerHTML).length);
    } else {
        if (isFh == false) { result = -result; console.log(result); }
        else { sResult = -sResult; console.log(sResult); }
        equation.innerHTML = '-' + equation.innerHTML;
    }
    
}
function addComma() {
    var equation = document.querySelector('#equation');

    equation.innerHTML = equation.innerHTML + ',';
    if (isFh == false) {
        result = result + ',';
        console.log(result);
    } else {
        sResult += ',';
        console.log(sResult);
    } 
}
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}