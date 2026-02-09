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
    rect(0, 0 + alt, 800 / alt);
}

function draw(){
    translate(600,600);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 5;
}
function mousePressed(){
    noLoop();
}
window.alert("Click to pause the spirograph :-)")
