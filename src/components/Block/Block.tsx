import * as React from "react";
import { connect } from "react-redux";
import BlockI from "../../interfaces/block";
import {
  changeBlockXPositionAction,
  changeBlockYPositionAction
} from "../../store/actions";
import Square from "../Square/Square";

const { useEffect } = React;
interface propsI {
  block: BlockI;
  isActive: boolean;
  className: string;
  moveYRequest: number;
  resetMoveYRequest: () => void;
  moveXRequest: number;
  resetMoveXRequest: () => void;
  changeBlockYPosition: (id: number) => void;
  changeBlockXPosition: (moveXRequest: number, id: number) => void;
}

const Block = ({
  moveYRequest,
  resetMoveYRequest,
  moveXRequest,
  resetMoveXRequest,
  changeBlockYPosition,
  changeBlockXPosition,
  block
}: propsI) => {
  const { id, isActive, color, squares } = block;
  
  useEffect(() => {
    if (isActive && moveYRequest === 1) {
      changeBlockYPosition(id);
      resetMoveYRequest();
    }
  }, [moveYRequest]);

  useEffect(() => {
    if (isActive && moveXRequest !== 0) {
      changeBlockXPosition(moveXRequest, id);
    }
    resetMoveXRequest();
  }, [moveXRequest]);

  return (
    <div>
      {squares.map(square => (
        <Square key={square.id} square={square} color={isActive ? "green" : color} />
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  changeBlockXPosition: (moveXRequest: number, id: number) =>
    dispatch(changeBlockXPositionAction(moveXRequest, id)),
  changeBlockYPosition: (id: number) => dispatch(changeBlockYPositionAction(id))
});

export default connect(
  undefined,
  mapDispatchToProps
)(Block);
