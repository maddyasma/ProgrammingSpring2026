
const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100; 
let cards = [];
const gameState = {
    totalPairs: 0,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false,

};

let cardfaceArray = [];
let cardback;

function preload() {
    cardback = loadImage('images/cardback.png');
    cardfaceArray = [
        loadImage('images/card1.png'),
        loadImage('images/card2.png'),
        loadImage('images/card3.png'),
        loadImage('images/card4.png'),
        loadImage('images/card5.png'),
    ]
}

function setup(){
    createCanvas(800,600);
    background(0);
    let selectedFaces = [];
    for (let z = 0; z < 5; z++){
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
        cards.push(new Card(startingX, startingY, faceImage));
        startingX +=120;
    }  
    startingY += 150;
    startingX = 100;
}
}
function mousePressed() {
    for (let k = 0; k < cards.length; k++) {
        console.log('gameState', gameState);
        if(gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
}
}

class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 100;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }
    show () {
        if(this.face === UP || this.isMatch) {
            fill('#aaa');
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFaceImg,this.x, this.y);
        }
        else {
            fill('rgb(200, 0, 0)');
            rect(this.x, this.y, this.width, this.height, 10);
            image(cardback,this.x, this.y);
        }
    }
    didHit (mouseX,mouseY){
        if (mouseX >= this.x && mouseX <= this.x + this.width && 
            mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip();
            return true;
            }
        else {
            return false;
            }
    }
    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}
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