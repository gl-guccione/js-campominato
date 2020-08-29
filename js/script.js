// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50


// functions

// create a function that generate a random number => randomNumber(min, max)

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// create a function that given an array, and a number check if that number is inside that array => isInside(array, num)

function isInside(array, num) {
  if (array.indexOf(num) != -1) {
    return true;
  } else {
    return false;
  }
}

// create a function that create an array with x random DIFFERENT numbers => arrayRandomNumbers(num)

function arrayRandomNumbers(quantityElementGen, minNumGen, maxNumGen) {

  if (quantityElementGen > (maxNumGen - minNumGen + 1)) {
    return alert("ERROR");
  }

  var myArray = [];

  for (var i = 0; i < quantityElementGen; i++) {
    var tempRandomNumber = randomNumber(minNumGen, maxNumGen);

    while (isInside(myArray, tempRandomNumber)) {
      tempRandomNumber = randomNumber(minNumGen, maxNumGen);
    }

    myArray.push(tempRandomNumber);
  }

  return myArray;
}


// --------------------------------------------------------------------------------------------------------

// script

// ask the user the difficulty of the game
// "facile" == minNumGen = 1 maxNumGen = 100
// "media" == minNumGen = 1 maxNumGen = 80
// "difficile" == minNumGen = 1 maxNumGen = 50

alert("Ciao e benvenuto/a su Campo Minato")
var difficulty = prompt("Seleziona la difficoltà scrivendo \"facile\", \"media\" o \"difficile\"").toLowerCase();

while ((difficulty != "facile") && (difficulty != "media") && (difficulty != "difficile")) {
  difficulty = prompt("scrivi \"facile\", \"media\" o \"difficile\" per selezionare la difficoltà!!!").toLowerCase();
}

if (difficulty == "facile") {
  var maxNumGen = 100;
} else if (difficulty == "media") {
  var maxNumGen = 80;
} else if (difficulty == "difficile") {
  var maxNumGen = 50;
}

// generate an array with 16 random number between 1 and 100 without repetition

var bombsQuantity = 16;
var minNumGen = 1;
var bombsArray = arrayRandomNumbers(bombsQuantity, minNumGen, maxNumGen);

// ask the user a number between 1 and 100
// - if the number is inside the array "" the game end
// - else ask an other number (the user cannot use the number more than once)
// until the user reach the maximum of the "legit" numbers (100 - 16)
// at the end of the game, the game will alert the user the level that he has reached befor the end of the game

var userNumbers = [];
var game = true;

var i = 0;
while (game && (i < (maxNumGen - minNumGen + 1) - bombsQuantity)) {

  var userNumber = parseInt(prompt("inserisci un numero compreso tra " + minNumGen + " e " + maxNumGen));
  while ((userNumber < minNumGen) || (userNumber > maxNumGen) || isNaN(userNumber) || isInside(userNumbers, userNumber)) {
    if ((userNumber < minNumGen) || (userNumber > maxNumGen) || isNaN(userNumber)) {
      userNumber = parseInt(prompt("Il numero inserito non è compreso tra " + minNumGen + " e " + maxNumGen + "\ninserisci un numero compreso tra " + minNumGen + " e " + maxNumGen));
    } else if (isInside(userNumbers, userNumber)) {
      userNumber = parseInt(prompt("Hai già inserito questo numero\ninserisci un numero compreso tra " + minNumGen + " e " + maxNumGen));
    }
  }
  if (isInside(bombsArray, userNumber)) {
    alert("BOOOOOOOOM!!!")
    alert("Hai perso!!!\nSei arrivato al livello " + userNumbers.length);
    game = false;
  } else {
    alert("Sei riuscito ad evitare la bomba...");
    alert("Hai superato il " + (userNumbers.length + 1) + "° livello");
    userNumbers.push(userNumber);
  }
  i++;
}
if (game) {
  alert("Complimenti\nHai sconfitto il gioco!!!");
  alert("lo so che hai usato la console per leggere i numeri vietati...VERGOGNATI!!!");
}
