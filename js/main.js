const app = document.createElement('div');
app.classList.add('app');

const header = document.createElement('header');
header.classList.add('header');

const title = document.createElement('h1');
title.textContent = 'Memory Game';

const newGameButton = document.createElement('button');
newGameButton.classList.add('new-game-button');
newGameButton.type = 'button';
newGameButton.textContent = 'New Game';

const leaderboardButton = document.createElement('button');
leaderboardButton.classList.add('leaderboard-button');
leaderboardButton.type = 'button';
leaderboardButton.textContent = 'Leaderboard';

const buttons = document.createElement('div');
buttons.classList.add('header-buttons');

buttons.append(newGameButton, leaderboardButton);
header.append(title, buttons);

const gameInfo = document.createElement('div');
gameInfo.classList.add('game-info');

const movesInfo = document.createElement('p');
movesInfo.textContent = 'Moves: 0';

const pairsInfo = document.createElement('p');
pairsInfo.textContent = 'Pairs: 0 / 8';

gameInfo.append(movesInfo, pairsInfo);

const gameBoard = document.createElement('main');
gameBoard.classList.add('game-board');

app.append(header, gameInfo, gameBoard);
document.body.append(app);

let firstCard = null;
let secondCard = null;
let moves = 0;
let foundPairs = 0;
let isLocked = false;
let mismatchTimeout = null;

/* Create Cards */

const cards = cardImages.flatMap((card, index) => [
  { id: `${index}-1`, pairId: card.id, image: card.image },
  { id: `${index}-2`, pairId: card.id, image: card.image },
]);

/* Shuffle Cards */

function shuffleCards(cards) {
  for (let i = cards.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [cards[i], cards[randomIndex]] = [cards[randomIndex], cards[i]];
  }

  return cards;
}

shuffleCards(cards);



/* Create Cards */

function createCard(cardData) {
  const card = document.createElement('button');

  card.type = 'button';
  card.classList.add('card');

  const cardImage = document.createElement('img');

  cardImage.src = cardData.image;
  cardImage.alt = 'Cat card';
  cardImage.classList.add('card-image');

  card.append(cardImage);

  card.addEventListener('click', () => {
    if (isLocked) {
      return;
    }

    if (card === firstCard || card === secondCard) {
      return;
    }

    card.classList.add('open');

    if (!firstCard) {
      firstCard = card;
      return;
    }

    secondCard = card;
    moves += 1;
    movesInfo.textContent = `Moves: ${moves}`;

    if (firstCard.dataset.pairId === secondCard.dataset.pairId) {
        foundPairs += 1;
        pairsInfo.textContent = `Pairs: ${foundPairs} / 8`;

        firstCard = null;
        secondCard = null;
        return;
    }

    isLocked = true;

    mismatchTimeout = setTimeout(() => {
        firstCard.classList.remove('open');
        secondCard.classList.remove('open');

        firstCard = null;
        secondCard = null;
        isLocked = false;
        mismatchTimeout = null;
    }, 1000);
  });

  card.dataset.pairId = cardData.pairId;

  return card;
}

cards.forEach((cardData) => {
  const card = createCard(cardData);
  gameBoard.append(card);
});