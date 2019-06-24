import * as React from "react";
import { connect } from "react-redux";

import Block from "../Block/Block";
import { animationTimeing } from "../../staticData/animationTimeing";
import style from "./mainFieldStyles";
import {
  changeBlockXPositionAction,
  changeBlockYPositionAction,
  togglePauzeAction,
  rotateBlockAction
} from "../../store/actions";

const { useEffect } = React;

interface propsI {
  className: string;
  blocks: Array<React.FunctionComponent>;
  gameOver: boolean;
  pauze: boolean;
  changeBlockYPosition: () => void;
  changeBlockXPosition: (moveXRequest: number) => void;
  rotateBlock: () => void;
  togglePauze: () => void;
}
const MainField = ({
  className,
  blocks,
  gameOver,
  togglePauze,
  pauze,
  changeBlockYPosition,
  changeBlockXPosition,
  rotateBlock
}: propsI) => {
  useEffect(() => {
    let rotateBlocked = false;

    if (!gameOver && !pauze) {
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
          togglePauze();
          break;
        default:
      }
    };
    document.addEventListener("keydown", keyListner);

    return () => {
      clearInterval(gamePlay);
      document.removeEventListener("keydown", keyListner);
    };
  }, [gameOver, pauze]);

  return (
    <main className={className}>
      {blocks.map(block => (
        <Block key={block.id} block={block} />
      ))}
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </main>
  );
};

interface mapStateToPropsI {
  blocks: Array<React.FunctionComponent>;
  gameOver: boolean;
  pauze: boolean;
}

const mapStateToProps = ({ blocks, gameOver, pauze }: mapStateToPropsI) => ({
  blocks,
  gameOver,
  pauze
});

const mapDispatchToProps = (dispatch: any) => ({
  togglePauze: () => dispatch(togglePauzeAction()),
  changeBlockXPosition: (moveXRequest: number) =>
    dispatch(changeBlockXPositionAction(moveXRequest)),
  changeBlockYPosition: () => dispatch(changeBlockYPositionAction()),
  rotateBlock: () => dispatch(rotateBlockAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(style(MainField));
