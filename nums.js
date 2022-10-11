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
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  ',',
  '='
]

window.onload =
function start()
{
	
	var tresc_diva ="";
	
	for (i=0; i<=litery.length-1; i++)
  {
    
    if (litery[i] == '+' || litery[i] == '-' || litery[i] == '×' || litery[i] == '÷' || litery[i] == '=') {
      tresc_diva = tresc_diva + `<div class="sign main-css" onclick=" addSign(`+' + litery[i] + '+`)">` + litery[i] + `</div>`
    }
    else if (litery[i] == 'R' || litery[i] == 'C' || litery[i] == '±' || litery[i] == ',') {
      if (litery[i] == 'C') { tresc_diva += '<div class="specialsign main-css" onclick="remove(true);"> C </div>' }
      else if (litery[i] == 'R') { tresc_diva += '<div class="specialsign main-css" onclick="remove(false);"> R </div>' }
      else if (litery[i] == '±') { tresc_diva += '<div class="specialsign main-css" onclick="changeNegavity()"> ± </div>' }
      else if (litery[i] == ',') { tresc_diva += '<div class="main-css specialsign" style="background: #292928; color: #fff;" onclick="addComma();"> ˏ </div>' }
    }
    else
      if (litery[i] == 0)
        tresc_diva = tresc_diva + '<div class="number main-css" style="width: 8.2rem; text-align: center; border-radius: 4.1rem;" onclick="addNum(0)"> 0 </div>'; 
      else
        tresc_diva = tresc_diva + '<div class="number main-css" onclick="addNum(' + litery[i] + ')">' + litery[i] + '</div>';
    
		if ((i+1) % 4 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("content").innerHTML = tresc_diva;

}