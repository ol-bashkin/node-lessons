const colors = require("colors");
const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suit = ['♠','♣','♦','♥']

let deck = [];

suit.forEach((suitElement) => {
  cards.forEach((cardsElement) => {
    deck.push(cardsElement + suitElement)
  })
});
  
let hand = new Array(deck.length);

hand.fill(' ');

hand.forEach((el, i) => {
  hand[i] = deck.splice(Math.floor(Math.random() * (deck.length - 1) + 1), 1)
});

if (argv.l) {
  const 
}