/* app.js */

import Deck from './deck';
import { select, listen } from './util';
import './style.css';

const computerCardSlot = select('.computer-card-slot');
const computerDeckElement = select('.computer-deck');
const diamondButton = select('.diamonds');
const heartButton = select('.hearts');
const spadeButton = select('.spades');
const clubButton = select('.clubs');
const newGameButton = select('.new-game');
const text = select('.text');
let deck = new Deck();
deck.shuffle();
// console.log(deck.cards[0]);
console.log(deck.cards[0].suit);

let score = 0;

// function refreshPage() {
//   window.location.reload();
// }

function updateDeckCount() {
  computerDeckElement.innerText = deck.numberOfCards;
}

function cleanBeforeRound() {
  computerCardSlot.innerHTML = '';
  text.innerText = '';
  updateDeckCount();
}

function startGame() {
  deck = new Deck();
  deck.shuffle();
  score = 0;
  console.log(deck.cards[0]);
  cleanBeforeRound();
}

const diamondCard = () => {
  if (deck.cards === undefined || deck.cards.length === 0) {
    startGame();
  }
  if (deck.cards[0].suit === '♦') {
    // console.log('You won!');
    cleanBeforeRound();
    score += 4;
    text.innerText = `You won! Score:${score}`;
    const computerCard = deck.pop();
    computerCardSlot.appendChild(computerCard.getHTML());
    console.log(deck.cards[0].suit);
  } else {
    // console.log('You lost!');
    cleanBeforeRound();
    score -= 1;
    text.innerText = `You lost! Score:${score}`;
    const computerCard = deck.pop();
    computerCardSlot.appendChild(computerCard.getHTML());
    console.log(deck.cards[0].suit);
  }
};

const heartCard = () => {
  if (deck.cards === undefined || deck.cards.length === 0) {
    startGame();
  }
  if (deck.cards[0].suit === '♥') {
    // console.log('You won!');
    cleanBeforeRound();
    score += 4;
    text.innerText = `You won! Score:${score}`;
    const computerCard = deck.pop();
    computerCardSlot.appendChild(computerCard.getHTML());
    console.log(deck.cards[0].suit);
  } else {
    // console.log('You lost!');
    cleanBeforeRound();
    score -= 1;
    text.innerText = `You lost! Score:${score}`;
    const computerCard = deck.pop();
    computerCardSlot.appendChild(computerCard.getHTML());
    console.log(deck.cards[0].suit);
  }
};

const spadeCard = () => {
  if (deck.cards === undefined || deck.cards.length === 0) {
    startGame();
  }
  if (deck.cards[0].suit === '♠') {
    // console.log('You won!');
    cleanBeforeRound();
    score += 4;
    text.innerText = `You won! Score:${score}`;
    const computerCard = deck.pop();
    computerCardSlot.appendChild(computerCard.getHTML());
    console.log(deck.cards[0].suit);
  } else {
    // console.log('You lost!');
    cleanBeforeRound();
    score -= 1;
    text.innerText = `You lost! Score:${score}`;
    const computerCard = deck.pop();
    computerCardSlot.appendChild(computerCard.getHTML());
    console.log(deck.cards[0].suit);
  }
};

const clubCard = () => {
  if (deck.cards === undefined || deck.cards.length === 0) {
    startGame();
  }
  if (deck.cards[0].suit === '♣') {
    // console.log('You won!');
    cleanBeforeRound();
    score += 4;
    text.innerText = `You won! Score:${score}`;
    const computerCard = deck.pop();
    computerCardSlot.appendChild(computerCard.getHTML());
    console.log(deck.cards[0].suit);
  } else {
    // console.log('You lost!');
    cleanBeforeRound();
    score -= 1;
    text.innerText = `You lost! Score:${score}`;
    const computerCard = deck.pop();
    computerCardSlot.appendChild(computerCard.getHTML());
    console.log(deck.cards[0].suit);
  }
};

listen(diamondButton, 'click', diamondCard);
listen(heartButton, 'click', heartCard);
listen(spadeButton, 'click', spadeCard);
listen(clubButton, 'click', clubCard);
listen(newGameButton, 'click', startGame);
