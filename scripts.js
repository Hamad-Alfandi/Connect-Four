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
}

function handleCellClick(row, col) {
  const clickedRow = row
  const clickedCol = col

  // console.log(clickedRow)
  //fn when user click col 1 will add 1 at first empty col
//   if (!board[clickedRow][clickedCol]) {
//     board[clickedRow][clickedCol] = currentPlayer
//     // displayToken(clickedRow, clickedCol)
//     // checkForWin()
//     // changeCurrentPlayer()
//     } else {
//       alert('This spot is already occupied!')
//       }
//       console.log(board)

//if I click  any cell it at first col it will set 1 at the end of first col last empty row

// board[clickedRow][clickedCol] = currentPlayer
const checkForEmptyCol =()=>{
  if(board[0][clickedCol] === 1){
    alert('column is full!')
  
  }
}



  for(let i=5 ; i>=0 ; i--){
  //   //set 1 at last empty row
    if(board[i][clickedCol] ===0){
      board[i][clickedCol]=currentPlayer
      break
      }
        
  }

 


console.log(board)
}


























renderBoard()
