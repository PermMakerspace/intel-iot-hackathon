
var five = require("johnny-five");
var edison = require("edison-io");
var board = new five.Board({
  io: new edison()
});

var motor = new five.Motor({
  pins: {
    pwm: 9,
    dir: 7
  }
});

board.on("ready", function() {
  motor.forward(255);

  setTimeout(function() {
    motor.stop();
  }, 5000);
});
