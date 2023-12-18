const boxes = document.querySelectorAll("[data-cell]");
let circleTurn = true

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", handleClick, { once: true });
}
console.log(boxes);

function handleClick(e) {
  const clickedBox = e.target;

  circleTurn = !circleTurn


  if (circleTurn === false) {
    clickedBox.innerHTML = 'x'
  } else {
    clickedBox.innerHTML = 'o'
  }
}

