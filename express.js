const express = require('express')
var morgan = require('morgan')
var path = require('path')
var rfs = require('rotating-file-stream') // version 2.x
const console = require('./logger').console;

const app = express()
const port = 3000


// create a rotating write stream
var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(process.cwd(), 'logs')
});

console.log('===>' + path.join(process.cwd(), 'logs'));

// setup the logger
app.use(morgan(':remote-addr - :remote-user [:date[web]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" ":response-time ms"', { stream: accessLogStream }));
app.use(morgan('dev'));

// const morganBody = require("morgan-body")
// const bodyParser = require("body-parser")
// must parse body before morganBody as body will be logged
// app.use(bodyParser.json());
// hook morganBody to express app
// morganBody(app, {logAllReqHeader:true, maxBodyLength:5000});

app.get('/', (req, res) => res.send('<h1>Welcome to Nodejs Express project.</h1>'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))