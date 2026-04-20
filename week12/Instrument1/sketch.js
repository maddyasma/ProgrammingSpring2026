let cols;
let rows;
let current; 
let previous;

let sounds = [];

function preload () {
  sounds = [
    loadSound('BUILD01short.wav'),
    loadSound('BUILD02short.wav'),
    loadSound('BUILD03short.wav'),
    loadSound('BUILD04short.wav'),
    loadSound('BUILD05short.wav'),
    loadSound('BUILD06short.wav'),
    loadSound('BUILD01short.wav'),
  ];
}

function mouseClicked() {
  previous[mouseX][mouseY] = 6000;

  let sectionWidth = width / sounds.length;
  let index = floor(mouseX / sectionWidth);

  sounds[index].play();
  console.log(index);
}

let dampening = 0.99;

function setup() {
  pixelDensity(1);
  createCanvas(1700, 920);
  cols = width;
  rows = height;
 

  current = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
  previous = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
}



function draw() {
  background(0);

  loadPixels();
  for (let i = 1; i < cols - 1; i++) {
    for (let j = 1; j < rows - 1; j++) {
      current[i][j] =
        (previous[i - 1][j] +
          previous[i + 1][j] +
          previous[i][j - 1] +
          previous[i][j + 1]) /
          2 -
        current[i][j];
      current[i][j] = current[i][j] * dampening;
      
      
      let index = (i + j * cols) * 4;
      let val = current[i][j];

      //background color
      let r = 10;
      let g = 40;
      let b = 50;
      
      let brightness = Math.max(0, val);

      pixels[index + 0] = r + brightness;
      pixels[index + 1] = g + brightness;
      pixels[index + 2] = b + brightness;
    }
  }
  updatePixels();

  let temp = previous;
  previous = current;
  current = temp;
}