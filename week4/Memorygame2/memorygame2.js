function setup(){
    createCanvas(800,600);
    background(0);
    let myCard = new Card();
    myCard.show();
    
}

class Card {
    constructor(){
        this.x = 100;
        this.y = 100;
        this.width = 80;
        this.height = 100;
    }
    show () {
        fill('brown');
        rect(this.x, this.y, this.width, this.height, 10);
    }
}



// const rectWidth = 100;
// const rectHeight = 130;

// let startingX = 200;
// let startingY = 100;
// let myRects = [];
// let startingId = 0;
// function setup () {
//     rectMode(CENTER);
//     createCanvas(1000, 1000);
//     background(0);
//     for (let k = 0; k < 3; k++) {
//         for (let i = 0; i < 4; i++) {
//             rect(startingX, startingY, rectWidth, rectHeight);
//             myRects.push({ x: startingX, y: startingY, id: startingId });
//             startingX += 150;
//             startingId++;
//         }
//         startingY += 180;
//         startingX = 200;
//     }
    
//     console.log(myRects);
// }

// function mousePressed() {
//     for (let j = 0; j < myRects.length; j++) {
//         let distance = dist(mouseX, mouseY, myRects[j].x, myRects[j].y);
//         if (distance < rectWidth / 2) {
//             console.log('card has been clicked', myRects[j].id);
//         }
//     }
// }