const gameBoard = (() => {
    const board = [
        ["O", "X", "O"],
        ["O", "O", "X"],
        ["X", "O", "O"],
    ];

    return {
        board,
    };
})();

const displayController = (() => {
    const boardButtons = document.querySelectorAll("button");

    function displayBoard() {
        boardButtons.forEach((boardButton, index) => {
            // Get 2D array index from 1D array
            let x = Math.floor(index / 3);
            let y = index % 3;
            boardButton.textContent = gameBoard.board[x][y];
        });
    }

    boardButtons.forEach((boardButton, index) => {
        boardButton.addEventListener("click", () => {
            // Input player move
            // Update Array
            // Refresh DOM board from array data
            // Check for winners
            console.log("Move");
        });
    });

    return {
        displayBoard,
    };
})();

displayController.displayBoard();
