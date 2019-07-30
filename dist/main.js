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
eval("__webpack_require__.r(__webpack_exports__);\nconst Player = (n, m) => {\r\n    let name = n;\r\n    let wins = 0;\r\n    const mark = m;\r\n    const defaultName = n;\r\n\r\n    const rename = (newName) => name = newName;\r\n    const addWin = () => wins += 1;\r\n\r\n    const getName = () => name;\r\n    const getMark = () => mark;\r\n    const getWins = () => wins;\r\n    const getDefaultName = () => defaultName;\r\n\r\n    return { rename, getName, getMark, getWins, addWin, getDefaultName }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/Player.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst gameBoard = (function () {\r\n    let gameLevels = [\r\n        new Array(9).fill(null),\r\n        new Array(9).fill(null),\r\n        new Array(9).fill(null),\r\n    ];\r\n\r\n    const insertMove = (playerMark, level, square) => {\r\n        if (gameLevels[level][square] !== null) {\r\n            return false;\r\n        }\r\n        gameLevels[level][square] = playerMark;\r\n    }\r\n\r\n    const clearBoard = () => {\r\n        gameLevels = [\r\n            new Array(9).fill(null),\r\n            new Array(9).fill(null),\r\n            new Array(9).fill(null),\r\n        ];\r\n    }\r\n\r\n    const checkIfWithinLevel = (start, dist) => start + dist * 2 < 9;\r\n    const checkIfWithinLevels = (start, dist) => Math.floor((start + dist) / 9) === 1\r\n        && Math.floor((start + dist * 2) / 9) === 2;\r\n    const checkIfDiffRows = (start, dist) => (Math.floor(start / 3) === 0\r\n        && Math.floor((start + dist) / 3) === 1\r\n        && Math.floor((start + 2 * dist) / 3) === 2);\r\n    const checkIfSameRow = (start, dist) => (\r\n           Math.floor((start + dist) / 3) === Math.floor(start / 3)\r\n        && Math.floor((start + 2 * dist) / 3) === Math.floor(start / 3));\r\n    const checkIfDiffLevels = (start, dist) => (\r\n        Math.floor(((start + dist) % 9) / 3) === Math.floor(start / 3)\r\n        && Math.floor(((start + 2 * dist) % 18) / 3) === Math.floor(start / 3)\r\n        && Math.floor(((start + 2 * dist) % 18) / 3) === Math.floor(((start + dist) % 9) / 3));\r\n    const checkIfAcrossLevels = (start, dist) => (\r\n           Math.floor(((start + dist) % 9) / 3) !== Math.floor(start / 3)\r\n        && Math.floor(((start + 2 * dist) % 18) / 3) !== Math.floor(start / 3)\r\n        && Math.floor(((start + 2 * dist) % 18) / 3) !== Math.floor(((start + dist) % 9) / 3))\r\n        \r\n    const onLevelDistances = {\r\n        right: {\r\n            dist: 1,\r\n            req: checkIfSameRow,\r\n        },\r\n        down: {\r\n            dist: 3,\r\n            req: checkIfDiffRows,\r\n        },\r\n        diag: {\r\n            dist: 4,\r\n            req: checkIfDiffRows,\r\n        },\r\n        diagBack: {\r\n            dist: 2,\r\n            req: checkIfDiffRows,\r\n        }\r\n    }\r\n\r\n    const crossLevelDistances = {\r\n        down: {\r\n            dist: 9,\r\n            req: checkIfDiffLevels,\r\n        },\r\n        diagDown: {\r\n            dist: 12,\r\n            req: checkIfAcrossLevels,\r\n        },\r\n        diagRight: {\r\n            dist: 10,\r\n            req: checkIfDiffLevels,\r\n        },\r\n        diagDiag: {\r\n            dist: 13,\r\n            req: checkIfAcrossLevels,\r\n        },\r\n        diagLeft: {\r\n            dist: 8,\r\n            req: checkIfDiffLevels,\r\n        },\r\n        diagUp: {\r\n            dist: 6,\r\n            req: checkIfAcrossLevels,\r\n        },\r\n        diagUpLeft: {\r\n            dist: 5,\r\n            req: checkIfAcrossLevels,\r\n        },\r\n        diagDownLeft: {\r\n            dist: 11,\r\n            req: checkIfAcrossLevels,\r\n        }\r\n    }\r\n\r\n    const checkOnLevelWin = (level) => {\r\n        for (let i = 0; i < level.length; i++) {\r\n            if (!level[i]) continue;\r\n            for (let dir in onLevelDistances) {\r\n                const toCheck = onLevelDistances[dir];\r\n                if (!toCheck.req(i, toCheck.dist) || !checkIfWithinLevel(i, toCheck.dist)) {\r\n                    continue;\r\n                } else if (level[i] === level[i + toCheck.dist]\r\n                           && level[i] === level[i + toCheck.dist * 2]) {\r\n                    const winningCombination = [i, i + toCheck.dist, i + toCheck.dist * 2];\r\n                    return winningCombination;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    const checkAcrossLevelWin = gameLevels => {\r\n        const merged = [].concat(...gameLevels);\r\n        const firstLevel = gameLevels[0];\r\n        for (let i = 0; i < firstLevel.length; i++) {\r\n            if (!firstLevel[i]) continue;\r\n            for (let dir in crossLevelDistances) {\r\n                const toCheck = crossLevelDistances[dir];\r\n                if (!toCheck.req(i, toCheck.dist) || !checkIfWithinLevels(i, toCheck.dist)) {\r\n                    continue;\r\n                } else if (merged[i] === merged[i + toCheck.dist]\r\n                           && merged[i] === merged[i + toCheck.dist * 2]) {\r\n                    const winningCombination = [i, i + toCheck.dist, i + toCheck.dist * 2];\r\n                    return winningCombination;\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    const checkWin = () => {\r\n        for (let level of gameLevels) {\r\n            if (checkOnLevelWin(level)) {\r\n                return checkOnLevelWin(level).map(square => square + gameLevels.indexOf(level) * 9);\r\n            }\r\n        }\r\n        if (checkAcrossLevelWin(gameLevels)) {\r\n            return checkAcrossLevelWin(gameLevels);\r\n        } else {\r\n            return false;\r\n        }\r\n    };\r\n\r\n    return { checkWin, insertMove, clearBoard }\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameBoard);\n\n//# sourceURL=webpack:///./src/gameBoard.js?");

/***/ }),

/***/ "./src/gameDisplayer.js":
/*!******************************!*\
  !*** ./src/gameDisplayer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst gameDisplayer = (function () {\r\n    const markSquare = (playerMark, level, square) => {\r\n        const chosen = document.querySelectorAll(\".square button\")[level * 9 + square];\r\n        chosen.classList.add(`marked-${playerMark}`);\r\n        chosen.textContent = playerMark;\r\n    }\r\n\r\n    const announceWinner = (winComb) => {\r\n        const squares = document.querySelectorAll(\".square button\");\r\n        const squaresToHighlight = winComb.map(sqInd => squares[sqInd]);\r\n        squaresToHighlight.forEach(sq => sq.classList.add('winning'));\r\n    }\r\n\r\n    const resetSquares = () => {\r\n        const squares = document.querySelectorAll(\".square button\");\r\n        squares.forEach(sq => {\r\n            sq.className = \"mark-button\";\r\n            sq.textContent = \"\";\r\n        })\r\n    }\r\n\r\n    const toggleActive = () => {\r\n        document.querySelector('.game-board').classList.toggle('deactivated');\r\n    }\r\n\r\n    return { markSquare, announceWinner, resetSquares, toggleActive };\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameDisplayer);\n\n//# sourceURL=webpack:///./src/gameDisplayer.js?");

/***/ }),

/***/ "./src/gameFlowController.js":
/*!***********************************!*\
  !*** ./src/gameFlowController.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard.js */ \"./src/gameBoard.js\");\n/* harmony import */ var _gameDisplayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameDisplayer.js */ \"./src/gameDisplayer.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* harmony import */ var _interfaceController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfaceController.js */ \"./src/interfaceController.js\");\n\r\n\r\n\r\n\r\n\r\nconst gameFlowController = (function () {\r\n\r\n    const playerOne = Object(_Player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('First Player', 'X');\r\n    const playerTwo = Object(_Player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Second Player', 'O');\r\n\r\n    let currPlayer = null;\r\n\r\n    let gameFinished = false;\r\n\r\n    const getCurrPlayer = () => currPlayer;\r\n\r\n    function _nextPlayer() {\r\n        currPlayer = (currPlayer === playerOne) ? playerTwo : playerOne;\r\n        _interfaceController_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].showNextPlayer(currPlayer.getName(), currPlayer.getMark());\r\n    }\r\n\r\n    function clearGame() {\r\n        _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearBoard();\r\n        _gameDisplayer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].resetSquares();\r\n        currPlayer = null;\r\n        gameFinished = false;\r\n        _nextPlayer();\r\n    }\r\n\r\n    const gameInit = () => {\r\n        const squares = document.querySelectorAll(\".square\");\r\n        squares.forEach((square, i) => {\r\n            const level = Math.floor(i / 9);\r\n            const position = i - level * 9;\r\n            square.addEventListener('click', () => handleSquareClick(level, position));\r\n        });\r\n        setTimeout(() => {\r\n            _nextPlayer();\r\n        }, 600);\r\n    }\r\n\r\n    const handleSquareClick = (level, position) => {\r\n        if (gameFinished) return;\r\n        if (_gameBoard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].insertMove(currPlayer.getMark(), level, position) !== false) {\r\n            _gameDisplayer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].markSquare(currPlayer.getMark(), level, position);\r\n            const winResults = _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].checkWin();\r\n            if (winResults) {\r\n                currPlayer.addWin();\r\n                _gameDisplayer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].announceWinner(winResults);\r\n                _interfaceController_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].appendScore();\r\n                _interfaceController_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].announceWinner(currPlayer.getName(), currPlayer.getMark());\r\n                gameFinished = true;\r\n            } else {\r\n                _nextPlayer();\r\n            }\r\n        }\r\n    }\r\n\r\n    const getPlayers = () => {\r\n        return [playerOne, playerTwo];\r\n    }\r\n\r\n    return { gameInit, clearGame, getPlayers, getCurrPlayer }\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameFlowController);\r\n\n\n//# sourceURL=webpack:///./src/gameFlowController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interfaceController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaceController */ \"./src/interfaceController.js\");\n\r\n\r\n// gameFlowController.gameInit();\r\n_interfaceController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initInterface();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/interfaceController.js":
/*!************************************!*\
  !*** ./src/interfaceController.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameFlowController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameFlowController */ \"./src/gameFlowController.js\");\n/* harmony import */ var _gameDisplayer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameDisplayer.js */ \"./src/gameDisplayer.js\");\n\r\n\r\n\r\nconst interfaceController = (function () {\r\n    let currPersp = window.innerHeight;\r\n    let currRotate = 0;\r\n    let gameStarted = false;\r\n    const initialLevelTranforms = [\r\n        'rotateX(50deg) translateZ(75vh) translateX(-50%) rotateZ(0deg)',\r\n        'rotateX(50deg) translateZ(50vh) translateX(-50%) rotateZ(0deg)',\r\n        'rotateX(50deg) translateZ(25vh) translateX(-50%) rotateZ(0deg)',\r\n    ];\r\n\r\n    const winMessage = ' wins!';\r\n    const turnMessage = \"'s turn\";\r\n\r\n    const setPerspective = (delta) => {\r\n        currPersp += (delta > 0) ? 100 : -100;\r\n        currPersp = Math.min(currPersp, 2000);\r\n        currPersp = Math.max(currPersp, -200);\r\n        const board = document.querySelector(\".game-board\");\r\n        board.style.perspectiveOrigin = `center ${currPersp}px`;\r\n    }\r\n\r\n    const scrollHandler = (e) => {\r\n        setPerspective(e.deltaY);\r\n    }\r\n\r\n    const setMessage = (message, mark, additionalClass = '') => {\r\n        const container = document.querySelector('.player-message');\r\n        container.style.opacity = 0;\r\n\r\n        setTimeout(() => {\r\n            container.style.opacity = 1;\r\n            container.className = `player-message ${mark} ` + additionalClass;\r\n\r\n            const msg = document.querySelector('.player-message-text');\r\n            msg.textContent = message;\r\n    \r\n            const markElm = document.querySelector('.player-mark');\r\n            markElm.textContent = mark;\r\n        }, 150)\r\n    }\r\n\r\n    const handleRotateButton = (e) => {\r\n        const rotateDelta = e.target.classList.contains('rotate-left') ? 90 : -90;\r\n        const levels = document.querySelectorAll(\".level\");\r\n        for (let i = 0; i < levels.length; i++) {\r\n            levels[i].style.transform = initialLevelTranforms[i].replace(\r\n                    'rotateZ(0deg)', `rotateZ(${currRotate + rotateDelta}deg)`);\r\n        }\r\n        currRotate += rotateDelta;\r\n    }\r\n\r\n    const handleStart = (e) => {\r\n        if (!gameStarted) {\r\n            _gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gameInit();\r\n\r\n            _gameDisplayer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].toggleActive();\r\n\r\n            gameStarted = true;\r\n\r\n            const startButton = document.querySelector(\".start\");\r\n            startButton.classList.add('restart');\r\n            startButton.textContent = 'restart';\r\n        } else {\r\n            _gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearGame();\r\n        }\r\n    }\r\n\r\n    const showPlayers = () => {\r\n        const players = _gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPlayers();\r\n        const nameElems = document.querySelectorAll('.player-name');\r\n        nameElems[0].placeholder = players[0].getName();\r\n        nameElems[1].placeholder = players[1].getName();\r\n    }\r\n\r\n    const listenForRename = () => {\r\n        const players = _gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPlayers();\r\n        const nameElems = document.querySelectorAll('.player-name');\r\n        nameElems[0].addEventListener('input', (e) => handleRename(e, players[0]))\r\n        nameElems[1].addEventListener('input', (e) => handleRename(e, players[1]))\r\n    }\r\n\r\n    const handleRename = (e, player) => {\r\n        if (e.target.value.length < 1) {\r\n            player.rename(player.getDefaultName());\r\n        } else {\r\n            player.rename(e.target.value);\r\n        }\r\n        showPlayers();\r\n        updateNameInMessages(player);\r\n    }\r\n\r\n    const updateNameInMessages = player => {\r\n        if (player == _gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrPlayer()) {\r\n            const msg = document.querySelector('.player-message-text');\r\n            if (msg.textContent.search(turnMessage) !== -1) {\r\n                msg.textContent = player.getName() + turnMessage;\r\n            } else {\r\n                msg.textContent = player.getName() + winMessage;\r\n            }\r\n        }\r\n    }\r\n\r\n    const appendScore = () => {\r\n        const players = _gameFlowController__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getPlayers();\r\n        const wrappers = document.querySelectorAll('.player-name-wrapper');\r\n        wrappers[0].dataset.wins = '🏆'.repeat(players[0].getWins());\r\n        wrappers[1].dataset.wins = '🏆'.repeat(players[1].getWins());\r\n    }\r\n\r\n    const showNextPlayer = (name, mark) => {\r\n        setMessage(name + turnMessage, mark);\r\n    }\r\n\r\n    const announceWinner = (name, mark) => {\r\n        setMessage(name + winMessage, mark, 'win');\r\n    }\r\n\r\n    const initInterface = () => {\r\n        document.addEventListener('wheel', scrollHandler);\r\n\r\n        showPlayers();\r\n        listenForRename();\r\n        \r\n        const rotButtons = document.querySelectorAll(\".rotate-left, .rotate-right\");\r\n        rotButtons.forEach(btn => btn.addEventListener('click', handleRotateButton));\r\n\r\n        const startButton = document.querySelector(\".start\");\r\n        startButton.addEventListener('click', handleStart);\r\n    }\r\n\r\n    return { initInterface, showNextPlayer, announceWinner, appendScore }\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (interfaceController);\n\n//# sourceURL=webpack:///./src/interfaceController.js?");

/***/ })

/******/ });