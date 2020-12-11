const express = require('express');
const app = express();
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM3');
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

var path = require('path');

app.use(express.static('public'));

parser.on('data', function(data){
  console.log(data);
});

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/views/index.html'));
  });

const listener = app.listen(3000, ()=>{
    console.log('app listening on ' + listener.address().port);
});