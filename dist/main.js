/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Player = (n, m) => {\r\n  let name = n;\r\n  let wins = 0;\r\n  const mark = m;\r\n  const defaultName = n;\r\n\r\n  const rename = newName => (name = newName);\r\n  const addWin = () => (wins += 1);\r\n\r\n  const getName = () => name;\r\n  const getMark = () => mark;\r\n  const getWins = () => wins;\r\n  const getDefaultName = () => defaultName;\r\n\r\n  return { rename, getName, getMark, getWins, addWin, getDefaultName };\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\r\n\n\n//# sourceURL=webpack:///./src/Player.js?");

/***/ }),

/***/ "./src/boardExpander.js":
/*!******************************!*\
  !*** ./src/boardExpander.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameFlowController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameFlowController */ \"./src/gameFlowController.js\");\n/* harmony import */ var _boardStylesManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardStylesManager */ \"./src/boardStylesManager.js\");\n\r\n\r\n\r\nconst boardExpander = (function() {\r\n  const doubleNode = node => {\r\n    const clone = node.cloneNode(true);\r\n    node.parentNode.insertBefore(clone, node);\r\n  };\r\n\r\n  const clearBoardListeners = () => {\r\n    const squares = document.querySelectorAll(\".square\");\r\n    squares.forEach(square => {\r\n      doubleNode(square);\r\n      square.remove();\r\n    });\r\n  };\r\n\r\n  const addLevel = () => {\r\n    doubleNode(document.querySelectorAll(\".level\")[2]);\r\n  };\r\n  const removeLevel = () => {\r\n    document.querySelectorAll(\".level\")[0].remove();\r\n  };\r\n\r\n  const expandLevelNodes = () => {\r\n    const levels = document.querySelectorAll(\".level\");\r\n    levels.forEach(level => {\r\n      const button = level.children[0];\r\n      for (let i = 0; i < 7; i++) {\r\n        doubleNode(button);\r\n      }\r\n    });\r\n  };\r\n\r\n  const shrinkLevelNodes = () => {\r\n    const levels = document.querySelectorAll(\".level\");\r\n    levels.forEach(level => {\r\n      const buttons = level.children;\r\n      for (let i = 0; i < 7; i++) {\r\n        buttons[i].remove();\r\n      }\r\n    });\r\n  };\r\n\r\n  const restoreDefaultLevelStyles = () => {\r\n    const levels = document.querySelectorAll(\".level\");\r\n    for (const level of levels) {\r\n      level.style.transform = \"\";\r\n      level.style.gridTemplate = \"\";\r\n    }\r\n  };\r\n\r\n  const lockButtons = () => {\r\n    const buttons = document.querySelectorAll(\".square button\");\r\n    buttons.forEach(btn => (btn.disabled = true));\r\n  };\r\n  const unlockButtons = () => {\r\n    const buttons = document.querySelectorAll(\".square button\");\r\n    buttons.forEach(btn => (btn.disabled = false));\r\n  };\r\n\r\n  const expand = () => {\r\n    lockButtons();\r\n    const board = document.querySelector(\".game-board\");\r\n    const levels = document.querySelectorAll(\".level\");\r\n    levels.forEach(level => {\r\n      level.style.opacity = 0;\r\n    });\r\n    setTimeout(() => {\r\n      clearBoardListeners();\r\n      addLevel();\r\n      expandLevelNodes();\r\n      _boardStylesManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"].styleForExpanded();\r\n      board.classList.add(\"changing-mode\");\r\n      if (_gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getGameStarted()) {\r\n        _gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameInit();\r\n      }\r\n    }, 400);\r\n    setTimeout(() => {\r\n      const newLevels = document.querySelectorAll(\".level\");\r\n      newLevels.forEach(level => {\r\n        level.style.opacity = 1;\r\n      });\r\n      board.classList.replace(\"changing-mode\", \"changed-mode\");\r\n      unlockButtons();\r\n    }, 700);\r\n  };\r\n\r\n  const shrink = () => {\r\n    const board = document.querySelector(\".game-board\");\r\n    board.classList.remove(\"changed-mode\");\r\n    lockButtons();\r\n    const levels = document.querySelectorAll(\".level\");\r\n    levels.forEach(level => {\r\n      level.style.opacity = 0;\r\n    });\r\n    setTimeout(() => {\r\n      const newLevels = document.querySelectorAll(\".level\");\r\n      newLevels.forEach(level => {\r\n        level.style.opacity = 1;\r\n      });\r\n      unlockButtons();\r\n      clearBoardListeners();\r\n      removeLevel();\r\n      shrinkLevelNodes();\r\n      restoreDefaultLevelStyles();\r\n      if (_gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getGameStarted()) {\r\n        _gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameInit();\r\n      }\r\n    }, 400);\r\n  };\r\n\r\n  return { expand, shrink };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (boardExpander);\r\n\n\n//# sourceURL=webpack:///./src/boardExpander.js?");

/***/ }),

/***/ "./src/boardStylesManager.js":
/*!***********************************!*\
  !*** ./src/boardStylesManager.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameFlowController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameFlowController */ \"./src/gameFlowController.js\");\n\r\n\r\nconst boardStylesManager = (function() {\r\n  const initialExpandedLevelTranforms = {\r\n    desktop: [\r\n      \"rotateX(50deg) translateZ(83vh) translateX(-50%) rotateZ(0deg)\",\r\n      \"rotateX(50deg) translateZ(65vh) translateX(-50%) rotateZ(0deg)\",\r\n      \"rotateX(50deg) translateZ(45vh) translateX(-50%) rotateZ(0deg)\",\r\n      \"rotateX(50deg) translateZ(25vh) translateX(-50%) rotateZ(0deg)\"\r\n    ],\r\n    mobile: [\r\n      \"rotateX(50deg) translateZ(195vw) translateX(-50%) rotateZ(0deg)\",\r\n      \"rotateX(50deg) translateZ(155vw) translateX(-50%) rotateZ(0deg)\",\r\n      \"rotateX(50deg) translateZ(110vw) translateX(-50%) rotateZ(0deg)\",\r\n      \"rotateX(50deg) translateZ(60vw) translateX(-50%) rotateZ(0deg)\"\r\n    ]\r\n  };\r\n  // const expandedGridTemplate = \"repeat(4, 1fr) / repeat(4, 1fr)\";\r\n  const initialLevelTranforms = {\r\n    desktop: [\r\n      \"rotateX(50deg) translateZ(75vh) translateX(-50%) rotateZ(0deg)\",\r\n      \"rotateX(50deg) translateZ(50vh) translateX(-50%) rotateZ(0deg)\",\r\n      \"rotateX(50deg) translateZ(25vh) translateX(-50%) rotateZ(0deg)\"\r\n    ],\r\n    mobile: [\r\n      \"rotateX(50deg) translateZ(165vw) translateX(-50%) rotateZ(0deg)\",\r\n      \"rotateX(50deg) translateZ(115vw) translateX(-50%) rotateZ(0deg)\",\r\n      \"rotateX(50deg) translateZ(60vw) translateX(-50%) rotateZ(0deg)\"\r\n    ]\r\n  };\r\n\r\n  const expandedGridTemplate = \"repeat(4, 1fr) / repeat(4, 1fr)\";\r\n\r\n  const mobileQuery = \"screen and (max-width: 599px)\";\r\n\r\n  let currRotate = 0;\r\n\r\n  const resetRotate = () => (currRotate = 0);\r\n\r\n  const checkDevice = () => {\r\n    const mq = window.matchMedia(mobileQuery);\r\n    return mq.matches ? \"mobile\" : \"desktop\";\r\n  };\r\n\r\n  const getRightTransforms = () => {\r\n    const stylesForSize =\r\n      _gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getGameSize() === 3\r\n        ? initialLevelTranforms\r\n        : initialExpandedLevelTranforms;\r\n    return stylesForSize[checkDevice()];\r\n  };\r\n\r\n  const rotate = dir => {\r\n    currRotate += dir;\r\n    const levels = document.querySelectorAll(\".level\");\r\n    const styles = getRightTransforms();\r\n    for (let i = 0; i < levels.length; i++) {\r\n      levels[i].style.transform = styles[i].replace(\r\n        \"rotateZ(0deg)\",\r\n        `rotateZ(${currRotate}deg)`\r\n      );\r\n    }\r\n  };\r\n\r\n  const styleForExpanded = () => {\r\n    const transforms = boardStylesManager.getRightTransforms();\r\n    const levels = document.querySelectorAll(\".level\");\r\n    for (let i = 0; i < levels.length; i++) {\r\n      const level = levels[i];\r\n      level.style.transform = transforms[i];\r\n      level.style.gridTemplate = expandedGridTemplate;\r\n    }\r\n  };\r\n\r\n  return {\r\n    rotate,\r\n    resetRotate,\r\n    getRightTransforms,\r\n    checkDevice,\r\n    styleForExpanded\r\n  };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (boardStylesManager);\r\n\n\n//# sourceURL=webpack:///./src/boardStylesManager.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _winningPositions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./winningPositions */ \"./src/winningPositions.js\");\n\r\n\r\nconst gameBoard = (function() {\r\n  let gameSize = 3;\r\n  let gameLevels = new Array(gameSize ** 3).fill(null);\r\n  let winChecker = Object(_winningPositions__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(gameSize);\r\n\r\n  const insertMove = (playerMark, square) => {\r\n    if (gameLevels[square] !== null) {\r\n      return false;\r\n    }\r\n    gameLevels[square] = playerMark;\r\n  };\r\n\r\n  const clearBoard = () => {\r\n    gameLevels = new Array(gameSize ** 3).fill(null);\r\n  };\r\n\r\n  const checkWin = () => {\r\n    if (winChecker.checkLevels(gameLevels)) {\r\n      return winChecker.checkLevels(gameLevels);\r\n    }\r\n  };\r\n\r\n  const gameResize = () => {\r\n    const newSize = gameSize === 3 ? 4 : 3;\r\n    gameSize = newSize;\r\n    winChecker = Object(_winningPositions__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newSize);\r\n    clearBoard();\r\n  };\r\n\r\n  return { checkWin, insertMove, clearBoard, gameResize };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameBoard);\r\n\n\n//# sourceURL=webpack:///./src/gameBoard.js?");

/***/ }),

/***/ "./src/gameDisplayer.js":
/*!******************************!*\
  !*** ./src/gameDisplayer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst gameDisplayer = (function() {\r\n  const markSquare = (playerMark, square) => {\r\n    const chosen = document.querySelectorAll(\".square button\")[square];\r\n    chosen.classList.add(`marked-${playerMark}`);\r\n    chosen.textContent = playerMark;\r\n  };\r\n\r\n  const announceWinner = winComb => {\r\n    const squares = document.querySelectorAll(\".square button\");\r\n    const squaresToHighlight = winComb.map(sqInd => squares[sqInd]);\r\n    squaresToHighlight.forEach(sq => sq.classList.add(\"winning\"));\r\n  };\r\n\r\n  const resetSquares = () => {\r\n    const squares = document.querySelectorAll(\".square button\");\r\n    squares.forEach(sq => {\r\n      sq.className = \"mark-button\";\r\n      sq.textContent = \"\";\r\n    });\r\n  };\r\n\r\n  const toggleActive = () => {\r\n    document.querySelector(\".game-board\").classList.remove(\"deactivated\");\r\n  };\r\n\r\n  return { markSquare, announceWinner, resetSquares, toggleActive };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameDisplayer);\r\n\n\n//# sourceURL=webpack:///./src/gameDisplayer.js?");

/***/ }),

/***/ "./src/gameFlowController.js":
/*!***********************************!*\
  !*** ./src/gameFlowController.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard.js */ \"./src/gameBoard.js\");\n/* harmony import */ var _gameDisplayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameDisplayer.js */ \"./src/gameDisplayer.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* harmony import */ var _interfaceController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfaceController.js */ \"./src/interfaceController.js\");\n/* harmony import */ var _boardExpander_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./boardExpander.js */ \"./src/boardExpander.js\");\n/* harmony import */ var _boardStylesManager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boardStylesManager.js */ \"./src/boardStylesManager.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst gameFlowController = (function() {\r\n  const playerOne = Object(_Player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"First Player\", \"X\");\r\n  const playerTwo = Object(_Player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"Second Player\", \"O\");\r\n\r\n  let currPlayer = null;\r\n\r\n  let gameFinished = false;\r\n\r\n  let gameSize = 3;\r\n\r\n  let gameStarted = false;\r\n\r\n  const getCurrPlayer = () => currPlayer;\r\n\r\n  const getGameSize = () => gameSize;\r\n\r\n  const getGameStarted = () => gameStarted;\r\n\r\n  function _nextPlayer() {\r\n    if (currPlayer === null) {\r\n      currPlayer = Math.random() > 0.5 ? playerTwo : playerOne;\r\n    } else {\r\n      currPlayer = currPlayer === playerOne ? playerTwo : playerOne;\r\n    }\r\n    _interfaceController_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].showNextPlayer(\r\n      currPlayer.getName(),\r\n      currPlayer.getMark()\r\n    );\r\n  }\r\n\r\n  function clearGame() {\r\n    _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearBoard();\r\n    _gameDisplayer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].resetSquares();\r\n    currPlayer = null;\r\n    gameFinished = false;\r\n    _nextPlayer();\r\n  }\r\n\r\n  const gameInit = () => {\r\n    gameFinished = false;\r\n    gameStarted = true;\r\n    currPlayer = null;\r\n    const squares = document.querySelectorAll(\".square\");\r\n    squares.forEach((square, i) => {\r\n      square.addEventListener(\"click\", () => handleSquareClick(i));\r\n    });\r\n    _gameDisplayer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].toggleActive();\r\n    _nextPlayer();\r\n  };\r\n\r\n  const handleSquareClick = position => {\r\n    if (gameFinished) return;\r\n    if (_gameBoard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].insertMove(currPlayer.getMark(), position) !== false) {\r\n      _gameDisplayer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].markSquare(currPlayer.getMark(), position);\r\n      const winResults = _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkWin();\r\n      if (winResults) {\r\n        currPlayer.addWin();\r\n        _gameDisplayer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].announceWinner(winResults);\r\n        _interfaceController_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].appendScore();\r\n        _interfaceController_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].announceWinner(\r\n          currPlayer.getName(),\r\n          currPlayer.getMark()\r\n        );\r\n        gameFinished = true;\r\n      } else {\r\n        _nextPlayer();\r\n      }\r\n    }\r\n  };\r\n\r\n  function expandGame() {\r\n    gameSize = 4;\r\n    _gameDisplayer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].resetSquares();\r\n    _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameResize();\r\n    _boardExpander_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].expand();\r\n    _boardStylesManager_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].resetRotate();\r\n  }\r\n\r\n  function shrinkGame() {\r\n    gameSize = 3;\r\n    _gameDisplayer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].resetSquares();\r\n    _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameResize();\r\n    _boardExpander_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].shrink();\r\n    _boardStylesManager_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].resetRotate();\r\n  }\r\n\r\n  const getPlayers = () => {\r\n    return [playerOne, playerTwo];\r\n  };\r\n\r\n  return {\r\n    gameInit,\r\n    clearGame,\r\n    getPlayers,\r\n    getCurrPlayer,\r\n    expandGame,\r\n    getGameSize,\r\n    getGameStarted,\r\n    shrinkGame\r\n  };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameFlowController);\r\n\n\n//# sourceURL=webpack:///./src/gameFlowController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interfaceController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaceController */ \"./src/interfaceController.js\");\n\r\n\r\n// gameFlowController.gameInit();\r\n_interfaceController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initInterface();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/interfaceController.js":
/*!************************************!*\
  !*** ./src/interfaceController.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameFlowController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameFlowController */ \"./src/gameFlowController.js\");\n/* harmony import */ var _boardStylesManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardStylesManager */ \"./src/boardStylesManager.js\");\n\r\n\r\n\r\nconst interfaceController = (function() {\r\n  let currPersp = window.innerHeight;\r\n\r\n  const winMessage = \" wins!\";\r\n  const turnMessage = \"'s turn\";\r\n\r\n  const setPerspective = delta => {\r\n    currPersp += delta > 0 ? 100 : -100;\r\n    currPersp = Math.min(currPersp, 2000);\r\n    currPersp = Math.max(currPersp, -200);\r\n    const board = document.querySelector(\".game-board\");\r\n    board.style.perspectiveOrigin = `center ${currPersp}px`;\r\n    const perspSlider = document.querySelector(\".perspective-slider\");\r\n    perspSlider.value = currPersp;\r\n  };\r\n\r\n  const scrollHandler = e => {\r\n    setPerspective(e.deltaY);\r\n  };\r\n\r\n  const setMessage = (message, mark, additionalClass = \"\") => {\r\n    const container = document.querySelector(\".player-message\");\r\n    container.style.opacity = 0;\r\n\r\n    setTimeout(() => {\r\n      container.style.opacity = 1;\r\n      container.className = `player-message ${mark} ` + additionalClass;\r\n\r\n      const msg = document.querySelector(\".player-message-text\");\r\n      msg.textContent = message;\r\n\r\n      const markElm = document.querySelector(\".player-mark\");\r\n      markElm.textContent = mark;\r\n    }, 150);\r\n  };\r\n\r\n  const handleRotateButton = e => {\r\n    const rotateDelta = e.target.classList.contains(\"rotate-left\") ? 90 : -90;\r\n    _boardStylesManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"].rotate(rotateDelta);\r\n  };\r\n\r\n  const handlePerspectiveSlider = e => {\r\n    currPersp = parseInt(e.target.value);\r\n    const board = document.querySelector(\".game-board\");\r\n    board.style.perspectiveOrigin = `center ${currPersp}px`;\r\n  };\r\n\r\n  const handleStart = () => {\r\n    if (!_gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getGameStarted()) {\r\n      _gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameInit();\r\n      const startButton = document.querySelector(\".start\");\r\n      startButton.classList.add(\"restart\");\r\n      startButton.textContent = \"restart\";\r\n    } else {\r\n      _gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearGame();\r\n    }\r\n  };\r\n\r\n  const showPlayers = () => {\r\n    const players = _gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPlayers();\r\n    const nameElems = document.querySelectorAll(\".player-name\");\r\n    nameElems[0].placeholder = players[0].getName();\r\n    nameElems[1].placeholder = players[1].getName();\r\n  };\r\n\r\n  const listenForRename = () => {\r\n    const players = _gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPlayers();\r\n    const nameElems = document.querySelectorAll(\".player-name\");\r\n    nameElems[0].addEventListener(\"input\", e => handleRename(e, players[0]));\r\n    nameElems[1].addEventListener(\"input\", e => handleRename(e, players[1]));\r\n  };\r\n\r\n  const handleRename = (e, player) => {\r\n    if (e.target.value.length < 1) {\r\n      player.rename(player.getDefaultName());\r\n    } else {\r\n      player.rename(e.target.value);\r\n    }\r\n    showPlayers();\r\n    updateNameInMessages(player);\r\n  };\r\n\r\n  const updateNameInMessages = player => {\r\n    if (player == _gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrPlayer()) {\r\n      const msg = document.querySelector(\".player-message-text\");\r\n      if (msg.textContent.search(turnMessage) !== -1) {\r\n        msg.textContent = player.getName() + turnMessage;\r\n      } else {\r\n        msg.textContent = player.getName() + winMessage;\r\n      }\r\n    }\r\n  };\r\n\r\n  const handleGameModeChange = () => {\r\n    if (_gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getGameSize() === 3) {\r\n      const modeButton = document.querySelector(\".game-mode-switch-button\");\r\n      modeButton.textContent = \"3x3x3 mode\";\r\n      modeButton.disabled = true;\r\n      _gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].expandGame();\r\n      setTimeout(() => {\r\n        modeButton.disabled = false;\r\n      }, 700);\r\n    } else if (_gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getGameSize() === 4) {\r\n      const modeButton = document.querySelector(\".game-mode-switch-button\");\r\n      modeButton.textContent = \"4x4x4 mode\";\r\n      modeButton.disabled = true;\r\n      _gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].shrinkGame();\r\n      setTimeout(() => {\r\n        modeButton.disabled = false;\r\n      }, 700);\r\n    }\r\n  };\r\n\r\n  const appendScore = () => {\r\n    const players = _gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPlayers();\r\n    const wrappers = document.querySelectorAll(\".player-name-wrapper\");\r\n    wrappers[0].dataset.wins = \"🏆\".repeat(players[0].getWins());\r\n    wrappers[1].dataset.wins = \"🏆\".repeat(players[1].getWins());\r\n  };\r\n\r\n  const showNextPlayer = (name, mark) => {\r\n    setMessage(name + turnMessage, mark);\r\n  };\r\n\r\n  const announceWinner = (name, mark) => {\r\n    setMessage(name + winMessage, mark, \"win\");\r\n  };\r\n\r\n  const initInterface = () => {\r\n    document.addEventListener(\"wheel\", scrollHandler);\r\n\r\n    showPlayers();\r\n    listenForRename();\r\n\r\n    const rotButtons = document.querySelectorAll(\".rotate-left, .rotate-right\");\r\n    rotButtons.forEach(btn =>\r\n      btn.addEventListener(\"click\", handleRotateButton)\r\n    );\r\n\r\n    const perspSlider = document.querySelector(\".perspective-slider\");\r\n    perspSlider.value = currPersp;\r\n    perspSlider.addEventListener(\"change\", handlePerspectiveSlider);\r\n\r\n    const startButton = document.querySelector(\".start\");\r\n    startButton.addEventListener(\"click\", handleStart);\r\n\r\n    const modeButton = document.querySelector(\".game-mode-switch-button\");\r\n    modeButton.addEventListener(\"click\", handleGameModeChange);\r\n  };\r\n\r\n  return { initInterface, showNextPlayer, announceWinner, appendScore };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (interfaceController);\r\n\n\n//# sourceURL=webpack:///./src/interfaceController.js?");

/***/ }),

/***/ "./src/winningPositions.js":
/*!*********************************!*\
  !*** ./src/winningPositions.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst winningPositions = gameSize => {\r\n  const size = gameSize;\r\n\r\n  const arrayFromDistance = (dist, start = 0) => {\r\n    let row = [];\r\n    for (let i = 0; i < size; i++) {\r\n      row.push(start + i * dist);\r\n    }\r\n    return row;\r\n  };\r\n\r\n  const posToNextLvl = (pos, lvlDist) => pos + lvlDist * size ** 2;\r\n\r\n  const spreadAcrossLvls = comb => comb.map((pos, i) => posToNextLvl(pos, i));\r\n\r\n  const generateOnLevelCombinations = () => {\r\n    const indicesToCheck = [];\r\n\r\n    const levelCombs = [];\r\n    for (let i = 0; i < size; i++) {\r\n      // horizontal\r\n      levelCombs.push(arrayFromDistance(1, i * size));\r\n      // vertical\r\n      levelCombs.push(arrayFromDistance(size, i));\r\n    }\r\n\r\n    // diagonal\r\n    levelCombs.push(arrayFromDistance(size + 1));\r\n    levelCombs.push(arrayFromDistance(size - 1, size - 1));\r\n\r\n    // repeat for every level\r\n    for (let i = 0; i < size; i++) {\r\n      for (const comb of levelCombs) {\r\n        indicesToCheck.push(comb.map(ind => posToNextLvl(ind, i)));\r\n      }\r\n    }\r\n\r\n    return indicesToCheck;\r\n  };\r\n\r\n  const generateAcrossLevelsCombinations = () => {\r\n    const indicesToCheck = [];\r\n\r\n    const levelCombs = [];\r\n    for (let i = 0; i < size; i++) {\r\n      // horizontal\r\n      levelCombs.push(arrayFromDistance(1, i * size));\r\n      levelCombs.push(arrayFromDistance(-1, (i + 1) * size - 1));\r\n\r\n      // vertical\r\n      levelCombs.push(arrayFromDistance(size, i));\r\n      levelCombs.push(arrayFromDistance(-size, size * (size - 1) + i));\r\n\r\n      //straight down\r\n      for (let j = 0; j < size; j++) {\r\n        levelCombs.push(arrayFromDistance(0, i + j * size));\r\n      }\r\n    }\r\n\r\n    // diagonal\r\n    levelCombs.push(arrayFromDistance(size + 1));\r\n    levelCombs.push(arrayFromDistance(size - 1, size - 1));\r\n    levelCombs.push(arrayFromDistance(-size - 1, size ** 2 - 1));\r\n    levelCombs.push(arrayFromDistance(-size + 1, size ** 2 - size));\r\n\r\n    for (const comb of levelCombs) {\r\n      indicesToCheck.push(spreadAcrossLvls(comb));\r\n    }\r\n\r\n    return indicesToCheck;\r\n  };\r\n\r\n  const combinations = [\r\n    ...generateOnLevelCombinations(),\r\n    ...generateAcrossLevelsCombinations()\r\n  ];\r\n\r\n  const checkLevels = level => {\r\n    for (const comb of combinations) {\r\n      const mark = level[comb[0]];\r\n      if (!mark) continue;\r\n      const checks = comb.map(pos => level[pos] === mark);\r\n      if (checks.every(checkResult => checkResult === checks[0])) {\r\n        return comb;\r\n      }\r\n    }\r\n  };\r\n\r\n  return { checkLevels };\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (winningPositions);\r\n\n\n//# sourceURL=webpack:///./src/winningPositions.js?");

/***/ })

/******/ });