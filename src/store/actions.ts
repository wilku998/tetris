import { generateBlock, changeBlockYPosition, changeBlockXPosition } from './actionsNames';

export const generateBlockAction = () => ({
    type: generateBlock
});

export const changeBlockXPositionAction = (moveXRequest: number, id: number) => ({
    type: changeBlockXPosition,
    moveXRequest,
    id
})

export const changeBlockYPositionAction = (id: number) => ({
    type: changeBlockYPosition,
    id
})