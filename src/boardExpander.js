import gameFlowController from "./gameFlowController";
import boardStylesManager from "./boardStylesManager";

const boardExpander = (function() {
  const doubleNode = node => {
    const clone = node.cloneNode(true);
    node.parentNode.insertBefore(clone, node);
  };

  const clearBoardListeners = () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
      doubleNode(square);
      square.remove();
    });
  };

  const addLevel = () => {
    doubleNode(document.querySelectorAll(".level")[2]);
  };
  const removeLevel = () => {
    document.querySelectorAll(".level")[0].remove();
  };

  const expandLevelNodes = () => {
    const levels = document.querySelectorAll(".level");
    levels.forEach(level => {
      const button = level.children[0];
      for (let i = 0; i < 7; i++) {
        doubleNode(button);
      }
    });
  };

  const shrinkLevelNodes = () => {
    const levels = document.querySelectorAll(".level");
    levels.forEach(level => {
      const buttons = level.children;
      for (let i = 0; i < 7; i++) {
        buttons[i].remove();
      }
    });
  };

  const restoreDefaultLevelStyles = () => {
    const levels = document.querySelectorAll(".level");
    for (const level of levels) {
      level.style.transform = "";
      level.style.gridTemplate = "";
    }
  };

  const lockButtons = () => {
    const buttons = document.querySelectorAll(".square button");
    buttons.forEach(btn => (btn.disabled = true));
  };
  const unlockButtons = () => {
    const buttons = document.querySelectorAll(".square button");
    buttons.forEach(btn => (btn.disabled = false));
  };

  const expand = () => {
    lockButtons();
    const board = document.querySelector(".game-board");
    const levels = document.querySelectorAll(".level");
    levels.forEach(level => {
      level.style.opacity = 0;
    });
    setTimeout(() => {
      clearBoardListeners();
      addLevel();
      expandLevelNodes();
      boardStylesManager.styleForExpanded();
      board.classList.add("changing-mode");
      if (gameFlowController.getGameStarted()) {
        gameFlowController.gameInit();
      }
    }, 400);
    setTimeout(() => {
      const newLevels = document.querySelectorAll(".level");
      newLevels.forEach(level => {
        level.style.opacity = 1;
      });
      board.classList.replace("changing-mode", "changed-mode");
      unlockButtons();
    }, 700);
  };

  const shrink = () => {
    const board = document.querySelector(".game-board");
    board.classList.remove("changed-mode");
    lockButtons();
    const levels = document.querySelectorAll(".level");
    levels.forEach(level => {
      level.style.opacity = 0;
    });
    setTimeout(() => {
      const newLevels = document.querySelectorAll(".level");
      newLevels.forEach(level => {
        level.style.opacity = 1;
      });
      unlockButtons();
      clearBoardListeners();
      removeLevel();
      shrinkLevelNodes();
      restoreDefaultLevelStyles();
      if (gameFlowController.getGameStarted()) {
        gameFlowController.gameInit();
      }
    }, 400);
  };

  return { expand, shrink };
})();

export default boardExpander;
