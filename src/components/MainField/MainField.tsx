import * as React from "react";
import { connect } from "react-redux";

import Block from "../Block/Block";
import { animationTimeing } from "../../staticData/animationTimeing";
import style from "./mainFieldStyles";
import {
  changeBlockXPositionAction,
  changeBlockYPositionAction,
  togglePauseAction,
  rotateBlockAction
} from "../../store/actions";

const { useEffect } = React;

interface propsI {
  className: string;
  blocks: Array<React.FunctionComponent>;
  gameOver: boolean;
  pause: boolean;
  changeBlockYPosition: () => void;
  changeBlockXPosition: (moveXRequest: number) => void;
  rotateBlock: () => void;
  togglePause: () => void;
}
const MainField = ({
  className,
  blocks,
  gameOver,
  togglePause,
  pause,
  changeBlockYPosition,
  changeBlockXPosition,
  rotateBlock
}: propsI) => {
  useEffect(() => {
    let rotateBlocked = false;

    if (!gameOver && !pause) {
      var gamePlay = setInterval(() => {
        rotateBlocked = false;
        changeBlockYPosition();
      }, animationTimeing);
    }
    var keyListner = (e: any) => {
      const keyCode = e.code;
      switch (keyCode) {
        case "ArrowLeft":
          changeBlockXPosition(-1);
          rotateBlocked = false;
          break;
        case "ArrowRight":
          changeBlockXPosition(1);
          rotateBlocked = false;
          break;
        case "ArrowDown":
          changeBlockYPosition();
          rotateBlocked = false;
          break;
        case "ArrowUp":
          if (!rotateBlocked) {
            rotateBlock();
            rotateBlocked = true;
          }
          break;
        case "Space":
          togglePause();
          break;
        default:
      }
    };
    document.addEventListener("keydown", keyListner);

    return () => {
      clearInterval(gamePlay);
      document.removeEventListener("keydown", keyListner);
    };
  }, [gameOver, pause]);

  return (
    <main className={className}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      {blocks.map(block => (
        <Block key={block.id} block={block} />
      ))}
    </main>
  );
};

interface mapStateToPropsI {
  blocks: Array<React.FunctionComponent>;
  gameOver: boolean;
  pause: boolean;
}

const mapStateToProps = ({ blocks, gameOver, pause }: mapStateToPropsI) => ({
  blocks,
  gameOver,
  pause
});

const mapDispatchToProps = (dispatch: any) => ({
  togglePause: () => dispatch(togglePauseAction()),
  changeBlockXPosition: (moveXRequest: number) =>
    dispatch(changeBlockXPositionAction(moveXRequest)),
  changeBlockYPosition: () => dispatch(changeBlockYPositionAction()),
  rotateBlock: () => dispatch(rotateBlockAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(style(MainField));
