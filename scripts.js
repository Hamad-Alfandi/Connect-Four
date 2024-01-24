const ROWS = 6
const COLS = 7
let isWinningMove = false
let currentPlayer = 2
let board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
]

document.getElementById("turn").innerText = `Turn Player: 1`

function renderBoard() {
  const boardContainer = document.getElementById("connectFourBoard")
  boardContainer.innerHTML = ""

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cell = document.createElement("div")
      cell.classList.add("cell", "empty")
      cell.setAttribute("data-row", row)
      cell.setAttribute("data-col", col)
      if (isWinningMove === false) {
        cell.addEventListener("click", () => {
          handleCellClick(row, col)
        })
      }
      boardContainer.appendChild(cell)
    }
  }
} //for loop for init empty board

//check the winner function
const checkWinner = () => {
  const playerWin = () => {
    isWinningMove = true
    document.getElementById("winner").innerText = `Player ${currentPlayer} WIN`
    document.getElementById("winner").style.display = "block"
  }

  for (let c = 0; c < 6; c++) {
    for (let r = 0; r < 4; r++) {
      if (
        board[c][r] === 1 &&
        board[c][r + 1] === 1 &&
        board[c][r + 2] === 1 &&
        board[c][r + 3] === 1
      ) {
        playerWin()
        // return isWinningMove
      } else if (
        board[c][r] === 2 &&
        board[c][r + 1] === 2 &&
        board[c][r + 2] === 2 &&
        board[c][r + 3] === 2
      ) {
        playerWin()
      }
    }
  }
  //vertical
  for (let c = 0; c < 7; c++) {
    for (let r = 0; r < 3; r++) {
      if (
        board[r][c] === 1 &&
        board[r + 1][c] === 1 &&
        board[r + 2][c] === 1 &&
        board[r + 3][c] === 1
      ) {
        playerWin()
      } else if (
        board[r][c] === 2 &&
        board[r + 1][c] === 2 &&
        board[r + 2][c] === 2 &&
        board[r + 3][c] === 2
      ) {
        playerWin()
      }
    }
  }

  const dialog = () => {
    // Check dialog (top-left to bottom-right)
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 4; col++) {
        if (
          board[row][col] === 1 &&
          board[row + 1][col + 1] === 1 &&
          board[row + 2][col + 2] === 1 &&
          board[row + 3][col + 3] === 1
        ) {
          playerWin()
        } else if (
          board[row][col] === 2 &&
          board[row + 1][col + 1] === 2 &&
          board[row + 2][col + 2] === 2 &&
          board[row + 3][col + 3] === 2
        ) {
          playerWin()
        }
      }
    }

    for (let r = 0; r < 3; r++) {
      for (let c = 6; c > 2; c--) {
        if (
          board[r][c] == 1 &&
          board[r + 1][c - 1] == 1 &&
          board[r + 2][c - 2] == 1 &&
          board[r + 3][c - 3] == 1
        ) {
          playerWin()
        } else if (
          board[r][c] == 2 &&
          board[r + 1][c - 1] == 2 &&
          board[r + 2][c - 2] == 2 &&
          board[r + 3][c - 3] == 2
        ) {
          playerWin()
        }
      }
    }
  } //dialog()
  if (isWinningMove === false) {
    dialog()
  }
} //checkWinner()

function handleCellClick(row, col) {
  const clickedRow = row
  const clickedCol = col

  const changeCurrPlayer = () => {
    if (isWinningMove === false) {
      document.getElementById(
        "turn"
      ).innerText = `Turn Player: ${currentPlayer}`
      let changeColor = document.getElementById("turn-player")
      currentPlayer === 1
        ? (currentPlayer = 2) &&
          (changeColor.style.background =
            "radial-gradient(circle at 30% 30%, #ff6666, #cc0000)")
        : (currentPlayer = 1) &&
          (changeColor.style.background =
            "radial-gradient(circle at 30% 30%, #ffffcc, #cccc00)")
    }
  } //changeCurrPlayer()

  const checkForEmptyCol = () => {
    if (board[0][clickedCol] === 1 || board[0][clickedCol] === 2) {
      alert("column is full!, please choose another column (emoji)")
      return false
    } else {
      changeCurrPlayer()
      return true
    }
  } // changeCurrPlayer()

  if (checkForEmptyCol() && isWinningMove === false) {
    for (let i = 5; i >= 0; i--) {
      if (board[i][clickedCol] === 0) {
        board[i][clickedCol] = currentPlayer

        let selectedCell = document.querySelector(`[data-row="${i}"][
            data-col="${clickedCol}"]`)
        selectedCell.classList.remove("empty")
        selectedCell.classList.add(`player${currentPlayer}`)
        break
      }
    }
    checkWinner()
  }
} //handleCellClick()

if (isWinningMove === false) {
  renderBoard()
}
document.getElementById("reset").addEventListener("click", () => {
  location.reload()
})
