let ptsPerRing = 100;
let shapeSize = 5;
let numRings = 50;
let minR = 30;
let maxR = 300;
let distortionFactor = 0.1;
let ampFactor = 0.2;
let freqFactor = 0.03;
function preload() {
  
  img = loadImage("assets/repeat.png");
}

function setup() {
  createCanvas(600, 600);
}


function draw() {
  background(0);
  noStroke();
  fill(255);
  translate (width/2, height/2);
  for (let i=0; i<numRings; i++) {
  let r = minR + ((maxR - minR) / numRings) * i;


  for (let j=0; j<ptsPerRing; j++) {
    let angle = TWO_PI/ptsPerRing * j;
    let distortedAngle = angle + ampFactor*sin(freqFactor*r);

    let refX = int(map(angle, 0, TWO_PI, 0, img.width));
    let sampleY = (r-minR) / (maxR-minR);
    let refY = int(map(sampleY, 0, 1, 0, img.height));
    let c = img.get(refX, refY);
    let brightness = c[0]; // or (c[0]+c[1]+c[2])/3
    let shapeSize = map(brightness, 0, 255, 0, 3);

    let x = -r*cos(distortedAngle);
    let y = r*sin(distortedAngle);
    ellipse(x, y, shapeSize);
  }
}
}