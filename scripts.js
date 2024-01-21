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
      // console.log(cell)
      cell.setAttribute("data-row", row)
      cell.setAttribute("data-col", col)
      cell.addEventListener("click", () => {
        handleCellClick(row, col)
      })
      boardContainer.appendChild(cell)
    }
  }
}//for loop for init empty board

function handleCellClick(row, col) {
  const clickedRow = row
  const clickedCol = col

  // console.log(clickedRow)

  // board[clickedRow][clickedCol] = currentPlayer
  const checkForEmptyCol = () => {
    if (board[0][clickedCol] === 1) {
      alert("column is full!, please choose another column (emoji)")
    }
  }





  //fn when user click col 1 will add 1 at first empty col
  for (let i = 5; i >= 0; i--) {
    //   //set 1 at last empty row
    if (board[i][clickedCol] === 0) {
      board[i][clickedCol] = currentPlayer

          let selectedCell = document.querySelector(`[data-row="${i}"][
            data-col="${clickedCol}"]`)
            selectedCell.classList.remove("empty")
            selectedCell.classList.add(`player${currentPlayer}`)
            
            console.log(selectedCell)
      break
    }
  }

  const changeCurrPlayer = () => {
    currentPlayer === 1 ? (currentPlayer = 2) : (currentPlayer = 1)
  }//changeCurrPlayer()
  changeCurrPlayer()
  console.log(board)
}//handleCellClick()

renderBoard()
