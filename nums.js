const litery = [
  'C',
  'R',
  '±',
  '÷',
  '9',
  '8',
  '7',
  '×',
  '4',
  '5',
  '6',
  '−',
  '1',
  '2',
  '3',
  '+',
  '0',
  ',',
  '='
];

var tresc_diva = "";

window.onload =
function start() {
  
  for (const litera of litery) {

    if (litera == 'R' || litera == 'C' || litera == '±' || litera == ',' || litera == '+' || litera == '−' || litera == '×' || litera == '÷' || litera == '=') {
      //specialsigns
      if (litera == 'C') { tresc_diva += '<div class="specialsign main-css" onclick="remove(true);">' + litera + '</div>'; }
      if (litera == 'R') { tresc_diva += '<div class="specialsign main-css" onclick="remove(false);">' + litera + '</div>'; }
      if (litera == '±') { tresc_diva += '<div class="specialsign main-css" onclick="changeNegavity()">' + litera + '</div>'; }
      if (litera == ',') { tresc_diva += '<div class="main-css specialsign" style="background: #292928; color: #fff;" onclick="addComma();">' + litera + '</div>'; }
      //sings
      if (litera == '=') { tresc_diva += `<div class="sign main-css" onclick="resultDisplay()"> ` + litera + ' </div>'; }
      if (litera == '+' || litera == '−' || litera == '×' || litera == '÷')
        tresc_diva += `<div class="sign main-css" onclick="addSign('` + litera + `')"> ` + litera +` </div>`;
    }
    else {
      tresc_diva += litera != 0 ?
      '<div class="number main-css" onclick="addNum('+ litera +')">' + litera + ' </div>'
      :
      '<div class="number main-css" style="width: 8.2rem; text-align: center; border-radius: 4.1rem;" onclick="addNum(0)"> 0 </div>';
    }
    
    (litera.indexOf + 1) % 4 == 0 ? tresc_diva += '<div style="clear:both;"></div>' : null;
  }
  
  document.getElementById('content').innerHTML = tresc_diva;
}