import * as React from "react";
import { connect } from "react-redux";
import {
  togglePauseAction,
  changeBlockXPositionAction,
  changeBlockYPositionAction,
  rotateBlockAction
} from "../../store/actions";
import style, { Icon, IconLeft, IconRight } from "./controlPanelStyles";

export interface propsI {
  pause: boolean;
  togglePause: () => void;
  changeBlockXPosition: (value: number) => void;
  changeBlockYPosition: () => void;
  rotateBlock: () => void;
  className: string
}

const ControlPanel = ({
  togglePause,
  changeBlockXPosition,
  changeBlockYPosition,
  rotateBlock,
  pause,
  className
}: propsI) => {
  const goLeft = () => changeBlockXPosition(-1);
  const goRight = () => changeBlockXPosition(1);
  return (
    <nav className={className}>
      <button>
        <IconLeft onClick={goLeft} src="./svg/arrow-down.svg" />
      </button>
      <button onClick={goRight}>
        <IconRight src="./svg/arrow-down.svg" />
      </button>
      <button onClick={changeBlockYPosition}>
        <Icon src="./svg/arrow-down.svg" />
      </button>
      <button onClick={rotateBlock}>
        <Icon src="./svg/rotate.svg" />
      </button>
      <button onClick={togglePause}>
        <Icon src={`./svg/${pause ? "play" : "pause"}.svg`} />
      </button>
    </nav>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  togglePause: () => dispatch(togglePauseAction()),
  changeBlockXPosition: (value: number) =>
    dispatch(changeBlockXPositionAction(value)),
  changeBlockYPosition: () => dispatch(changeBlockYPositionAction()),
  rotateBlock: () => dispatch(rotateBlockAction())
});

const mapStateToProps = ({ pause }: { pause: boolean }) => ({ pause });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(style(ControlPanel));
