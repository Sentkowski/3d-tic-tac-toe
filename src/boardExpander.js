import gameFlowController from "./gameFlowController";

const boardExpander = (function () {

    const initialLevelTranforms = [
        'rotateX(50deg) translateZ(83vh) translateX(-50%) rotateZ(0deg)',
        'rotateX(50deg) translateZ(65vh) translateX(-50%) rotateZ(0deg)',
        'rotateX(50deg) translateZ(45vh) translateX(-50%) rotateZ(0deg)',
        'rotateX(50deg) translateZ(25vh) translateX(-50%) rotateZ(0deg)'
    ];
    const gridTemplate = 'repeat(4, 1fr) / repeat(4, 1fr)';

    const doubleNode = (node) => {
        const clone = node.cloneNode(true);
        node.parentNode.insertBefore(clone, node);
    }

    const clearBoardListeners = () => {
        const squares = document.querySelectorAll(".square");
        squares.forEach((square, i) => {
            doubleNode(square);
            square.remove();
        });
    }

    const addLevel = () => {
        doubleNode(document.querySelectorAll('.level')[2]);
    }

    const expandLevelNodes = () => {
        const levels = document.querySelectorAll('.level');
        levels.forEach(level => {
            const button = level.children[0];
            for (let i = 0; i < 7; i++) {
                doubleNode(button);
            }
        });
    }

    const styleForExpanded = () => {
        const levels = document.querySelectorAll('.level');
        for (let i = 0; i < levels.length; i++) {
            const level = levels[i];
            level.style.transform = initialLevelTranforms[i];
            level.style.gridTemplate = gridTemplate;
        }
    }

    const expand = () => {
        const board = document.querySelector('.game-board');
        const levels = document.querySelectorAll('.level');
        levels.forEach(level => {
            level.style.opacity = 0;
        });
        setTimeout(() => {
            clearBoardListeners();
            addLevel();
            expandLevelNodes();
            styleForExpanded();
            board.classList.add('changing-mode');
            gameFlowController.gameInit();
        }, 400);
        setTimeout(() => {
            const newLevels = document.querySelectorAll('.level');
            newLevels.forEach(level => {
                level.style.opacity = 1;
            });
            board.classList.replace('changing-mode', 'changed-mode');
        }, 700);
    }

    return { expand };
})();

export default boardExpander;