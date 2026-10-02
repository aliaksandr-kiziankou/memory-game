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

  card.append(cardImage);

  return card;
}

cards.forEach((cardData) => {
  const card = createCard(cardData);
  gameBoard.append(card);
});