
var mraa = require("mraa");

var led = new mraa.Gpio(4);

led.dir(mraa.DIR_OUT);

var state = true;

function change() {
	led.write(state ? 1 : 0);
	state = !state;
	setTimeout(change, 500);
}
