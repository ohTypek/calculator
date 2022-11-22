let running_total = 0;
let buffer = '0';
let previousOperator;

const screen = document.querySelector('#equation');
const result_holder = document.querySelector('#result-number');

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screen.innerText = buffer;
}

function handleSymbol(symbol) {
  switch (symbol) {
    case 'C':
      buffer = '0';
      running_total = 0;
      result_holder.innerText = null;
      break;
    case '=':
      if (previousOperator === null) {
        return
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = running_total;
      if (buffer.toString().includes('(')) {
        buffer = buffer.toString().replace('(', '');
      }
      running_total = 0;
      break;
    case 'R':
      if (buffer.length === 1) {
        buffer = '0';
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case '%':
      buffer /= 100;
      break;
    case ',':
      console.log('comma');
      break;
    case '+':
    case '−':
    case '×':
    case '÷':
      console.log('sign:', symbol);
      handleMath(symbol);
      break;
    case '±':
      buffer *= -1;
      break;
  }

}

function handleMath(symbol) {
  if (buffer == '0') {
    return
  }

  const intBuffer = parseInt(buffer);

  if (running_total === 0) {
    running_total = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  previousOperator = symbol;
  result_holder.innerText = running_total + ' ' + previousOperator;
  buffer = '0';
}

function flushOperation(intBuffer) {
  if (previousOperator === '+') {
    running_total += intBuffer;
  } else if (previousOperator === '−') {
    running_total -= intBuffer;
  } else if (previousOperator === '×') {
    running_total *= intBuffer;
  } else if (previousOperator === '÷') {
    running_total /= intBuffer;
  }
  result_holder.innerText += ' ' + intBuffer;
}

function handleNumber(numberString) {
  if (buffer === '0') {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

function init() {
  document.querySelectorAll('.main-css').forEach(btn => btn.addEventListener('click', (event) => {
    console.log('click', btn.getAttribute('data-value'));
    event.preventDefault();
    buttonClick(event.target.innerText);
  }));
}

init();