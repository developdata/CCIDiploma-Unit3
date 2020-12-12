let socket = io();

let text = document.getElementById('text');

let eWidth = 80;
let eHeight = 80;

socket.on('arduino data', (data)=>{
    text.innerHTML = "The last button pressed is button number: " + data;

    if(data === "2"){
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

    if((eWidth < 30) || (eWidth > 80)){
        socket.emit('update led', "on");
    } 
    else {
        socket.emit('update led', "off");
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
