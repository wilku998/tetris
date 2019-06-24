import * as React from "react";
import { connect } from "react-redux";

import Block from "../Block/Block";
import { animationTimeing } from "../../staticData/animationTimeing";
import style from "./mainFieldStyles";
import { togglePauzeAction } from "../../store/actions";
import {
  changeBlockXPositionAction,
  changeBlockYPositionAction
} from "../../store/actions";

const { useEffect } = React;

interface propsI {
  className: string;
  blocks: Array<React.FunctionComponent>;
  gameOver: boolean;
  pauze: boolean;
  changeBlockYPosition: () => void;
  changeBlockXPosition: (moveXRequest: number) => void;

  togglePauze: () => void;
}
const MainField = ({
  className,
  blocks,
  gameOver,
  togglePauze,
  pauze,
  changeBlockYPosition,
  changeBlockXPosition
}: propsI) => {
  
  useEffect(() => {
    if (!gameOver && !pauze) {
      var gamePlay = setInterval(() => {
        changeBlockYPosition(1);
      }, animationTimeing);
    }

    let lastCall = 0;
    var keyListner = (e: any) => {
      const moveBlocked = Date.now() - lastCall < animationTimeing;
      const keyCode = e.code;
      switch (keyCode) {
        case "ArrowLeft":
          if (!moveBlocked) {
            changeBlockXPosition(-1);
            lastCall = Date.now();
          }
          break;
        case "ArrowRight":
          if (!moveBlocked) {
            changeBlockXPosition(1);
            lastCall = Date.now();
          }
          break;
        case "ArrowDown":
          changeBlockYPosition(1);
          lastCall = Date.now();
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
  changeBlockYPosition: () => dispatch(changeBlockYPositionAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(style(MainField));
