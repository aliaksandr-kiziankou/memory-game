# Memory Game

A classic memory card game built with vanilla JavaScript, HTML, and CSS.

The goal of the game is to find all matching pairs of cards using as few moves as possible.

## Features

* 16 cards with 8 matching pairs.
* Cards are shuffled randomly when the game starts or restarts.
* Move counter.
* Found pairs counter.
* Cards automatically close after an unsuccessful match.
* The game temporarily locks while unmatched cards are visible.
* Victory modal with the final number of moves.
* New Game button to restart the game without reloading the page.
* Leaderboard with the best 10 results.
* Results are stored in `localStorage`.
* Leaderboard results are sorted by the number of moves and then by completion time.
* Modal windows can be closed using the Close button, clicking outside the modal, or pressing `Escape`.
* Responsive layout for different screen sizes.

## Technologies

* HTML5
* CSS3
* JavaScript (ES6+)
* DOM API
* LocalStorage API

No frameworks or external JavaScript libraries are used.

## Project Structure

```text
memory-game/
├── index.html
├── README.md
├── css/
│   ├── reset.css
│   └── style.css
├── js/
│   ├── cards.js
│   └── main.js
└── assets/
    └── cads/
        ├── 1.jpg
        ├── 2.jpg
        ├── 3.jpg
        ├── 4.jpg
        ├── 5.jpg
        ├── 6.jpg
        ├── 7.jpg
        └── 8.jpg
```

## How to Run

Clone the repository:

```bash
git clone <repository-url>
```

Open the project folder:

```bash
cd memory-game
```

Run the project using a local development server.

For example, in VS Code you can use the **Live Server** extension and open `index.html`.

The game will start automatically after the page loads.

Or simply use deploy link.

## Game Rules

1. The game contains 16 cards forming 8 matching pairs.
2. Click a card to reveal it.
3. Click another card to reveal it.
4. If the cards match, they remain open.
5. If they do not match, they are automatically closed after a short delay.
6. One move is counted when the second card is opened.
7. The game ends when all 8 pairs have been found.
8. The final result is added to the leaderboard.

## Author

Aliaksandr Kiziankou
