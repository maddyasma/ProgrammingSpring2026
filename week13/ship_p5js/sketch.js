// https://youtu.be/okfZRl4Xw-c

let waves = [];
let boatImg;
let flashFrames = 0;

function preload() {
 
  boatImg = loadImage("boat1.png");
}

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 5; i++) {
    waves.push(new Wave(random(0.005, 0.02), random(10, 80), random(TWO_PI)));
  }
}

function draw() {
  if (flashFrames > 0) {
    background(145, 165, 186);
    flashFrames--;
  } else {
    background(49, 61, 74);

    // Random lightning
    if (random(1) < 0.02) {
      flashFrames = int(random(2, 6));
    }
  }

  let points = [];

  // wave surface
  for (let x = 0; x <= width; x += 10) {
    let y = 0;

    for (let wave of waves) {
      y += wave.evaluate(x);
    }

    points.push({ x: x, y: y + height / 2 });
  }

  // water shape
  noStroke();
  fill(20, 30, 40);

  beginShape();
  vertex(0, height);

  for (let p of points) {
    vertex(p.x, p.y);
  }

  vertex(width, height);
  endShape(CLOSE);

  
  let centerX = width / 2;
  let boatY = 0;

  for (let wave of waves) {
    boatY += wave.evaluate(centerX);
  }

  boatY += height / 2;

  // rotate boat
  let slope =
    getWaveHeight(centerX + 5) - getWaveHeight(centerX - 5);

  let angle = atan2(slope, 10);

  push();
  translate(centerX, boatY - 20);
  rotate(angle);
  imageMode(CENTER);
  image(boatImg, 0, 0, 100, 100);
  pop();

  // update waves
  for (let wave of waves) {
    wave.update();
  }
}


function getWaveHeight(x) {
  let y = 0;
  for (let wave of waves) {
    y += wave.evaluate(x);
  }
  return y + height / 2;
}


