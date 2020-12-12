console.log('inside the data.js file');
let socket = io();

let text = document.getElementById('text');


// socket.on('welcome', (data)=> { REMOVE
//     console.log(data);
//     text.innerHTML = "this id of the socket.io connection for this page is " + data;
// });

socket.on('arduino data', (data)=>{
    console.log(data)
    text.innerHTML = "The last button pressed is button number: " + data;
})
