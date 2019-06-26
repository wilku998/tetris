import {
  changeBlockYPosition,
  changeBlockXPosition,
  togglePause,
  rotateBlock,
  toggleMenuScreen,
  restartGame
} from "./actionsNames";

export const changeBlockXPositionAction = (moveXRequest: number) => ({
  type: changeBlockXPosition,
  moveXRequest
});

export const changeBlockYPositionAction = () => ({
  type: changeBlockYPosition
});

export const togglePauseAction = () => ({
  type: togglePause
});

export const toggleMenuScreenAction = () => ({
  type: toggleMenuScreen
});

export const rotateBlockAction = () => ({
  type: rotateBlock
});

export const restartGameAction = () => ({
  type: restartGame
});