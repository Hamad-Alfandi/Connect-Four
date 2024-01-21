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
} //for loop for init empty board

//check the winner function
const checkWinner = () => {
  //console log if four neighbor are same either =1 or =2
  let isWinningMove = false
  //horizontal
  
  for(let c=0 ;c<6 ;c++){
  for (let r = 0; r < 4; r++) {
    // console.log(`check r:${r} c:${c}`)
    if (
      board[c][r] === 1 &&
      board[c][r+1] === 1 &&
      board[c][r+2] === 1 &&
      board[c][r+3] === 1
    ) {
      isWinningMove = true
      console.log('player 1 win')
      return isWinningMove
    }
   else if (
      board[c][r] === 2 &&
      board[c][r+1] === 2 &&
      board[c][r+2] === 2 &&
      board[c][r+3] === 2
    ) {
      isWinningMove = true
      console.log('player 2 win')
      return isWinningMove
    }
  }
}
  //vertical
  // for (let j = 0; j <= 6; j += 4) {
  //   if (
  //     board[j][3] !== 0 &&
  //     board[j][3] === board[j + 1][2] &&
  //     board[j + 1][2] === board[j + 2][1] &&
  //     board[j + 2][1] === board[j + 3][0]
  //   ) {
  //     isWinningMove = true
  //     return isWinningMove
  //   }
  // }

  //check diagonals
  // if((board[0][0]===board[1][1] && board[1
  //   [1]===board[2][2] && board[2][2]===board
  //   [3][3]) || (board[0][3]===board[1][
  //     2] && board[1][2]===board[2][1] && board[
  //       2][1]===board[3][0])){
  //         isWinningMove=true
  //         }
  //         if(!isWinningMove){
  //           return false
  //           }
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
