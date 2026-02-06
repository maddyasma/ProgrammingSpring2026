function setup() {
    createCanvas(600,600);
}
function createTile(originX, originY, primaryColor, secondaryColor,triangleColorOne){
    translate(originX, originY);
    noStroke();
    fill(primaryColor);
    rect(0,0,200,200);
    fill(secondaryColor);
    square(70, 70, 70);
    fill(triangleColorOne);
    triangle(70, 70, 105, 40, 140, 70);
    triangle(140, 70, 170, 105, 140, 140);
    triangle(70, 140, 140, 140, 105, 170);
    triangle(70, 140, 40, 105, 70, 70);
    fill('lightyellow');
    triangle(70, 70, 70, 0, 105, 40);
    triangle(140, 0, 140, 70, 105, 40);
    triangle(140, 70, 200, 70, 170, 105);
    triangle(140, 140, 200, 140, 170, 105);
    triangle(140, 140, 140, 200, 105, 170);
    triangle(70, 140, 70, 200, 105, 170);
    triangle(70, 140, 0, 140, 40, 105);
    triangle(70, 70, 0, 70, 40, 105);
}

function draw() {
    createTile(0,0,'#526AF2','#F2B705','#025930');
    createTile(0,200,'#05A65B','#F24405','#F2B705');
    createTile(0,200,'#526AF2','#F2B705','#025930');
    createTile(200,-400,'#F24405','#025930','#526AF2');
    createTile(0,200,'#526AF2','#F2B705','#025930');
    createTile(0,200,'#F24405','#025930','#526AF2');
    createTile(200,-400,'#526AF2','#F2B705','#025930');
    createTile(0,200,'#05A65B','#F24405','#F2B705');
    createTile(0,200,'#526AF2','#F2B705','#025930');
}



// function setup() {
//     createCanvas(200,200);
// }
// function createTile(){
//     translate(0,0);
//     noStroke();
//     fill('lightblue');
//     rect(0,0,200,200);
//     fill('maroon');
//     square(70, 70, 70);
//     fill('orange');
//     triangle(70, 70, 105, 40, 140, 70);
//     triangle(140, 70, 170, 105, 140, 140);
//     triangle(70, 140, 140, 140, 105, 170);
//     triangle(70, 140, 40, 105, 70, 70);
//     fill('lightyellow');
//     triangle(70, 70, 70, 0, 105, 40);
//     triangle(140, 0, 140, 70, 105, 40);
//     triangle(140, 70, 200, 70, 170, 105);
//     triangle(140, 140, 200, 140, 170, 105);
//     triangle(140, 140, 140, 200, 105, 170);
//     triangle(70, 140, 70, 200, 105, 170);
//     triangle(70, 140, 0, 140, 40, 105);
//     triangle(70, 70, 0, 70, 40, 105);
// }
// function draw() {
//     createTile();
// }