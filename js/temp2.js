
var sensor = require("jsupm_grove");
var azureTable = require("azure-table-node");

var t = new sensor.GroveTemp(3);

var accountName = "edison";
var accessKey = "RkOqfHb7h20gKmsy3HN04jim3i92Qw38QoUYl8lXLK7KLc9FSRBj8ltR99wQBlMTC392o2PfmdqsnJ3EXsqNxA==";

azureTable.setDefaultClient({
	accountUrl: "https://" + accountName + ".table.core.windows.net/",
	accountName: accountName,
	accountKey: accessKey,
	timeout: 10000
});

var client = azureTable.getDefaultClient();
client.createTable("tem", function(err, res) {

console.log(t.name());

var printTemp = function() {
	var cels = t.value();
	console.log(cels);

	var ent = {
		PartitionKey: t.name(),
		RowKey: new Date().toString(),
		value: cels
	};
	console.log(ent);

	client.insertOrReplaceEntity("tem", ent, function(err, data) {
	if (err) return console.error(err);
		console.log("Success");
	});
	
	setTimeout(printTemp, 500);
};

printTemp();
});
