let grid = undefined;
let fill1 = prompt("What color is the snowman's flesh?", "white");
let fill2 = prompt("What color is his nose?","orange");
function setup(){
    createCanvas(1000,800);
    background("#ffd0ed");
    grid = loadImage("");
}
function draw() {
    //background
    background(grid);
    fill(fill1);
    strokeWeight(20);
    stroke("#fef5f0");
    //mountains
    noStroke()
    fill("#e9b0d3");
    triangle(0, 850, 260, 250, 500, 850);
    triangle(350, 850, 800, 100, 1200, 850);
    //ground
    noStroke()
    fill("#feeaf7");
    rect(0,600,1000,600,1000,800,0,800);
    //lower body
    fill(fill1);
    strokeWeight(20);
    stroke("#fef5f0");
    ellipse(500,550,350,350);
    //right arm
    stroke("#57301b");
    strokeWeight(20);
    line(620,360,720,300);
    //upper body
    fill(fill1);
    strokeWeight(20);
    stroke("#fef5f0");
    ellipse(500,350,250,250);
    //head
    fill(fill1);
    strokeWeight(20);
    stroke("#fef5f0");
    ellipse(500,200,200);
    //hat brim
    stroke("#57301b");
    strokeWeight(20);
    line(400,120,600,120);
    //hat body
    fill("#57301b");
    quad(450,50,550,50,550,120,450,120);
    //eyes
    stroke(0);
    strokeWeight(30);
    point(505,200);
    point(575,200);
    //nose
    noStroke()
    fill(fill2);
    triangle(530, 250, 530, 220, 650, 230);
    //buttons
    stroke(0);
    strokeWeight(20);
    point(535,340);
    point(540,385);
    point(535,430);
    //left arm
    stroke("#57301b");
    strokeWeight(20);
    line(290,300,400,360);
    

}