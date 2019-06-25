import * as React from "react";
import { connect } from "react-redux";
import {
  togglePauseAction,
  changeBlockXPositionAction,
  changeBlockYPositionAction,
  rotateBlockAction
} from "../../store/actions";
import { Button, Icon, IconLeft, IconRight } from "./controlPanelStyles";

interface propsI {
  pause: boolean;
  togglePause: () => void;
  changeBlockXPosition: (value: number) => void;
  changeBlockYPosition: () => void;
  rotateBlock: () => void;
}

const ControlPanel = ({
  togglePause,
  changeBlockXPosition,
  changeBlockYPosition,
  rotateBlock,
  pause
}: propsI) => {
  const goLeft = () => changeBlockXPosition(-1);
  const goRight = () => changeBlockXPosition(1);
  return (
    <nav>
      <Button>
        <IconLeft onClick={goLeft} src="./svg/arrow-down.svg" />
      </Button>
      <Button onClick={goRight}>
        <IconRight src="./svg/arrow-down.svg" />
      </Button>
      <Button onClick={changeBlockYPosition}>
        <Icon src="./svg/arrow-down.svg" />
      </Button>
      <Button onClick={rotateBlock}>
        <Icon src="./svg/rotate.svg" />
      </Button>
      <Button onClick={togglePause}>
        <Icon src={`./svg/${pause ? "play" : "pause"}.svg`} />
      </Button>
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
)(ControlPanel);
