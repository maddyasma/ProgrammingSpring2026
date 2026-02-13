let rotateBy = 20;

function setup(){
    createCanvas(600,600);
    background('lightblue');
    angleMode(DEGREES);
}

function makeArm(rotateBy){
    let alt = Math.round(rotateBy / 360);
    noFill ();
    stroke('#FAEDB7');
    strokeWeight(2);
    rect(0, 0 + alt, 600 / alt);
}
//
function draw(){
    translate(300,300); //changes position
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 10;
}
function mousePressed(){
   if (isLooping()){
    noLoop();
    } else {
    loop();
    }
}

// window.alert("Click to pause the spirograph :-)")
