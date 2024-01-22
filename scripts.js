const ROWS = 6
const COLS = 7

let currentPlayer = 2
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
} //for loop for init empty board

//check the winner function
const checkWinner = () => {
  //console log if four neighbor are same either =1 or =2
  let isWinningMove = false
  //horizontal
  //0 -> 5
  //0 -> 3
  // 00 10 20 30
  for (let c = 0; c < 6; c++) {
    for (let r = 0; r < 4; r++) {
      // console.log(`check r:${r} c:${c}`)
      if (
        (board[c][r] === 1 &&
          board[c][r + 1] === 1 &&
          board[c][r + 2] === 1 &&
          board[c][r + 3] === 1) ||
        (board[r][c] === 1 &&
          board[r + 1][c] === 1 &&
          board[r + 2][c] === 1 &&
          board[r + 3][c] === 1) //error for read more col & row than arr
      ) {
        isWinningMove = true
        console.log("player 1 win")
        return isWinningMove
      } else if (
        (board[c][r] === 2 &&
          board[c][r + 1] === 2 &&
          board[c][r + 2] === 2 &&
          board[c][r + 3] === 2) ||
        (board[r][c] === 2 &&
          board[r + 1][c] === 2 &&
          board[r + 2][c] === 2 &&
          board[r + 3][c] === 2) //error for read more col & row than arr
      ) {
        isWinningMove = true
        console.log("player 2 win")
        return isWinningMove
      }
    }
  }

  //check winner from diaglog 51 42 33 24/ 52 43 34 25/
  // const diagLogical = () => {
  //   for (let r = 5; r <= 2; r--) {
  //     if (
  //       board[r][r -4] === 1 &&
  //       board[r -1][r-3] === 1 &&
  //       board[r -2][r-2] === 1 &&
  //       board[r -3][r-1] === 1
  //     ) {
  //       isWinningMove = true
  //       console.log("diag log player 1")
  //       return isWinningMove
  //     }
  //   }
  // }

  const diagLogical = () => {
    // Check diagonally (top-left to bottom-right)

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 4; col++) {
        if (
          board[row][col] === 1 &&
          board[row + 1][col + 1] === 1 &&
          board[row + 2][col + 2] === 1 &&
          board[row + 3][col + 3] === 1
        ) {
          console.log("diag log player 1")
          return true
        }
      }
    }
 
  }
  diagLogical()
}

function handleCellClick(row, col) {
  const clickedRow = row
  const clickedCol = col

  // console.log(clickedRow)
  const changeCurrPlayer = () => {
    currentPlayer === 1 ? (currentPlayer = 2) : (currentPlayer = 1)
  } //changeCurrPlayer()

  // board[clickedRow][clickedCol] = currentPlayer

  const checkForEmptyCol = () => {
    if (board[0][clickedCol] === 1) {
      alert("column is full!, please choose another column (emoji)")
      return false
    } else {
      changeCurrPlayer()
      return true
    }
  }
  // changeCurrPlayer()
  // console.log(currentPlayer)

  //fn when user click col 1 will add 1 at first empty col
  if (checkForEmptyCol()) {
    for (let i = 5; i >= 0; i--) {
      //   //set 1 at last empty row
      if (board[i][clickedCol] === 0) {
        board[i][clickedCol] = currentPlayer

        let selectedCell = document.querySelector(`[data-row="${i}"][
            data-col="${clickedCol}"]`)
        selectedCell.classList.remove("empty")
        selectedCell.classList.add(`player${currentPlayer}`)
        // console.log(selectedCell)
        break
      }
    }

    checkWinner()
  }

  console.log(board)
} //handleCellClick()

renderBoard()
