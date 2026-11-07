let currentPlayer = "X";
let gameOver = false;
let board = ["","","","","","","","",""];

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const cells = document.querySelectorAll(".cell");
cells.forEach(cell => {
    cell.addEventListener("click", handleClick);
});

function handleClick(event) {
    const index = event.target.getAttribute("data-index");
    if (board[index] === "" && !gameOver)
    {
        board[index] = currentPlayer;
        event.target.textContent = currentPlayer;
        if (checkWin)
        {
            alert(currentPlayer + "Победил!!!");
            gameOver = true;
        }
        else if (board.every(cell => cell !== ""))
        {
            alert("Ничья!");
            gameOver = true;
        }
        else 
        {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWin() {
    return winPatterns.some(pattern => {
        return pattern.every(index => board[index]) === currentPlayer;
    });
};