//select empty div and assign to a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');
//put an h1 inside of it
//create new element
const heading = document.createElement('h1');
heading.innerHTML = 'oooo you wanna click me so bad';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick (){
    console.log('heading clicked');
    document.body.style.backgroundColor = 'red';
}
