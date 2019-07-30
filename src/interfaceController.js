import gameFlowController from './gameFlowController';
import Player from './Player';

const interfaceController = (function () {
    let currPersp = window.innerHeight;
    let currRotate = 0;
    let gameStarted = false;
    const initialLevelTranforms = [
        'rotateX(50deg) translateZ(50vh) translateX(-50%) rotateZ(0deg)',
        'rotateX(50deg) translateZ(25vh) translateX(-50%) rotateZ(0deg)',
        'rotateX(50deg) translateX(-50%) rotateZ(0deg)',
    ];
    const playerOne = Player('Player X');
    const playerTwo = Player('Player O');

    const setPerspective = (delta) => {
        currPersp += delta * 2;
        currPersp = Math.min(currPersp, 2000);
        currPersp = Math.max(currPersp, -200);
        const board = document.querySelector(".game-board");
        board.style.perspectiveOrigin = `center ${currPersp}px`;
    }

    const scrollHandler = (e) => {
        setPerspective(e.deltaY);
    }

    const handleRotateButton = (e) => {
        const rotateDelta = e.target.classList.contains('rotate-left') ? 90 : -90;
        const levels = document.querySelectorAll(".level");
        for (let i = 0; i < levels.length; i++) {
            levels[i].style.transform = initialLevelTranforms[i].replace(
                    'rotateZ(0deg)', `rotateZ(${currRotate + rotateDelta}deg)`);
        }
        currRotate += rotateDelta;
    }

    const handleStart = (e) => {
        if (!gameStarted) {
            gameFlowController.gameInit();
            gameStarted = true;

            const startButton = document.querySelector(".start");
            startButton.classList.add('restart');
            startButton.textContent = 'restart';
        } else {
            gameFlowController.clearGame();
        }
    }

    const showNames = () => {
        const nameElems = document.querySelectorAll('.player-name');
        nameElems[0].textContent = playerOne.getName();
        nameElems[1].textContent = playerTwo.getName();
    }

    const initInterface = () => {
        document.addEventListener('wheel', scrollHandler);

        showNames();
        
        const rotButtons = document.querySelectorAll(".rotate-left, .rotate-right");
        rotButtons.forEach(btn => btn.addEventListener('click', handleRotateButton));

        const startButton = document.querySelector(".start");
        startButton.addEventListener('click', handleStart);
    }

    return { initInterface }
})();

export default interfaceController;