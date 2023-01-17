var Nssm = require('nssm');
var package = require('./package.json');

var svcName = package.name;
var options = { nssmExe: process.execPath }; // default


var nssm = Nssm(svcName, options);
	nssm.install(nssm);
	
	nssm.set('Start', 'auto', function(error, result) {
		if (error) {
			console.log('*** error:', error, ' stderr:', result);
			return;
		}
		console.log('*** stdout: \'' + result + '\'');
	});
	

	// var propertyName = 'Start';
	// nssm.get(propertyName)
	// 	.then(function(stdout) {
	// 		console.log('then(): stdout: \'' + stdout + '\'');
	// 	})
	// 	.catch(function(error) {
	// 		console.log('catch(): error:', error);
	// 	})
	// 	;



		
// if (process.argv[2] == "--install") {
// 	var nssm = Nssm(svcName, options);
	
// 	nssm.set('Start', 'auto', function(error, result) {
// 		if (error) {
// 			console.log('*** error:', error, ' stderr:', result);
// 			return;
// 		}
// 		console.log('*** stdout: \'' + result + '\'');
// 	});
// } else if (process.argv[2] == "--uninstall") {
// 	service.remove(project.title, function (error) {
// 		if (error)
// 			console.trace(error);
// 	});
// } else if (process.argv[2] == "--run") {
// 	startApp();
// } else {
// 	usages();
// }