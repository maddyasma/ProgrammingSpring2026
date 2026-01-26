const name = window.prompt("What is your name?");
        consol.log("Hello, " + name);
function setup() {
  createCanvas(1920, 1080);
}

function draw() {
  if (mouseIsPressed) {
    fill(0, 0, 200, 100);
    stroke(255);
  } else {
    fill(0, 200, 35, 100);
    
  }
  ellipse(mouseX, mouseY, 80, 80);
}