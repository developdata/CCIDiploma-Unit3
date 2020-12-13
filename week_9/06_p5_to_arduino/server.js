const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server); 
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM3');
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

var path = require('path');

app.use(express.static('public'));
io.on('connection', (socket) => { 

  parser.on('data', (data)=>{
    socket.emit('arduino data', data);
  });

    socket.on('update led', (shapeData)=>{
        console.log(shapeData);
        port.write(shapeData + 'E');
    });

    socket.on('disconnect', ()=>{
      console.log('left: ' + socket.id);
    });
 });

  app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/views/index.html'));
  });

  server.listen(3000, ()=>{
    console.log('app listening on ' + server.address().port);
  });