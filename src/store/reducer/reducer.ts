import {
  changeBlockYPosition,
  changeBlockXPosition,
  generateBlock
} from "../actionsNames";

import initialState from "./initialState";
import generateBlockFunc from "./functions/generateBlockFunc";
import changeFullRowFieldsStatus from "./functions/changeFullRowFieldsStatus";
import changeFieldStatus from "./functions/changeFieldStatus";
import changeBlockPositionFunc from "./functions/changeBlockPositionFunc";

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
  const { columns, blocks } = state;
  const { position } = state.blocks.find(e => e.id === id) || {
    position: { x: 0, y: 0 }
  };

  switch (type) {
    case generateBlock:
      return { ...state, blocks: [...state.blocks, generateBlockFunc()] };

    case changeBlockYPosition:
      if (
        columns[position.x].rows[position.y + 1]
          ? columns[position.x].rows[position.y + 1].fieldEmpty
          : false
      ) {
        //moving block
        return {
          ...state,
          blocks: changeBlockPositionFunc(blocks, id, "y", 1)
        };
      } else if (
        position.x === 5 &&
        position.y === 0 &&
        columns[position.x].rows[position.y + 1].fieldEmpty === false
      ) {
        //game over
        return {
          ...state,
          gameOver: true
        };
      } else {
        //block generate, removing row if is full
        const newClomuns = changeFieldStatus(columns, position);
        const isFullRow = newClomuns.every(
          column => !column.rows[position.y].fieldEmpty
        );
        const newBlocks = [...state.blocks, generateBlockFunc()];
        return {
          ...state,
          blocks: isFullRow
            ? newBlocks
                .filter(e => e.position.y !== position.y)
                .map(e => {
                  if (e.position.y < position.y) {
                    return {
                      ...e,
                      position: {
                        ...e.position,
                        y: e.position.y + 1
                      }
                    };
                  } else {
                    return e;
                  }
                })
            : newBlocks,
          columns: isFullRow
            ? changeFullRowFieldsStatus(newClomuns, position)
            : newClomuns
        };
      }

    case changeBlockXPosition:
      if (
        (columns[position.x + moveXRequest]
          ? columns[position.x + moveXRequest].rows[position.y].fieldEmpty
          : false) &&
        (columns[position.x].rows[position.y + 1]
          ? columns[position.x].rows[position.y + 1].fieldEmpty
          : false)
      ) {
        return {
          ...state,
          blocks: changeBlockPositionFunc(blocks, id, "x", moveXRequest)
        };
      }
    default:
      return state;
  }
};
