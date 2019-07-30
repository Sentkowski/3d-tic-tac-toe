import gameBoard from './gameBoard.js';
import gameDisplayer from './gameDisplayer.js';
import Player from './Player';
import interfaceController from './interfaceController.js';

const gameFlowController = (function () {

    const playerOne = Player('First Player', 'X');
    const playerTwo = Player('Second Player', 'O');

    let currPlayer = null;

    let gameFinished = false;

    const getCurrPlayer = () => currPlayer;

    function _nextPlayer() {
        currPlayer = (currPlayer === playerOne) ? playerTwo : playerOne;
        interfaceController.showNextPlayer(currPlayer.getName(), currPlayer.getMark());
    }

    function clearGame() {
        gameBoard.clearBoard();
        gameDisplayer.resetSquares();
        currPlayer = null;
        gameFinished = false;
        _nextPlayer();
    }

    const gameInit = () => {
        const squares = document.querySelectorAll(".square");
        squares.forEach((square, i) => {
            const level = Math.floor(i / 9);
            const position = i - level * 9;
            square.addEventListener('click', () => handleSquareClick(level, position));
        });
        setTimeout(() => {
            _nextPlayer();
        }, 600);
    }

    const handleSquareClick = (level, position) => {
        if (gameFinished) return;
        if (gameBoard.insertMove(currPlayer.getMark(), level, position) !== false) {
            gameDisplayer.markSquare(currPlayer.getMark(), level, position);
            const winResults = gameBoard.checkWin();
            if (winResults) {
                currPlayer.addWin();
                gameDisplayer.announceWinner(winResults);
                interfaceController.appendScore();
                interfaceController.announceWinner(currPlayer.getName(), currPlayer.getMark());
                gameFinished = true;
            } else {
                _nextPlayer();
            }
        }
    }

    const getPlayers = () => {
        return [playerOne, playerTwo];
    }

    return { gameInit, clearGame, getPlayers, getCurrPlayer }
})();

export default gameFlowController;
