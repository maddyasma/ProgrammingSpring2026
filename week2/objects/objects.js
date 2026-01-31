let myGames = [
{ name: "Animal Crossing", players: "1", type: "video game", rating: "9/10"},
{ name: "Balder's Gate", players: "4", type: "video game", rating: "8/10"},
{ name: "Fall Out New Vegas", players: "1", type: "video game", rating: "7/10"},
]
console.log(myGames);

let pickOne = prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game.");
let promptAnswer = Number(pickOne)-1;
window.alert ("you got" + 
myGames[promptAnswer].name + ", a" + 
myGames[promptAnswer].players + " player game. It's a " + 
myGames[promptAnswer].type + "which I gave a rating of " + 
myGames[promptAnswer].rating + "."
);
