const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server); //NEW
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM7');
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

var path = require('path');

app.use(express.static('public'));
//NEW
io.on('connection', (socket) => { 

  // console.log(socket);
  parser.on('data', function(data){
    console.log(data);
    socket.emit('arduino data', data);
  });
  // socket.emit('welcome', socket.id); remove this

  socket.on('disconnect', ()=>{
    console.log('left: ' + socket.id);
  });

 });



app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/views/index.html'));
  });

  server.listen(3000, ()=>{
    console.log('app listening on ' + server.address().port);
  });