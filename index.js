var planets = [
  {name: 'Sun', gravity: 27.9},
  {name: 'Mercury', gravity: 0.377},
  {name: 'Venus', gravity: 0.9032},
  {name: 'Earth', gravity: 1},
  {name: 'Moon', gravity: 0.1655},
  {name: 'Mars', gravity: 0.3895},
  {name: 'Jupiter', gravity: 2.640},
  {name: 'Saturn', gravity: 1.139},
  {name: 'Uranus', gravity: 0.917},
  {name: 'Neptune', gravity: 1.148},
  {name: 'Pluto', gravity: 0.06}
];

for (var i = 0; i < planets.length; i++) {
	var planet = planets[i];
	// put planet.name into <select>
	var optionElement = document.createElement('option');
	optionElement.value = planet.gravity;
	optionElement.innerHTML = planet.name;
	var selectElement = document.getElementById('selectPlanet');
	selectElement.appendChild(optionElement);
}

function roundToDecimal(num,dec) {
      var rounded = (Math.round(num * Math.pow(10,dec)) / Math.pow(10,dec)).toFixed(dec);
      return rounded;
    }
// get input from site into JS file
var button = document.getElementById('calculateWeight');
button.onclick = function() {
	var inputElement = document.getElementById('inputWeight');
	if (isNaN(inputElement.value)) {
		alert('Please enter a numeric value!');
		throw new Error('Entry value isNaN');
	} else {
		var yourWeight = inputElement.value;
		var selectElement = document.getElementById('selectPlanet');
		var selected = selectElement.selectedIndex;
		var name = selectElement.options[selected];
		var planetName = name.text;
		var planetValue = name.value;
		var result = roundToDecimal(planetValue * yourWeight, 2);
		var message = "Your weight on " + planetName + " is " + result + " lbs.";
		var finalOutput = document.getElementById('output');
		finalOutput.innerHTML = message;
  }
}



