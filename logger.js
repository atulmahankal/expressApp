var fs = require('fs');
var util = require('util');

var dtNow = new Date();
var todayDate = dtNow.toISOString().slice(0, 10);
var dir = "logs"
var logPath = dir + "/" + todayDate +".log"

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}
  
var log_file = fs.createWriteStream(logPath, { flags: 'a' });
var log_stdout = process.stdout;

var timeNow = dtNow.getHours() + ':' + dtNow.getMinutes() + ':' + dtNow.getSeconds() + ':' + dtNow.getMilliseconds();

console.log = function () { //
    [...arguments].forEach(element => {
        log_file.write("[" + todayDate + " " + timeNow + "] " + util.format(element) + '\n');
        log_stdout.write("[" + todayDate + " " + timeNow + "] " + util.format(element) + '\n');
    });
};

console.error = function () { //
    [...arguments].forEach(element => {
        log_file.write("[" + todayDate + " " + timeNow + "] " + util.format(element) + '\n');
        log_stdout.write("[" + todayDate + " " + timeNow + "] " + util.format(element) + '\n');
    });
};

module.exports = {
    console
}
