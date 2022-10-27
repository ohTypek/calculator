let substract = '−';
let divide = '÷';
let multiply = '×';
let negative = '±';

document.getElementById('content').innerHTML = null;

const signs = [
  'C',
  'R',
  negative,
  divide,
  '9',
  '8',
  '7',
  multiply,
  '4',
  '5',
  '6',
  substract,
  '1',
  '2',
  '3',
  '+',
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
  div.dataset.number = sign;
  
  // filters signs and gives matching data attrinutes | data-specialsign
  if (sign === 'R' || sign === 'C' || sign === negative || sign === ',') {
    div.classList.add('specialsign'); div.classList.remove('number');

    delete div.dataset.number;
    
    div.dataset.specialsign = sign;
    if (sign === negative) { div.dataset.specialsign = '+/-'; }
  }

  // filters signs and gives matching data attrinutes | data-sign
  if (sign === '+' || sign === substract || sign === multiply || sign === divide || sign === '=') {
    div.classList.add('sign'); div.classList.remove('number');

    delete div.dataset.number;

    div.dataset.sign = sign;
    if( sign === multiply ) { div.dataset.sign = '*' }
    if( sign === divide ) { div.dataset.sign = '/' }
    if( sign === substract ) { div.dataset.sign = '-' }
  }
  
  // sets the inside of div and puts it in the #content
  div.innerHTML = " " + sign + " ";
  target.appendChild(div);
}