import {
  changeBlockYPosition,
  changeBlockXPosition,
  generateBlock,
  togglePauze
} from "../actionsNames";

import blockI from "../../interfaces/block";
import initialState from "./initialState";
import generateBlockFunc from "./functions/generateBlockFunc";
import changeBlockPositionFunc from "./functions/changeBlockPositionFunc";
import checkIfBlockCanMove from "./functions/checkIfBlockCanMove";
import getAllOccupiedPositions from "./functions/getAllOccupiedPositions";
import getFullRowsY from "./functions/getFullRowsY";
import filterFullRowBlocks from "./functions/filterFullRowBlocks";

const maxY = 14;
const maxX = 9;

interface actionI {
  type: string;
  moveXRequest?: number;
}

export default (state = initialState, action: actionI) => {
  const { type, moveXRequest } = action;
  const { blocks, gameOver, pauze } = state;
  const block = state.blocks.find(e => e.isActive);
  const { id } = block ? block : { id: undefined };
  const positions = block
    ? block.squares.map((e: blockI["squares"][0]) => e.position)
    : [{ x: 0, y: 0 }];

  const allOccupiedPositions = getAllOccupiedPositions(blocks, id);

  switch (type) {
    case generateBlock:
      return { ...state, blocks: [...state.blocks, generateBlockFunc()] };

    case changeBlockYPosition:
      if (checkIfBlockCanMove(allOccupiedPositions, positions, maxY, "y", 1)) {
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
        const fullRowsY = getFullRowsY(
          getAllOccupiedPositions(blocks, "allPositions"),
          positions,
          maxX + 1
        );

        const newBlocks = [
          ...state.blocks.map(e => ({
            ...e,
            isActive: false
          })),
          generateBlockFunc()
        ];

        return {
          ...state,
          blocks:
            fullRowsY.length > 0
              ? filterFullRowBlocks(newBlocks, fullRowsY)
              : newBlocks
        };
      }

    case changeBlockXPosition:
      if (
        checkIfBlockCanMove(
          allOccupiedPositions,
          positions,
          maxX,
          "x",
          moveXRequest
        ) &&
        checkIfBlockCanMove(allOccupiedPositions, positions, maxY, "y", 1)
      ) {
        return {
          ...state,
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
