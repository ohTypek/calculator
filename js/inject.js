let substract = '−';
let divide = '÷';
let multiply = '×';
let negative = '±';

document.getElementById('content').innerHTML = null;

const signs = [
  'C',
  'R',
  '%',
  '/',
  '7',
  '8',
  '9',
  '*',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '+/-',
  '0',
  ',',
  '='
];

for (const sign of signs) {

  let target = document.querySelector('#content');
  let div = document.createElement('div');

  // adds classes and data attribute
  div.classList.add('main-css');
  div.classList.add('number');
  div.dataset.value = sign;
  
  // filters signs and gives matching data attrinutes | data-specialsign
  if (sign === 'R' || sign === 'C' || sign === '+/-' || sign === ',' || sign === '%' ) {
    div.classList.add('specialsign');
    div.classList.remove('number');
  }

  // filters signs and gives matching data attrinutes | data-sign
  if (sign === '+' || sign === '-' || sign === '*' || sign === '/' || sign === '=') {
    div.classList.add('sign');
    div.classList.remove('number');
  }
  
  // sets the inside of div and puts it in the #content
  switch (sign) {
    case '*':
      div.innerText = ' ' + multiply + ' ';
      break;
    case '/':
      div.innerText = ' ' + divide + ' ';
      break;
    case '-':
      div.innerText = ' ' + substract + ' ';
      break;
    case '+/-':
      div.innerText = ' ' + negative + ' ';
      break;
    default:  
      div.innerHTML = " " + sign + " ";
  }
  target.appendChild(div);
}