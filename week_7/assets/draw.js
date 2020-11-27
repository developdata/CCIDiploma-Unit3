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
    ellipse(mouseX, mouseY, 80, 80);
}