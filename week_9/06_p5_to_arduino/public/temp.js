console.log('inside the data.js file');
let socket = io();

let text = document.getElementById('text');

let eWidth = 80;
let eHeight = 80;

// socket.on('welcome', (data)=> { REMOVE
//     console.log(data);
//     text.innerHTML = "this id of the socket.io connection for this page is " + data;
// });

socket.on('arduino data', (dataButton)=>{
 
    text.innerHTML = "The last button pressed is button number: " + data;

    if(dataButton === "2"){
  
        if(eWidth < 120){
            eWidth += 10;
            eHeight += 10;
        }
    }

    if(dataButton === "3"){
        if(eWidth > 10){
            eWidth -= 10;
            eHeight -= 10;
        }
    }

    // if((eWidth < 20) || (eWidth > 80)){
    //     console.log('eWidth ' + eWidth)
    //     socket.emit('update led', "on");
    // } 
    // else {
        // socket.emit('update led', "off");
    // }
});

function setup(){
    let canvas = createCanvas(400,400);
    canvas.parent('p5Canvas');
}

 function draw(){
    if (mouseIsPressed){
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, eWidth, eHeight);
}





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


  parser.on('data', function(inputData){
    console.log("data coming in " + inputData);
    socket.emit('arduino data', inputData);
  });

  // socket.on('update led', (shapeData)=>{
  //       // parser.write(shapeData + 'E');
  //       port.write('Hi Mom!')
  // })

 }); //END OF SOCKET ON



app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/views/index.html'));
  });

  server.listen(3000, ()=>{
    console.log('app listening on ' + server.address().port);
  });