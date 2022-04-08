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

console.log(deck.cards[0].suit);

let score = 0;

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
  cleanBeforeRound();
  console.log(deck.cards[0]);
}

const diamondCard = () => {
  const computerCard = deck.pop();
  if (deck.numberOfCards === 0) {
    startGame();
  }
  if (computerCard.suit === '♦') {
    cleanBeforeRound();
    score += 4;
    text.innerText = `You won! Score:${score}`;
    computerCardSlot.appendChild(computerCard.getHTML());
  } else {
    cleanBeforeRound();
    score -= 1;
    text.innerText = `You lost! Score:${score}`;
    computerCardSlot.appendChild(computerCard.getHTML());
  }
  console.log(deck.cards[0].suit);
};

const heartCard = () => {
  const computerCard = deck.pop();
  if (deck.numberOfCards === 0) {
    startGame();
  }
  if (computerCard.suit === '♥') {
    cleanBeforeRound();
    score += 4;
    text.innerText = `You won! Score:${score}`;
    computerCardSlot.appendChild(computerCard.getHTML());
  } else {
    cleanBeforeRound();
    score -= 1;
    text.innerText = `You lost! Score:${score}`;
    computerCardSlot.appendChild(computerCard.getHTML());
  }
  console.log(deck.cards[0].suit);
};

const spadeCard = () => {
  const computerCard = deck.pop();
  if (deck.numberOfCards === 0) {
    startGame();
  }
  if (computerCard.suit === '♠') {
    cleanBeforeRound();
    score += 4;
    text.innerText = `You won! Score:${score}`;
    computerCardSlot.appendChild(computerCard.getHTML());
  } else {
    cleanBeforeRound();
    score -= 1;
    text.innerText = `You lost! Score:${score}`;
    computerCardSlot.appendChild(computerCard.getHTML());
  }
  console.log(deck.cards[0].suit);
};

const clubCard = () => {
  const computerCard = deck.pop();
  if (deck.numberOfCards === 0) {
    startGame();
  }
  if (computerCard.suit === '♣') {
    cleanBeforeRound();
    score += 4;
    text.innerText = `You won! Score:${score}`;
    computerCardSlot.appendChild(computerCard.getHTML());
  } else {
    cleanBeforeRound();
    score -= 1;
    text.innerText = `You lost! Score:${score}`;
    computerCardSlot.appendChild(computerCard.getHTML());
  }
  console.log(deck.cards[0].suit);
};

listen(diamondButton, 'click', diamondCard);
listen(heartButton, 'click', heartCard);
listen(spadeButton, 'click', spadeCard);
listen(clubButton, 'click', clubCard);
listen(newGameButton, 'click', startGame);
