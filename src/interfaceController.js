import gameFlowController from "./gameFlowController";
import boardStylesManager from "./boardStylesManager";

const interfaceController = (function() {
  let currPersp = window.innerHeight;

  const winMessage = " wins!";
  const turnMessage = "'s turn";

  const setPerspective = delta => {
    currPersp += delta > 0 ? 100 : -100;
    currPersp = Math.min(currPersp, 2000);
    currPersp = Math.max(currPersp, -200);
    const board = document.querySelector(".game-board");
    board.style.perspectiveOrigin = `center ${currPersp}px`;
    const perspSlider = document.querySelector(".perspective-slider");
    perspSlider.value = currPersp;
  };

  const scrollHandler = e => {
    setPerspective(e.deltaY);
  };

  const setMessage = (message, mark, additionalClass = "") => {
    const container = document.querySelector(".player-message");
    container.style.opacity = 0;

    setTimeout(() => {
      container.style.opacity = 1;
      container.className = `player-message ${mark} ` + additionalClass;

      const msg = document.querySelector(".player-message-text");
      msg.textContent = message;

      const markElm = document.querySelector(".player-mark");
      markElm.textContent = mark;
    }, 150);
  };

  const handleRotateButton = e => {
    const rotateDelta = e.target.classList.contains("rotate-left") ? 90 : -90;
    boardStylesManager.rotate(rotateDelta);
  };

  const handlePerspectiveSlider = e => {
    currPersp = parseInt(e.target.value);
    const board = document.querySelector(".game-board");
    board.style.perspectiveOrigin = `center ${currPersp}px`;
  };

  const handleStart = () => {
    if (!gameFlowController.getGameStarted()) {
      gameFlowController.gameInit();
      const startButton = document.querySelector(".start");
      startButton.classList.add("restart");
      startButton.textContent = "restart";
    } else {
      gameFlowController.clearGame();
    }
  };

  const showPlayers = () => {
    const players = gameFlowController.getPlayers();
    const nameElems = document.querySelectorAll(".player-name");
    nameElems[0].placeholder = players[0].getName();
    nameElems[1].placeholder = players[1].getName();
  };

  const listenForRename = () => {
    const players = gameFlowController.getPlayers();
    const nameElems = document.querySelectorAll(".player-name");
    nameElems[0].addEventListener("input", e => handleRename(e, players[0]));
    nameElems[1].addEventListener("input", e => handleRename(e, players[1]));
  };

  const handleRename = (e, player) => {
    if (e.target.value.length < 1) {
      player.rename(player.getDefaultName());
    } else {
      player.rename(e.target.value);
    }
    showPlayers();
    updateNameInMessages(player);
  };

  const updateNameInMessages = player => {
    if (player == gameFlowController.getCurrPlayer()) {
      const msg = document.querySelector(".player-message-text");
      if (msg.textContent.search(turnMessage) !== -1) {
        msg.textContent = player.getName() + turnMessage;
      } else {
        msg.textContent = player.getName() + winMessage;
      }
    }
  };

  const handleGameModeChange = () => {
    if (gameFlowController.getGameSize() === 3) {
      const modeButton = document.querySelector(".game-mode-switch-button");
      modeButton.textContent = "3x3x3 mode";
      modeButton.disabled = true;
      gameFlowController.expandGame();
      setTimeout(() => {
        modeButton.disabled = false;
      }, 700);
    } else if (gameFlowController.getGameSize() === 4) {
      const modeButton = document.querySelector(".game-mode-switch-button");
      modeButton.textContent = "4x4x4 mode";
      modeButton.disabled = true;
      gameFlowController.shrinkGame();
      setTimeout(() => {
        modeButton.disabled = false;
      }, 700);
    }
  };

  const appendScore = () => {
    const players = gameFlowController.getPlayers();
    const wrappers = document.querySelectorAll(".player-name-wrapper");
    wrappers[0].dataset.wins = "🏆".repeat(players[0].getWins());
    wrappers[1].dataset.wins = "🏆".repeat(players[1].getWins());
  };

  const showNextPlayer = (name, mark) => {
    setMessage(name + turnMessage, mark);
  };

  const announceWinner = (name, mark) => {
    setMessage(name + winMessage, mark, "win");
  };

  const initInterface = () => {
    document.addEventListener("wheel", scrollHandler);

    showPlayers();
    listenForRename();

    const rotButtons = document.querySelectorAll(".rotate-left, .rotate-right");
    rotButtons.forEach(btn =>
      btn.addEventListener("click", handleRotateButton)
    );

    const perspSlider = document.querySelector(".perspective-slider");
    perspSlider.value = currPersp;
    perspSlider.addEventListener("change", handlePerspectiveSlider);

    const startButton = document.querySelector(".start");
    startButton.addEventListener("click", handleStart);

    const modeButton = document.querySelector(".game-mode-switch-button");
    modeButton.addEventListener("click", handleGameModeChange);
  };

  return { initInterface, showNextPlayer, announceWinner, appendScore };
})();

export default interfaceController;
