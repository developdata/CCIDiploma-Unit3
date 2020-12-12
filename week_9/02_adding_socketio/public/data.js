console.log('inside the data.js file');
let socket = io();

let text = document.getElementById('text');

socket.on('welcome', (data)=> {
    console.log(data);
    text.innerHTML = "this id of the socket.io connection for this page is " + data;
});