import {
  generateBlock,
  changeBlockYPosition,
  changeBlockXPosition,
  togglePauze,
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

export const togglePauzeAction = () => ({
  type: togglePauze
});

export const rotateBlockAction = () => ({
  type: rotateBlock
});