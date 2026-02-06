function setup() {
    createCanvas(200,200);
}
function createTile(){
    translate(0,0);
    noStroke();
    fill('lightblue');
    rect(0,0,200,200);
    fill('maroon');
    square(70, 70, 70);
    fill('orange');
    triangle(70, 70, 105, 40, 140, 70);
    triangle(140, 70, 170, 105, 140, 140);
    triangle(70, 140, 140, 140, 105, 170);
    triangle(70, 140, 40, 105, 70, 70);
    fill('lightyellow');
    triangle(70, 70, 70, 0, 105, 40);
    triangle(140, 0, 140, 70, 105, 40);
    triangle(140, 70, 200, 70, 170, 105);
    triangle(140, 140, 200, 140, 170, 105);
    triangle(140, 140, 140, 200, 105, 170);
    triangle(70, 140, 70, 200, 105, 170);
    triangle(70, 140, 0, 140, 40, 105);
    triangle(70, 70, 0, 70, 40, 105);
    // stroke('white');
    // strokeWeight(5);
    // line(0,0,200,200);
    // line(200,0,0,200);
    // noStroke();
    // fill('yellow');
    // circle(100,50,50);
    // circle(50,100,50);
    // circle(150,100,50);
    // circle(100,150,50);
    // noFill();
    // stroke('purple');
    // strokeWeight(5);
    // circle(100,100,100);
}
function draw() {
    createTile();
}