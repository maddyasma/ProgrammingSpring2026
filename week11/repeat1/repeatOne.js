let ptsPerRing = 50;
let r = 150;
let shapeSize = 5;
let numRings = 110;
let minR = 0;
let maxR = 600;
let distortionFactor = 0.1;
let ampFactor = 10;
let freqFactor = 0.01;

function setup() {
  createCanvas(600, 600);
}
function draw() {
  background(7, 31, 54);
  noStroke();
  //fill(232, 244, 255);
  translate (width/2, height/2);
  for (let i=0; i<numRings; i++) {
  let r = minR + ((maxR - minR) / numRings) * i;

  // Map radius to brightness (0–255)
  let c = map(r, minR, maxR, 31, 255);

  fill(c, c, 255); // bluish gradient

  for (let j=0; j<ptsPerRing; j++) {
    let angle = TWO_PI/ptsPerRing * j;
    let distortedAngle = angle + ampFactor*sin(freqFactor*r);
    let x = r*cos(distortedAngle);
    let y = r*sin(distortedAngle);
    ellipse(x, y, shapeSize);
  }
}
}