console.log('inside the data.js file');
let socket = io();

let text = document.getElementById('text');

let eWidth = 80;
let eHeight = 80;

// socket.on('welcome', (data)=> { REMOVE
//     console.log(data);
//     text.innerHTML = "this id of the socket.io connection for this page is " + data;
// });

socket.on('arduino data', (data)=>{
    // console.log(data)
    text.innerHTML = "The last button pressed is button number: " + data;

    if(data === "2"){
        console.log('in 2')
        if(eWidth < 120){
            eWidth += 10;
            eHeight += 10;
        }
    }

    if(data === "3"){
        if(eWidth > 10){
            eWidth -= 10;
            eHeight -= 10;
        }
    }
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
