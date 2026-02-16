const circleDiameter = 100;
// let circleX = 200;
// let circleY = 300;
let startingX = 200;
let startingY = 100;
let myRectangles = [];
let startingId = 0;
function setup () {
    rectMode(CENTER);
    createCanvas(1000, 1000);
    background(0);
    for (let k = 0; k < 2; k++) {
        for (let i = 0; i < 4; i++) {
            rect(startingX, startingY, circleDiameter, circleDiameter);
            myRectangles.push({ x: startingX, y: startingY, id: startingId });
            startingX += 150;
            startingId++;
        }
        startingY += 150;
        startingX = 200;
    }
    
    console.log(myCircles);
}

function mousePressed() {
    for (let j = 0; j < myRectangles.length; j++) {
        let distance = dist(mouseX, mouseY, myRectangles[j].x, myRectangles[j].y);
        if (distance < circleDiameter / 2) {
            console.log('card has been clicked', myRectangles[j].id);
        }
    }
}