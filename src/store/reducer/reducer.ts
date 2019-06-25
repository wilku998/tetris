import {
  changeBlockYPosition,
  changeBlockXPosition,
  generateBlock,
  togglePause,
  rotateBlock
} from "../actionsNames";

import blockI from "../../interfaces/block";
import positionI from "../../interfaces/position";
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
  const { blocks, gameOver, pause } = state;
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
            block.id === id
              ? {
                  ...changeBlockPositionFunc(block, "y", 1),
                  movedBy: { x: block.movedBy.x, y: block.movedBy.y + 1 }
                }
              : block
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

        console.log(fullRowsY)
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
      return state;

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
              ? {
                  ...changeBlockPositionFunc(block, "x", moveXRequest),
                  movedBy: {
                    x: block.movedBy.x + moveXRequest,
                    y: block.movedBy.y
                  }
                }
              : block
          )
        };
      }
      return state;

    case rotateBlock:
      const { rotatedPositionsQuantity, rotatedBy } = block;

      if (rotatedPositionsQuantity > 0) {
        const newRotatedBy =
          rotatedBy === rotatedPositionsQuantity - 1 ? 0 : rotatedBy + 1;
        const rotatedBlockPositions = block.squares.map(
          (e: blockI["squares"][0]) => {
            const { x, y } = e.rotatedPositions[newRotatedBy];
            return {
              x: e.position.x + x,
              y: e.position.y + y
            };
          }
        );

        if (
          !rotatedBlockPositions.some(
            ({ x, y }: positionI) =>
              allOccupiedPositions.findIndex(e => e.x === x && e.y === y) >
                -1 ||
              x > maxX ||
              y > maxY
          )
        ) {
          const rotatedBlock = {
            ...block,
            squares: block.squares.map(
              (square: blockI["squares"][0], i: number) => ({
                ...square,
                position: rotatedBlockPositions[i]
              })
            ),
            rotatedBy: newRotatedBy
          };

          return {
            ...state,
            blocks: blocks.map(block =>
              block.id === id ? rotatedBlock : block
            )
          };
        }
      }
      return state;

    case togglePause:
      return {
        ...state,
        pause: !pause
      };

    default:
      return state;
  }
};
