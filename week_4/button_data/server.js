const express = require("express");
const app = express();

const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM3');
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

var clicks = 0;

parser.on('data', function(data){
    clicks = clicks + 1;
    console.log(clicks);
});


app.get('/', function(req, res){
    res.send("Number of clicks so far today: " + clicks);
});

const listener = app.listen(3000, () => {
    console.log("Your app is listening on port " + listener.address().port);
});