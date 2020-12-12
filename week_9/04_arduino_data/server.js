const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server); //NEW
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM3');
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

var path = require('path');

app.use(express.static('public'));
//NEW
io.on('connection', (socket) => { 
  // console.log(socket);
  socket.emit('welcome', socket.id);
 });

parser.on('data', function(data){
  console.log(data);
});

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/views/index.html'));
  });

  server.listen(3000, ()=>{
    console.log('app listening on ' + server.address().port);
  });