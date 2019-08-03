import gameBoard from "./gameBoard.js";
import boardStylesManager from "./boardStylesManager.js";
import Player from "./Player";
import interfaceController from "./interfaceController.js";
import boardExpander from "./boardExpander.js";

const gameFlowController = (function() {
  const playerOne = Player("First Player", "X");
  const playerTwo = Player("Second Player", "O");

  let currPlayer = null;
  let gameFinished = false;
  let gameSize = 3;
  let gameStarted = false;

  const getCurrPlayer = () => currPlayer;
  const getGameSize = () => gameSize;
  const getGameStarted = () => gameStarted;

  function _nextPlayer() {
    if (currPlayer === null) {
      currPlayer = Math.random() > 0.5 ? playerTwo : playerOne;
    } else {
      currPlayer = currPlayer === playerOne ? playerTwo : playerOne;
    }
    interfaceController.showNextPlayer(
      currPlayer.getName(),
      currPlayer.getMark()
    );
  }

  function clearGame() {
    gameBoard.clearBoard();
    boardStylesManager.resetSquares();
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
      square.addEventListener("click", () => handleSquareClick(i));
    });
    boardStylesManager.toggleActive();
    _nextPlayer();
  };

  const handleSquareClick = position => {
    if (gameFinished) return;
    if (gameBoard.insertMove(currPlayer.getMark(), position) !== false) {
      boardStylesManager.markSquare(currPlayer.getMark(), position);
      const winResults = gameBoard.checkWin();
      if (winResults) {
        currPlayer.addWin();
        boardStylesManager.announceWinner(winResults);
        interfaceController.appendScore();
        interfaceController.announceWinner(
          currPlayer.getName(),
          currPlayer.getMark()
        );
        gameFinished = true;
      } else {
        _nextPlayer();
      }
    }
  };

  function expandGame() {
    gameSize = 4;
    boardStylesManager.resetSquares();
    gameBoard.gameResize();
    boardExpander.expand();
    boardStylesManager.resetRotate();
  }

  function shrinkGame() {
    gameSize = 3;
    boardStylesManager.resetSquares();
    gameBoard.gameResize();
    boardExpander.shrink();
    boardStylesManager.resetRotate();
  }

  const getPlayers = () => {
    return [playerOne, playerTwo];
  };

  return {
    gameInit,
    clearGame,
    getPlayers,
    getCurrPlayer,
    expandGame,
    getGameSize,
    getGameStarted,
    shrinkGame
  };
})();

export default gameFlowController;
