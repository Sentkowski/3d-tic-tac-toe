import gameBoard from './gameBoard.js';
import gameDisplayer from './gameDisplayer.js';
import Player from './Player';
import interfaceController from './interfaceController.js';
import boardExpander from './boardExpander.js';

const gameFlowController = (function () {

    const playerOne = Player('First Player', 'X');
    const playerTwo = Player('Second Player', 'O');

    let currPlayer = null;

    let gameFinished = false;

    let gameSize = 3;

    let gameStarted = false;

    const getCurrPlayer = () => currPlayer;

    const getGameSize = () => gameSize;

    const getGameStarted = () => gameStarted;

    function _nextPlayer() {
        if (currPlayer === null) {
            currPlayer = (Math.random() > 0.5) ? playerTwo : playerOne;
        } else {
            currPlayer = (currPlayer === playerOne) ? playerTwo : playerOne;
        }
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
        gameFinished = false;
        gameStarted = true;
        currPlayer = null;
        const squares = document.querySelectorAll(".square");
        squares.forEach((square, i) => {
            square.addEventListener('click', () => handleSquareClick(i));
        });
        gameDisplayer.toggleActive();
        _nextPlayer();
    }

    const handleSquareClick = (position) => {
        if (gameFinished) return;
        if (gameBoard.insertMove(currPlayer.getMark(), position) !== false) {
            gameDisplayer.markSquare(currPlayer.getMark(), position);
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

    function expandGame() {
        gameSize = 4;
        gameDisplayer.resetSquares();
        gameBoard.gameResize();
        boardExpander.expand();
    }

    function shrinkGame() {
        gameSize = 3;
        gameDisplayer.resetSquares();
        gameBoard.gameResize();
        boardExpander.shrink();
    }

    const getPlayers = () => {
        return [playerOne, playerTwo];
    }

    return { gameInit, clearGame, getPlayers, getCurrPlayer, expandGame, getGameSize, getGameStarted, shrinkGame }
})();

export default gameFlowController;
