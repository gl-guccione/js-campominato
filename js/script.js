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

// create a function that create an array with x random different numbers => arrayRandomNumbers(num)

// create a function that given an array, and a number check if that number is inside in that array => isInside(array, number)

// --------------------------------------------------------------------------------------------------------

// script

// generate an array with 16 random number between 1 and 100 without repetition

// ask the user a number between 1 and 100
// - if the number is inside the array "" the game end
// - else ask an other number (the user cannot use the number more than once)
// until the user reach the maximum of the "legit" numbers (100 - 16)

// at the end of the game, the game will alert the user the level that he has reached befor the end of the game
