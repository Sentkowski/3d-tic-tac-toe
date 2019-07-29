// (function() {
//     const board = document.querySelector(".game-board");
//     const levels = document.querySelectorAll(".level");
//     levels.forEach(level => {
//         level.addEventListener('mouseover', (e) => {
//             board.style.perspectiveOrigin = `center ${level.dataset.position}`;
//         }, false);
//     });
// })();

const gameBoard = (function () {
    let gameLevels = [
        new Array(9).fill(null),
        new Array(9).fill(null),
        new Array(9).fill(null),
    ];

    const insertMove = (playerMark, level, square) => {
        if (gameLevels[level][square] !== null) {
            return false;
        }
        gameLevels[level][square] = playerMark;
    }

    const checkIfWithinLevel = (start, dist) => start + dist * 2 < 9;
    const checkIfWithinGame = (start, dist) => start + dist * 2 < 27;
    const checkIfDiffRows = (start, dist) => (Math.floor(start / 3) === 0
        && Math.floor((start + dist) / 3) === 1
        && Math.floor((start + 2 * dist) / 3) === 2);
    const checkIfSameRow = (start, dist) => (Math.floor(start / 3) === 0
        && Math.floor((start + dist) / 3) === 0
        && Math.floor((start + 2 * dist) / 3) === 0);

        
    const onLevelDistances = {
        right: {
            dist: 1,
            requirements: [
                checkIfWithinLevel,
                checkIfSameRow,
            ]
        },
        down: {
            dist: 3,
            requirements: [
                checkIfWithinLevel,
                checkIfDiffRows,
            ]
        },
        diag: {
            dist: 4,
            requirements: [
                checkIfWithinLevel,
                checkIfDiffRows,
            ]
        },
        diagBack: {
            dist: 2,
            requirements: [
                checkIfWithinLevel,
                checkIfDiffRows,
            ]
        }
    }

    const checkOnLevelWin = (level) => {
        for (let i = 0; i < level.length; i++) {
            if (!level[i]) continue;
    toCheckLoop:
            for (let dir in onLevelDistances) {
                const toCheck = onLevelDistances[dir];
                for (let req of toCheck.requirements) {
                    if (!req(i, toCheck.dist)) continue toCheckLoop;
                }
                if (level[i] === level[i + toCheck.dist]
                    && level[i] === level[i + toCheck.dist * 2]) return level[i];
            }
        }
    }

    const crossLevelDistances = {
        down: 9,
        diagDown: 12,
        diagRight: 10,
        diagDiag: 13,
        diagLeft: 8,
        diagUp: 6,
    }
    
    const checkWin = () => {
        for (let level of gameLevels) {
            if (checkOnLevelWin(level)) {
                return checkOnLevelWin(level);
            }
        }
    };

    return { checkWin, insertMove }
})();


const gameDisplayController = (function () {
    const markSquare = (playerMark, level, square) => {
        const chosen = document.querySelectorAll(".square button")[level * 9 + square];
        chosen.classList.add(`marked-${playerMark}`);
        chosen.textContent = playerMark;
    }
    return { markSquare };
})();


const gameFlowController = (function () {

    let currPlayer = 'X';

    function _nextPlayer() {
        currPlayer = (currPlayer === 'X') ? 'O' : 'X';
    }

    const squares = document.querySelectorAll(".square");
    squares.forEach((square, i) => {
        const level = Math.floor(i / 9);
        const position = i - level * 9;
        square.addEventListener('click', () => {
            if (gameBoard.insertMove(currPlayer, level, position) !== false) {
                gameDisplayController.markSquare(currPlayer, level, position);
                _nextPlayer();
                console.log(gameBoard.checkWin())
            }
        });
    });
})();

(function () {
    let curr = 0;

    _setPerspective = (delta) => {
        curr += delta;
        curr = Math.min(curr, 1000);
        curr = Math.max(curr, -200);
        const board = document.querySelector(".game-board");
        board.style.perspectiveOrigin = `center ${curr}px`;
    }

    const _scrollHandler = (e) => {
        _setPerspective(e.deltaY);
    }

    document.addEventListener('wheel', _scrollHandler);
})();