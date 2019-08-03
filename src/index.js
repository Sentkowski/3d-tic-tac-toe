import interfaceController from "./interfaceController";

// gameFlowController.gameInit();
interfaceController.initInterface();

setTimeout(() => {
  document.querySelector("body").classList.remove("preload");
}, 0);
