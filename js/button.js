

var grooveSensor = require("jsupm_grove");

var button = new grooveSensor.GroveButton(3);

function readButton() {
	console.log(button.name() + " " + button.value());
}

setInterval(readButton, 500);
