const gameBoard = (() => {
  const board = [
    ['O', 'X', 'O'],
    ['O', 'O', 'X'],
    ['X', 'O', 'O'],
  ];

  return {
    board,
  };
})();

const displayController = (() => {
  const boardButtons = document.querySelectorAll('button');

  function displayBoard() {
    boardButtons.forEach((boardButton, index) => {
      // Get 2D array index from 1D array
      const x = Math.floor(index / 3);
      const y = index % 3;
      boardButton.textContent = gameBoard.board[x][y];
    });
  }

  function buttonClicked() {
    // Input player move
    // Update Array
    // Refresh DOM board from array data
    // Check for winners
    console.log('Move');
  }

  function registerButtons() {
    boardButtons.forEach((boardButton) => {
      boardButton.addEventListener('click', buttonClicked, {
        once: true,
      });
    });
  }

  return {
    displayBoard,
    registerButtons,
  };
})();

displayController.displayBoard();
displayController.registerButtons();
