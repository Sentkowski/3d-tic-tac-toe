const gameDisplayer = (function () {
    const markSquare = (playerMark, level, square) => {
        const chosen = document.querySelectorAll(".square button")[level * 9 + square];
        chosen.classList.add(`marked-${playerMark}`);
        chosen.textContent = playerMark;
    }

    const announceWinner = (winComb) => {
        const squares = document.querySelectorAll(".square button");
        const squaresToHighlight = winComb.map(sqInd => squares[sqInd]);
        squaresToHighlight.forEach(sq => sq.classList.add('winning'));
    }

    const resetSquares = () => {
        const squares = document.querySelectorAll(".square button");
        squares.forEach(sq => {
            sq.className = "mark-button";
            sq.textContent = "";
        })
    }

    const toggleActive = () => {
        document.querySelector('.game-board').classList.toggle('deactivated');
    }

    return { markSquare, announceWinner, resetSquares, toggleActive };
})();

export default gameDisplayer;