import * as React from "react";
import { connect } from "react-redux";

import style from "./appStyles";
import GlobalStyles from "../../styledComponents/GlobalStyles";
import MainField from "../MainField/MainField";
import ControlPanel from "../ControlPanel/ControlPanel";
import Header from "../Header/Header";
import MenuScreen from "../MenuScreen/MenuScreen";

import {
  changeBlockXPositionAction,
  changeBlockYPositionAction,
  togglePauseAction,
  rotateBlockAction
} from "../../store/actions";

const { useEffect } = React;

interface propsI {
  className: string;
  menuScreenVisible: boolean;
  gameOver: boolean;
  pause: boolean;
  fallTimeing: number;
  changeBlockYPosition: () => void;
  changeBlockXPosition: (moveXRequest: number) => void;
  rotateBlock: () => void;
  togglePause: () => void;
}
const App = ({
  className,
  menuScreenVisible,
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
    const isPlaying = !gameOver && !pause;
    if (isPlaying) {
      var gamePlay = setInterval(() => {
        rotateBlocked = false;
        changeBlockYPosition();
      }, fallTimeing);
    }
    var keyListner = (e: any) => {
      const keyCode = e.code;
      switch (keyCode) {
        case "ArrowLeft":
          if (isPlaying) {
            changeBlockXPosition(-1);
            rotateBlocked = false;
          }
          break;
        case "ArrowRight":
          if (isPlaying) {
            changeBlockXPosition(1);
            rotateBlocked = false;
          }
          break;
        case "ArrowDown":
          if (isPlaying) {
            changeBlockYPosition();
            rotateBlocked = false;
          }
          break;
        case "ArrowUp":
          if (!rotateBlocked && isPlaying) {
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
    <div className={className}>
      <GlobalStyles />
      {menuScreenVisible && <MenuScreen />}
      <Header />
      <MainField />
      <ControlPanel />
    </div>
  );
};

interface mapStateToPropsI {
  blocks: Array<React.FunctionComponent>;
  gameOver: boolean;
  pause: boolean;
  fallTimeing: number;
  menuScreenVisible: boolean;

}

const mapStateToProps = ({
  blocks,
  gameOver,
  pause,
  fallTimeing,
  menuScreenVisible
}: mapStateToPropsI) => ({
  blocks,
  gameOver,
  pause,
  fallTimeing,
  menuScreenVisible
});

const mapDispatchToProps = (dispatch: any) => ({
  togglePause: () => dispatch(togglePauseAction()),
  changeBlockXPosition: (moveXRequest: number) =>
    dispatch(changeBlockXPositionAction(moveXRequest)),
  changeBlockYPosition: () => dispatch(changeBlockYPositionAction()),
  rotateBlock: () => dispatch(rotateBlockAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(style(App));
