import gameBoard from './gameBoard.js';
import gameDisplayer from './gameDisplayer.js';

const gameFlowController = (function () {

    let currPlayer = 'X';

    function _nextPlayer() {
        currPlayer = (currPlayer === 'X') ? 'O' : 'X';
    }

    function clearGame() {
        gameBoard.clearBoard();
        gameDisplayer.resetSquares();
    }

    const gameInit = () => {
        const squares = document.querySelectorAll(".square");
        squares.forEach((square, i) => {
            const level = Math.floor(i / 9);
            const position = i - level * 9;
            square.addEventListener('click', () => {
                if (gameBoard.insertMove(currPlayer, level, position) !== false) {
                    gameDisplayer.markSquare(currPlayer, level, position);
                    _nextPlayer();
                    const winResults = gameBoard.checkWin();
                    if (winResults) {
                        gameDisplayer.announceWinner(winResults);
                    }
                }
            });
        });
    }

    return { gameInit, clearGame }
})();

export default gameFlowController;
