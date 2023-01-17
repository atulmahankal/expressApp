var project = require('./package.json');

var service = require("os-service");
// var killProcess = require('kill-process-by-name');

function usages(){
	console.log ("usage: express --run        Install application as service");
	console.log ("       express --install    Run application");
	console.log ("       express --uninstall  Uninstall application");
	process.exit (-1);
}

function startApp(){
	service.run(function () {
		service.stop(0);
	});
	require('./express');
}

process.stdout.write(
	String.fromCharCode(27) + "]0;" + project.title + String.fromCharCode(7)
);


// Node.js JavaScript Runtime
var options = {
	nodePath: process.execPath,
	nodeArgs: [],
	programPath: "--service",
	programArgs: []
};

if (process.argv[2] == "--install") {
	service.add(project.title, options, function (error) {
		if (error)
			console.trace(error);
		// service.run();
	});
} else if (process.argv[2] == "--uninstall") {
	// service.stop();
	service.remove(project.title, function (error) {
		if (error)
			console.trace(error);
	});
} else if (process.argv[2] == "--service") {
	startApp();
} else if (process.argv[2] == "--help") {
	usages();
} else {
	require('./express');
};