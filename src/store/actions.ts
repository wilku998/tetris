import {
  generateBlock,
  changeBlockYPosition,
  changeBlockXPosition,
  togglePause,
  rotateBlock
} from "./actionsNames";

export const generateBlockAction = () => ({
  type: generateBlock
});

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

export const rotateBlockAction = () => ({
  type: rotateBlock
});