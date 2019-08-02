import gameFlowController from "./gameFlowController";

const boardStylesManager = (function() {
  const initialExpandedLevelTranforms = {
    desktop: [
      "rotateX(50deg) translateZ(83vh) translateX(-50%) rotateZ(0deg)",
      "rotateX(50deg) translateZ(65vh) translateX(-50%) rotateZ(0deg)",
      "rotateX(50deg) translateZ(45vh) translateX(-50%) rotateZ(0deg)",
      "rotateX(50deg) translateZ(25vh) translateX(-50%) rotateZ(0deg)"
    ],
    mobile: [
      "rotateX(50deg) translateZ(195vw) translateX(-50%) rotateZ(0deg)",
      "rotateX(50deg) translateZ(155vw) translateX(-50%) rotateZ(0deg)",
      "rotateX(50deg) translateZ(110vw) translateX(-50%) rotateZ(0deg)",
      "rotateX(50deg) translateZ(60vw) translateX(-50%) rotateZ(0deg)"
    ]
  };
  // const expandedGridTemplate = "repeat(4, 1fr) / repeat(4, 1fr)";
  const initialLevelTranforms = {
    desktop: [
      "rotateX(50deg) translateZ(75vh) translateX(-50%) rotateZ(0deg)",
      "rotateX(50deg) translateZ(50vh) translateX(-50%) rotateZ(0deg)",
      "rotateX(50deg) translateZ(25vh) translateX(-50%) rotateZ(0deg)"
    ],
    mobile: [
      "rotateX(50deg) translateZ(165vw) translateX(-50%) rotateZ(0deg)",
      "rotateX(50deg) translateZ(115vw) translateX(-50%) rotateZ(0deg)",
      "rotateX(50deg) translateZ(60vw) translateX(-50%) rotateZ(0deg)"
    ]
  };

  const expandedGridTemplate = "repeat(4, 1fr) / repeat(4, 1fr)";

  const mobileQuery = "screen and (max-width: 599px)";

  let currRotate = 0;

  const resetRotate = () => (currRotate = 0);

  const checkDevice = () => {
    const mq = window.matchMedia(mobileQuery);
    return mq.matches ? "mobile" : "desktop";
  };

  const getRightTransforms = () => {
    const stylesForSize =
      gameFlowController.getGameSize() === 3
        ? initialLevelTranforms
        : initialExpandedLevelTranforms;
    return stylesForSize[checkDevice()];
  };

  const rotate = dir => {
    currRotate += dir;
    const levels = document.querySelectorAll(".level");
    const styles = getRightTransforms();
    for (let i = 0; i < levels.length; i++) {
      levels[i].style.transform = styles[i].replace(
        "rotateZ(0deg)",
        `rotateZ(${currRotate}deg)`
      );
    }
  };

  const styleForExpanded = () => {
    const transforms = boardStylesManager.getRightTransforms();
    const levels = document.querySelectorAll(".level");
    for (let i = 0; i < levels.length; i++) {
      const level = levels[i];
      level.style.transform = transforms[i];
      level.style.gridTemplate = expandedGridTemplate;
    }
  };

  return {
    rotate,
    resetRotate,
    getRightTransforms,
    checkDevice,
    styleForExpanded
  };
})();

export default boardStylesManager;
