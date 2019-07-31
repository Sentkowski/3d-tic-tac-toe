import winningPositions from "./winningPositions";

const gameBoard = (function () {

    let gameSize = 3;
    let gameLevels = new Array(gameSize**3).fill(null);
    let winChecker = winningPositions(gameSize);

    const insertMove = (playerMark, square) => {
        if (gameLevels[square] !== null) {
            return false;
        }
        gameLevels[square] = playerMark;
    }

    const clearBoard = () => {
        gameLevels = new Array(gameSize**3).fill(null);
    }
    
    const checkWin = () => {
        if (winChecker.checkLevels(gameLevels)) {
            return winChecker.checkLevels(gameLevels);
        }
    };

    const gameResize = () => {
        const newSize = (gameSize === 3) ? 4 : 3;
        gameSize = newSize;
        winChecker = winningPositions(newSize);
        clearBoard();
    }

    return { checkWin, insertMove, clearBoard, gameResize }
})();

export default gameBoard;