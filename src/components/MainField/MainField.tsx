import * as React from "react";
import { connect } from "react-redux";

import Block from "../Block/Block";
import { animationTimeing } from "../../staticData/animationTimeing";
import style from "./mainFieldStyles";
import { togglePauzeAction } from "../../store/actions";

const { useEffect, useState } = React;

interface propsI {
  className: string;
  blocks: Array<React.FunctionComponent>;
  gameOver: boolean;
  pauze: boolean;
  togglePauze: () => void
}
const MainField = ({ className, blocks, gameOver, togglePauze, pauze }: propsI) => {
  const [moveYRequest, setMoveYRequest] = useState(0);
  const [moveXRequest, setMoveXRequest] = useState(0);

  const resetMoveYRequest = () => setMoveYRequest(0);
  const resetMoveXRequest = () => setMoveXRequest(0);

  useEffect(() => {
    if (!gameOver && !pauze) {
      var gamePlay = setInterval(() => {
        setMoveYRequest(1);
      }, animationTimeing);
    }

    let lastCall = 0;
    var keyListner = e => {
      const moveBlocked = Date.now() - lastCall < animationTimeing;
      const keyCode = e.code;
      switch (keyCode) {
        case "ArrowLeft":
          if (!moveBlocked) {
            setMoveXRequest(-1);
            lastCall = Date.now();
          }
          break;
        case "ArrowRight":
          if (!moveBlocked) {
            setMoveXRequest(1);
            lastCall = Date.now();
          }
          break;
        case "ArrowDown":
          setMoveYRequest(1);
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
        <Block
          key={block.id}
          block={block}
          moveYRequest={moveYRequest}
          resetMoveYRequest={resetMoveYRequest}
          moveXRequest={moveXRequest}
          resetMoveXRequest={resetMoveXRequest}
        />
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
  togglePauze: () => dispatch(togglePauzeAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(style(MainField));
