function setup() {
  createCanvas(800, 800);
 noLoop();
}

function draw() {
  background(184, 115, 51);

  translate(width / 2, height / 2);

  noFill();
  stroke(92, 64, 51);

  let maxRadius = 800;

  for (let r = 2; r < maxRadius; r += 10) {
    strokeWeight(random(1, 6)); // randomizes stroke
    beginShape();

 for (let a = 0; a < TWO_PI; a += 0.08) {

  // normalized direction around circle
  let nx = cos(a);
  let ny = sin(a);

  // shared growth field (key idea: same base for all rings)
  let growthX = nx * 1.5;
  let growthY = ny * 1.5;

  // directional warp (breaks circular symmetry)
  let warp = noise(growthX + 100, growthY + 100) * 3;

  // growth-based layering (important: r influences structure continuity)
  let n = noise(
    growthX + warp,
    growthY + warp,
    r * 0.03
  );

  // stronger variation as tree grows outward
  let strength = map(r, 0, maxRadius, 2, 20);

  // smooth growth deformation
  let offset = map(n, 0, 1, -strength, strength);

  let radius = r + offset;

  vertex(nx * radius, ny * radius);
}

  endShape(CLOSE);
}
}