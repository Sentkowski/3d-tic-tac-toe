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

    const clearBoard = () => {
        gameLevels = [
            new Array(9).fill(null),
            new Array(9).fill(null),
            new Array(9).fill(null),
        ];
    }

    const checkIfWithinLevel = (start, dist) => start + dist * 2 < 9;
    const checkIfWithinLevels = (start, dist) => Math.floor((start + dist) / 9) === 1
        && Math.floor((start + dist * 2) / 9) === 2;
    const checkIfDiffRows = (start, dist) => (Math.floor(start / 3) === 0
        && Math.floor((start + dist) / 3) === 1
        && Math.floor((start + 2 * dist) / 3) === 2);
    const checkIfSameRow = (start, dist) => (
           Math.floor((start + dist) / 3) === Math.floor(start / 3)
        && Math.floor((start + 2 * dist) / 3) === Math.floor(start / 3));
    const checkIfDiffLevels = (start, dist) => (
        Math.floor(((start + dist) % 9) / 3) === Math.floor(start / 3)
        && Math.floor(((start + 2 * dist) % 18) / 3) === Math.floor(start / 3)
        && Math.floor(((start + 2 * dist) % 18) / 3) === Math.floor(((start + dist) % 9) / 3));
    const checkIfAcrossLevels = (start, dist) => (
           Math.floor(((start + dist) % 9) / 3) !== Math.floor(start / 3)
        && Math.floor(((start + 2 * dist) % 18) / 3) !== Math.floor(start / 3)
        && Math.floor(((start + 2 * dist) % 18) / 3) !== Math.floor(((start + dist) % 9) / 3))
        
    const onLevelDistances = {
        right: {
            dist: 1,
            req: checkIfSameRow,
        },
        down: {
            dist: 3,
            req: checkIfDiffRows,
        },
        diag: {
            dist: 4,
            req: checkIfDiffRows,
        },
        diagBack: {
            dist: 2,
            req: checkIfDiffRows,
        }
    }

    const crossLevelDistances = {
        down: {
            dist: 9,
            req: checkIfDiffLevels,
        },
        diagDown: {
            dist: 12,
            req: checkIfAcrossLevels,
        },
        diagRight: {
            dist: 10,
            req: checkIfDiffLevels,
        },
        diagDiag: {
            dist: 13,
            req: checkIfAcrossLevels,
        },
        diagLeft: {
            dist: 8,
            req: checkIfDiffLevels,
        },
        diagUp: {
            dist: 6,
            req: checkIfAcrossLevels,
        },
        diagUpLeft: {
            dist: 5,
            req: checkIfAcrossLevels,
        },
        diagDownLeft: {
            dist: 11,
            req: checkIfAcrossLevels,
        }
    }

    const checkOnLevelWin = (level) => {
        for (let i = 0; i < level.length; i++) {
            if (!level[i]) continue;
            for (let dir in onLevelDistances) {
                const toCheck = onLevelDistances[dir];
                if (!toCheck.req(i, toCheck.dist) || !checkIfWithinLevel(i, toCheck.dist)) {
                    continue;
                } else if (level[i] === level[i + toCheck.dist]
                           && level[i] === level[i + toCheck.dist * 2]) {
                    const winningCombination = [i, i + toCheck.dist, i + toCheck.dist * 2];
                    return winningCombination;
                }
            }
        }
    }

    const checkAcrossLevelWin = gameLevels => {
        const merged = [].concat(...gameLevels);
        const firstLevel = gameLevels[0];
        for (let i = 0; i < firstLevel.length; i++) {
            if (!firstLevel[i]) continue;
            for (let dir in crossLevelDistances) {
                const toCheck = crossLevelDistances[dir];
                if (!toCheck.req(i, toCheck.dist) || !checkIfWithinLevels(i, toCheck.dist)) {
                    continue;
                } else if (merged[i] === merged[i + toCheck.dist]
                           && merged[i] === merged[i + toCheck.dist * 2]) {
                    const winningCombination = [i, i + toCheck.dist, i + toCheck.dist * 2];
                    return winningCombination;
                }
            }
        }
    }
    
    const checkWin = () => {
        for (let level of gameLevels) {
            if (checkOnLevelWin(level)) {
                return checkOnLevelWin(level).map(square => square + gameLevels.indexOf(level) * 9);
            }
        }
        if (checkAcrossLevelWin(gameLevels)) {
            return checkAcrossLevelWin(gameLevels);
        } else {
            return false;
        }
    };

    return { checkWin, insertMove, clearBoard }
})();

export default gameBoard;