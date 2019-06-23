import {
  changeBlockYPosition,
  changeBlockXPosition,
  generateBlock,
  togglePauze
} from "../actionsNames";

import initialState from "./initialState";
import generateBlockFunc from "./functions/generateBlockFunc";
import changeFullRowFieldsStatus from "./functions/changeFullRowFieldsStatus";
import changeFieldsStatus from "./functions/changeFieldsStatus";
import changeBlockPositionFunc from "./functions/changeBlockPositionFunc";
import findFullRows from "./functions/findFullRows";
import checkIfCanGoDown from "./functions/checkIfCanGoDown";
import checkIfCanTurn from "./functions/checkIfCanTurn";
import filterFullRowBlocks from "./functions/filterFullRowBlocks";
import cloneColumns from "./functions/cloneColumns";

interface actionI {
  type: string;
  position?: {
    x: number;
    y: number;
  };
  id?: number;
  moveXRequest: number;
}

export default (state = initialState, action: actionI) => {
  const { type, id, moveXRequest } = action;
  const { columns, blocks, gameOver, pauze } = state;
  const block = state.blocks.find(e => e.id === id);
  const positions = block
    ? block.squares.map(e => e.position)
    : [{ x: 0, y: 0 }];

  switch (type) {
    case generateBlock:
      return { ...state, blocks: [...state.blocks, generateBlockFunc()] };

    case changeBlockYPosition:
      if (checkIfCanGoDown(columns, positions)) {
        //moving block
        return {
          ...state,
          blocks: blocks.map(block =>
            block.id === id ? changeBlockPositionFunc(block, "y", 1) : block
          )
        };
      } else if (block.defaultPosition) {
        //game over
        return {
          ...state,
          gameOver: true
        };
      } else if (!gameOver) {
        //block generate, removing row if is full
        const newBlocks = [
          ...state.blocks.map(e => ({
            ...e,
            isActive: false
          })),
          generateBlockFunc()
        ];

        const newClomuns = cloneColumns(columns);
        changeFieldsStatus(newClomuns, positions);

        const fullRows = findFullRows(newClomuns, positions);
        console.log(fullRows)
        return {
          ...state,
          pauze: false,
          columns:
            fullRows.length > 0
              ? changeFullRowFieldsStatus(newClomuns, fullRows)
              : newClomuns,
          blocks:
            fullRows.length > 0
              ? filterFullRowBlocks(newBlocks, fullRows)
              : newBlocks
        };
      }

    case changeBlockXPosition:
      if (
        checkIfCanTurn(columns, positions, moveXRequest) &&
        checkIfCanGoDown(columns, positions)
      ) {
        return {
          ...state,
          pauze: false,
          blocks: blocks.map(block =>
            block.id === id
              ? changeBlockPositionFunc(block, "x", moveXRequest)
              : block
          )
        };
      }
    case togglePauze:
      return {
        ...state,
        pauze: !pauze
      };
    default:
      return state;
  }
};
