
var mraa = require("mraa");

var led = new mraa.Gpio(4);
var button = new mraa.Gpio(3)

led.dir(mraa.DIR_OUT);

var state = true;

function change() {
	led.write(state ? 1 : 0);
	state = !state;	
}

while (true) {

	if (button.read() == 1) {
		change();
	}

}
