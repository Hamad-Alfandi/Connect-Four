const ROWS = 6
const COLS = 7

let currentPlayer = 1
let board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
]

function renderBoard() {
  const boardContainer = document.getElementById("connectFourBoard")
  boardContainer.innerHTML = ""

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cell = document.createElement("div")
      cell.classList.add("cell", "empty")
      console.log(cell)
      cell.setAttribute("data-row", row)
      cell.setAttribute("data-col", col)
      cell.addEventListener("click", () => {
        handleCellClick(row, col)
      })
      boardContainer.appendChild(cell)
    }
  }
}

function handleCellClick(row, col) {
  const clickedRow = row
  const clickedCol = col

  
}

renderBoard()
