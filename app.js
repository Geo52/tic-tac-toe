const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// stores all the boxes from the html
const boxes = Array.from(document.querySelectorAll("[data-cell]"));
const winMessage = document.querySelector("[win-msg]");
// circle is always going to go second
let circleTurn = true;

const player1 = "x";
const player2 = "o";

// array to track the state of each box
let clickedBoxes = new Array(9).fill(null);

// adds event listener to each box
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", handleClick, { once: true });
}

// fires everytime a box is clicked
function handleClick(e) {
  const clickedBox = e.target;
  // gets the index of the box that was clicked from the boxes array
  const clickedBoxIndex = boxes.indexOf(clickedBox);

  circleTurn = !circleTurn;

  // populates board
  if (circleTurn === false) {
    clickedBox.textContent = player1;
    clickedBoxes[clickedBoxIndex] = player1;
  } else {
    clickedBox.textContent = player2;
    clickedBoxes[clickedBoxIndex] = player2;
  }

  if (checkWin(player1)) {
    console.log("X wins");
    winMessage.textContent = "X wins!";
  } else if (checkWin(player2)) {
    console.log("O wins");
    winMessage.textContent = "O wins!";
  }
}

// check if a user has won
// checking each winning combo against current state of clickedBox array
function checkWin(player) {
  for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
    const combination = WINNING_COMBINATIONS[i];
    let isWin = true;

    for (let j = 0; j < combination.length; j++) {
      const index = combination[j];
      if (clickedBoxes[index] !== player) {
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
