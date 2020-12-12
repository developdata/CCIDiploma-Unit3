const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server); //NEW

var path = require('path');

app.use(express.static('public'));
//NEW
io.on('connection', (socket) => { 
  // console.log(socket);
  socket.emit('welcome', socket.id);
 });

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/views/index.html'));
  });

  server.listen(3000, ()=>{
    console.log('app listening on ' + server.address().port);
  });