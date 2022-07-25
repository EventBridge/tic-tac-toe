const gameBoard = (() => {
    const board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];

    return {
        board,
    };
})();

const displayController = (() => {
    console.log(gameBoard.board);
})();
