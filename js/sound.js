

var grooveSensor = require("jsupm_mic");
var mic = grooveSensor.Microphone(3);

var tctx = new grooveSensor.thresholdContext;

tctx.averageReading = 0;
tctx.runningAverage = 0;

tctx.averageOrder = 2;

var is_running = false;

while (true) {
	var buffer = new grooveSensor.uint16Array(128);
	var len = mic.getSampledWindow(2, 128, buffer);
	if (len) {
		var trsh = mic.findThreshold(tctx, 30, buffer);
		mic.printGraph(tctx);
		if (trsh) 
			console.log("Threshold is " + trsh);	
	}
}

process.on("SIGINT", function() {
	console.log("Exit");
	process.exit(0);
});
