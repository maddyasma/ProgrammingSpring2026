let ptsPerRing = 70;
let r = 150;
let shapeSize = 15;
let numRings = 40;
let minR = 0;
let maxR = 800;
let distortionFactor = 1;
let ampFactor = 3;
let freqFactor = 1;

function setup() {
  createCanvas(600, 600);
}
function draw() {
  background(242, 85, 85);
  noStroke();
  //fill(232, 244, 255);
  translate (width/2, height/1);
  for (let i=0; i<numRings; i++) {
  let r = minR + ((maxR - minR) / numRings) * i;

  // Map radius to brightness (0–255)
  let c = map(r, minR, maxR, 80, 255);

  fill(c, c, 20); // bluish gradient

  for (let j=0; j<ptsPerRing; j++) {
    let angle = TWO_PI/ptsPerRing * j;
    let distortedAngle = angle + ampFactor*sin(freqFactor*r);
    let x = r*cos(distortedAngle);
    let y = r*sin(distortedAngle);
    rect(x, y, shapeSize);
  }
}
}