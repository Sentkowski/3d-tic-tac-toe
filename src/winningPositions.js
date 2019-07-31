const winningPositions = (gameSize) => {
    const size = gameSize;

    const arrayFromDistance = (dist, start = 0) => {
        let row = [];
        for (let i = 0; i < size; i++) {
            row.push(start + i * dist)
        }
        return row;
    }

    const posToNextLvl = (pos, lvlDist) => pos + lvlDist * size **2;

    const spreadAcrossLvls = (comb) => comb.map((pos, i) => posToNextLvl(pos, i));

    const generateOnLevelCombinations = () => {
        const indicesToCheck = [];

        const levelCombs = [];
        for (let i = 0; i < size; i++) {
            // horizontal
            levelCombs.push(arrayFromDistance(1, i * size));
            // vertical
            levelCombs.push(arrayFromDistance(size, i));
        }

        // diagonal
        levelCombs.push(arrayFromDistance(size + 1));
        levelCombs.push(arrayFromDistance(size - 1, size - 1));

        // repeat for every level
        for (let i = 0; i < size; i++) {
            for (const comb of levelCombs) {
                indicesToCheck.push(comb.map(ind => posToNextLvl(ind, i)));
            }
        }

        return indicesToCheck;
    }

    const generateAcrossLevelsCombinations = () => {
        const indicesToCheck = [];

        const levelCombs = [];
        for (let i = 0; i < size; i++) {

            // horizontal
            levelCombs.push(arrayFromDistance(1, i * size));
            levelCombs.push(arrayFromDistance(-1, (i + 1) * size - 1));

            // vertical
            levelCombs.push(arrayFromDistance(size, i));
            levelCombs.push(arrayFromDistance(-size, size * (size - 1) + i));

            //straight down
            for (let j = 0; j < size; j++) {
                levelCombs.push(arrayFromDistance(0, i + j * size));
            }
        }

        // diagonal
        levelCombs.push(arrayFromDistance(size + 1));
        levelCombs.push(arrayFromDistance(size - 1, size - 1));
        levelCombs.push(arrayFromDistance(-size - 1, size **2 - 1));
        levelCombs.push(arrayFromDistance(-size + 1, size **2 - size));

        for (const comb of levelCombs) {
            indicesToCheck.push(spreadAcrossLvls(comb));
        }

        return indicesToCheck;
    }

    const combinations = [...generateOnLevelCombinations(), ...generateAcrossLevelsCombinations()];

    const checkLevels = level => {
        for (const comb of combinations) {
            const mark = level[comb[0]];
            if (!mark) continue;
            const checks = comb.map(pos => level[pos] === mark);
            if (checks.every(checkResult => checkResult === checks[0])) {
                return comb;
            }
        }
    }

    return { checkLevels }
};

export default winningPositions;