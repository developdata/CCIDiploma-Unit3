const express = require('express');
const app = express();

var path = require('path');

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/views/index.html'));
  });

const listener = app.listen(3000, ()=>{
    console.log('app listening on ' + listener.address().port);
});