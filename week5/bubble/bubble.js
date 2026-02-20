
let bubble1;
let bubble2;

function setup(){
  createCanvas(500,500);
  background(0);
  bubble1 = new Bubble(100, 100);
  bubble2 = new Bubble(300, 300);
  print(bubble1.x, bubble1.y);
  print(bubble2.x, bubble2.y);
}

function draw(){
  // use no loop to prevent the draw function from looping infinitely
  noLoop();

  for(let i = 1; i < 91; i++){
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    console.log(i);
  }
}
// class bubble
class Bubble {
constructor(x, y){
this.x = x;
this.y = y;
this.x = 200;
this.y = 150;
}
// randomizes movement
move(){
this.x = this.x + random(-10,10);
this.y = this.y + random(-10,10);
}
// shows the bubble
show (){
stroke(random(255), random(255), random(255));
strokeWeight(4);
noFill();
ellipse(this.x, this.y, 24, 24);
}
}