var project = require('./package.json');

var service = require("os-service");

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

	require('./main');
}

var options = { 
	programArgs: ["--run"]
}
if (process.argv[2] == "--install") {
	service.add(project.title, options, function (error) {
		if (error)
			console.trace(error);
	});
} else if (process.argv[2] == "--uninstall") {
	service.remove(project.title, function (error) {
		if (error)
			console.trace(error);
	});
} else if (process.argv[2] == "--run") {
	startApp();
} else {
	usages();
}