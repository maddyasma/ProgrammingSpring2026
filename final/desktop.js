
// DESKTOP VARIABLES


let bgImage1;
let bgImage2;

let folderIcon1;
let folderIcon2;
let folderIcon3;
let recycleIcon;
let computerIcon;
let gameBg;
let desktopFont;
let fadeAmount = 0;
let state = "showImage1";
let stateStartTime;
let gameWindowOpen = false;

let fileWindowOpen = false;
let fileWindowImg;
let longImage;
let scrollY = 0;
let alienSound;

// GAME VARIABLES

const DOWN = 'down';
const UP = 'up';
let startingX = 50;
let startingY = 80;
let cards = [];

const gameState = {
  totalPairs: 5,
  flippedCards: [],
  numMatched: 0,
  attempts: 0,
  waiting: false,
};

let cardfaceArray = [];
let cardback;

// PRELOAD

function preload() {

  // desktop
  bgImage1 = loadImage('xfiles_bg.png');
  bgImage2 = loadImage('xfiles_bg_alien.png');

  folderIcon1 = loadImage('foldericon1.png');
  folderIcon2 = loadImage('foldericon1.png');
  folderIcon3 = loadImage('foldericon1.png');

  recycleIcon = loadImage('recycleicon.png');
  computerIcon = loadImage('computericon.png');

  desktopFont = loadFont('PixelOperator8.ttf');
  
  alienSound = loadSound('xfiles_trimmed.wav');
  
  //scroll file
  fileWindowImg = loadImage('fileWindow2.png');
  longImage = loadImage('X129202.jpg');

  // card game
  gameBg = loadImage('memgame_bg.png');

  cardback = loadImage('xcardback.png');

  cardfaceArray = [
    loadImage('xcard1.png'),
    loadImage('xcard2.png'),
    loadImage('xcard3.png'),
    loadImage('xcard4.png'),
    loadImage('xcard5.png'),
  ];
}

// SETUP

function setup() {

  createCanvas(1920, 1080);

  stateStartTime = millis();

  setupCardGame();
}

// DESKTOP DRAW

function draw() {

  background(0);

  // background fade
  tint(255, 255 - fadeAmount);
  image(bgImage1, 0, 0, width, height);

  tint(255, fadeAmount);
  image(bgImage2, 0, 0, width, height);

  noTint();

  // cursor zone
  if (
    mouseX > 525 &&
    mouseX < 1310 &&
    mouseY > 130 &&
    mouseY < 700
  ) {
    cursor('xfiles_cursor.png');
  } else {
    noCursor();
  }

  // DESKTOP ICONS

  // card game
  image(folderIcon1, 600, 160);
  fill(255);
  textFont(desktopFont);
  textSize(11);

  text('Memory Game', 585, 242);

  // folder 1
  image(folderIcon2, 600, 260);
  textSize(10);
  text('X File 129202', 587, 342);

  // folder 2
  image(folderIcon3, 600, 360);
  text('X File 39476', 595, 442);

  // recycle bin
  image(recycleIcon, 605, 465);
  text('Recycle Bin', 595, 542);

  // computer
  image(computerIcon, 605, 565);
  text('My Computer', 590, 650);

//scroll file
  
  if (fileWindowOpen) {
  drawFileWindow();
}

  // DRAW GAME WINDOW

  if (gameWindowOpen) {
    drawGameWindow();
  }

 // BACKGROUND FADE

  let elapsed = millis() - stateStartTime;

  if (state === "showImage1") {

    fadeAmount = 0;

    if (elapsed > 20000) {
      state = "fadeToImage2";
      stateStartTime = millis();
    }

  } else if (state === "fadeToImage2") {

  if (!alienSound.isPlaying()) {
    alienSound.loop();
  }

  fadeAmount = map(elapsed, 0, 3000, 0, 255);

  let soundVolume = map(fadeAmount, 0, 150, 0, 0.5);

  alienSound.setVolume(soundVolume);

  if (elapsed > 3000) {

    fadeAmount = 255;

    state = "showImage2";

    stateStartTime = millis();
  }
} else 
    if (state === "showImage2") {

    fadeAmount = 255;

    if (elapsed > 3000) {

      state = "fadeToImage1";

      stateStartTime = millis();
    }

  } else if (state === "fadeToImage1") {

  fadeAmount = map(elapsed, 0, 3000, 255, 0);

  let soundVolume = map(fadeAmount, 150, 0, 0.5, 0);

  alienSound.setVolume(soundVolume);

  if (elapsed > 3000) {

    fadeAmount = 0;

    alienSound.stop();

    state = "showImage1";

    stateStartTime = millis();
  }
}
}



// DRAW GAME WINDOW

function drawGameWindow() {

  // window body

  // close button
  fill(170);
  rect(1245, 160, 20, 20);
 
  noStroke();
  fill(255);
  text("X", 1250, 170);

  // draw game
  push();

  translate(700, 160);
  drawCardGame();
  pop();
}

//scroll file
function drawFileWindow() {
  

  // WINDOW
  fill(190);
  rect(700, 180, 500, 500);
  image(fileWindowImg, 700, 180, 500, 500);


  // CLIPPING AREA
  push();

  // crop drawing to window
  drawingContext.save();

  drawingContext.beginPath();
  drawingContext.rect(710, 225, 460, 430);
  drawingContext.clip();

  // draw long image
  image(
    longImage,
    700,
    232 - scrollY,
    475,
    longImage.height
  );

  drawingContext.restore();
  pop();
  
  //close button
  fill(170);
  rect(1178, 186, 15, 15);
 
  noStroke();
  fill(0);
  text("X", 1181, 198);


}

//mouse pressed

function mousePressed() {

  // open game window
  if (
    mouseX > 600 &&
    mouseX < 664 &&
    mouseY > 160 &&
    mouseY < 224
  ) {
    gameWindowOpen = true;
  }

  // close button
  if (
    gameWindowOpen &&
    mouseX > 1245 &&
    mouseX < 1260 &&
    mouseY > 160 &&
    mouseY < 180
  ) {
    gameWindowOpen = false;
  }

  // card game mouse
  if (gameWindowOpen) {

    let gameMouseX = mouseX - 700;
    let gameMouseY = mouseY - 160;

    mousePressedCardGame(gameMouseX, gameMouseY);
  }
  
  //scroll file folder click area
if (
  mouseX > 587 &&
  mouseX < 640 &&
  mouseY > 280 &&
  mouseY < 330
) {
  fileWindowOpen = true;
}
 // close button
  if (
    fileWindowOpen &&
    mouseX > 1178 &&
    mouseX < 1193 &&
    mouseY > 186 &&
    mouseY < 201
  ) {
    fileWindowOpen = false;
  }
  
}


// card game setup

function setupCardGame() {
  
  let selectedFaces = [];

  for (let z = 0; z < 5; z++) {

    const randomIndex = floor(random(cardfaceArray.length));

    const face = cardfaceArray[randomIndex];

    selectedFaces.push(face);
    selectedFaces.push(face);

    cardfaceArray.splice(randomIndex, 1);
  }

  selectedFaces = shuffleArray(selectedFaces);

  for (let j = 0; j < 2; j++) {

    for (let i = 0; i < 5; i++) {

      const faceImage = selectedFaces.pop();

      cards.push(
        new Card(startingX, startingY, faceImage)
      );

      startingX += 100;
    }

    startingY += 120;
    startingX = 100;
  }
}



// draw card game

function drawCardGame() {

  image(gameBg, 0, 0, 570, 470);

  // WIN MESSAGE
  if (gameState.numMatched === gameState.totalPairs) {

    fill('#F44336');

    textSize(25);


    text('X File Solved!', 230, 380);
  }

  // DRAW CARDS
  for (let k = 0; k < cards.length; k++) {

    cards[k].show();
  }

  fill('black');

  textSize(15);

  text('attempts: ' + gameState.attempts, 50, 400);

  text('matches: ' + gameState.numMatched, 50, 370);
}



// card game mouse

function mousePressedCardGame(gameMouseX, gameMouseY) {

  // stop clicking while cards flip back
  if (gameState.waiting) {
    return;
  }

  // check cards
  for (let k = 0; k < cards.length; k++) {

    let currentCard = cards[k];

    // ignore matched or already face-up cards
    if (
      !currentCard.isMatch &&
      currentCard.face === DOWN &&
      currentCard.didHit(gameMouseX, gameMouseY)
    ) {

      currentCard.flip();

      gameState.flippedCards.push(currentCard);

      break;
    }
  }

  // once 2 cards are flipped
  if (gameState.flippedCards.length === 2) {

    gameState.waiting = true;

    gameState.attempts++;

    let card1 = gameState.flippedCards[0];
    let card2 = gameState.flippedCards[1];

    // MATCH
    if (card1.cardFaceImg === card2.cardFaceImg) {

      card1.isMatch = true;
      card2.isMatch = true;

      gameState.numMatched++;

      gameState.flippedCards = [];

      gameState.waiting = false;

    } 
    
    // NO MATCH
    else {

      setTimeout(() => {

        card1.flip();
        card2.flip();

        gameState.flippedCards = [];

        gameState.waiting = false;

      }, 1000);
    }
  }
}


// CARD CLASS

class Card {

  constructor(x, y, cardFaceImg) {

    this.x = x;
    this.y = y;

    this.width = 80;
    this.height = 100;

    this.face = DOWN;

    this.cardFaceImg = cardFaceImg;

    this.isMatch = false;
  }

  show() {

    if (this.face === UP || this.isMatch) {

      fill('#aaa');

      rect(
        this.x,
        this.y,
        this.width,
        this.height,
        10
      );

      image(
        this.cardFaceImg,
        this.x,
        this.y
      );

    } else {

      fill('rgb(200, 0, 0)');

      rect(
        this.x,
        this.y,
        this.width,
        this.height,
        10
      );

      image(
        cardback,
        this.x,
        this.y
      );
    }
  }

  didHit(mouseX, mouseY) {

    if (
      mouseX >= this.x &&
      mouseX <= this.x + this.width &&
      mouseY >= this.y &&
      mouseY <= this.y + this.height
    ) {

      

      return true;

    } else {

      return false;
    }
  }

  flip() {

    if (this.face === DOWN) {

      this.face = UP;

    } else {

      this.face = DOWN;
    }
  }
}

// shuffle

function shuffleArray(array) {

  let counter = array.length;

  while (counter > 0) {

    const idx = Math.floor(Math.random() * counter);

    counter--;

    const temp = array[counter];

    array[counter] = array[idx];

    array[idx] = temp;
  }

  return array;
}

function mouseWheel(event) {

  if (fileWindowOpen) {

    scrollY += event.delta;

    // prevent overscrolling
    scrollY = constrain(
      scrollY,
      0,
      longImage.height - 660
    );
  }
}