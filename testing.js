const console = require('./logger').console;

console.log('=====================================');
console.log(process.pkg);
// {
// 	mount: [Function: createMountpoint],
// 	entrypoint: 'C:\\snapshot\\Warsha-ServerApp\\main.js',
// 	defaultEntrypoint: 'C:\\snapshot\\Warsha-ServerApp\\main.js',
// 	path: {
// 		resolve: [Function: resolve]
// 	}
// }
console.log(__filename);											// C:\snapshot\Warsha-ServerApp\server\server.js
console.log(__dirname);												// C:\snapshot\Warsha-ServerApp\server
console.log(process.cwd());										// D:\Customer Projects\warsha\Warsha-ServerApp\dist
console.log(process.execPath);								// D:\Customer Projects\warsha\Warsha-ServerApp\dist\ims_server-win.exe
console.log(process.argv[0]);									// D:\Customer Projects\warsha\Warsha-ServerApp\dist\ims_server-win.exe
console.log(process.argv[1]);									// C:\snapshot\Warsha-ServerApp\main.js
console.log(process.pkg.entrypoint);					// C:\snapshot\Warsha-ServerApp\main.js
console.log(process.pkg.defaultEntrypoint);		// C:\snapshot\Warsha-ServerApp\main.js
console.log(require.main.filename);						// C:\snapshot\Warsha-ServerApp\main.js
console.log('=====================================');
