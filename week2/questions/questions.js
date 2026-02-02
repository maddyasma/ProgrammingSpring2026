let myQuestion = [
{ question: "What animal breathes through its butt?",
    answer: "Turtle",},
{ question: "How many noses does a slug have?",
    answer: "Four",},
{ question: "What do you call a group of porcupines?",
    answer: "A prickle",},
];
console.log(myQuestion);

const randomIndex = Math.floor(Math.random() * myQuestion.length);
let triviaQuestion = myQuestion[randomIndex];
let userAnswer = prompt(triviaQuestion.question);
window.alert("You answered " + userAnswer + "." + "The right answer is " + triviaQuestion.answer + "!");

// let pickOne = prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game.");

// window.alert ("The correct answer is" + 
// myGames[promptAnswer].name + ", a" + 
// myGames[promptAnswer].players + " player game. It's a " + 
// myGames[promptAnswer].type + "which I gave a rating of " + 
// myGames[promptAnswer].rating + "."
// );

