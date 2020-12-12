const express = require('express');
const app = express();
const server = require('http').createServer(app);

var path = require('path');

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/views/index.html'));
    // res.send("Hello");
  });

  server.listen(3000, ()=>{
    console.log('app listening on ' + server.address().port);
  });
