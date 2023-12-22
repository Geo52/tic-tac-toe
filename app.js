const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const winMsg = document.querySelector("[win-msg]");

const player1 = "x";
const player2 = "o";

let boardState = Array(9).fill(null);

let circlesTurn = true;
const board = Array.from(document.querySelectorAll("[data-cell]"));

// add event listener to each div
for (let i = 0; i < board.length; i++) {
  const element = board[i];
  element.addEventListener("click", handleClick, { once: true });
}

function handleClick(e) {
  const clickedBox = e.target;
  const clickedBoxIndex = board.indexOf(clickedBox);

  // x goes first
  circlesTurn = !circlesTurn;

  // alternate x and 0
  // updates the state of the game
  if (circlesTurn) {
    clickedBox.textContent = player2;
    boardState[clickedBoxIndex] = player2;
  } else {
    clickedBox.textContent = player1;
    boardState[clickedBoxIndex] = player1;
  }

  // check win for x
  if (checkWin(player1)) {
    winMsg.textContent = "X won";
    // check win for o
  } else if (checkWin(player2)) {
    winMsg.textContent = "O won";
  }

  // check draw
  if (full(boardState)) {
    winMsg.textContent = "DRAW";
  }
}

// compare winning combos against board state
function checkWin(player) {
  for (let i = 0; i < winningCombinations.length; i++) {
    const currentCombo = winningCombinations[i];
    let isWin = true;

    // check if there is a player at each index listed inside currentCombo
    for (let i = 0; i < currentCombo.length; i++) {
      const checkIndex = currentCombo[i];

      if (boardState[checkIndex] !== player) {
        isWin = false;
        break;
      }
    }
    if (isWin) {
      return true;
    }
  }
  return false;
}

function full(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === null) {
      return false;
    }
  }

  return true;
}
