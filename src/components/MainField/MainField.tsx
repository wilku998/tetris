import * as React from "react";
import { connect } from "react-redux";

import blockI from '../../interfaces/block'
import Block from "../Block/Block";
import style from "./mainFieldStyles";
import {
  changeBlockXPositionAction,
  changeBlockYPositionAction,
  togglePauseAction,
  rotateBlockAction
} from "../../store/actions";

const { useEffect } = React;

export interface propsI {
  className: string;
  blocks: Array<blockI>;
  gameOver: boolean;
  pause: boolean;
  fallTimeing: number
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
  rotateBlock,
  fallTimeing
}: propsI) => {
  useEffect(() => {
    let rotateBlocked = false;

    if (!gameOver && !pause) {
      var gamePlay = setInterval(() => {
        rotateBlocked = false;
        changeBlockYPosition();
      }, fallTimeing);
    }
    var keyListner = (e: any) => {
      const keyCode = e.code;
      switch (keyCode) {
        case "ArrowLeft":
          if(!pause){
            changeBlockXPosition(-1);
            rotateBlocked = false;
          }
          break;
        case "ArrowRight":
          if(!pause){
            changeBlockXPosition(1);
            rotateBlocked = false;
          }
          break;
        case "ArrowDown":
          if(!pause){
            changeBlockYPosition();
            rotateBlocked = false;
          }
          break;
        case "ArrowUp":
        if (!rotateBlocked && !pause) {
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
  }, [gameOver, pause, fallTimeing]);

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
  fallTimeing: number
}

const mapStateToProps = ({ blocks, gameOver, pause, fallTimeing }: mapStateToPropsI) => ({
  blocks,
  gameOver,
  pause,
  fallTimeing
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
