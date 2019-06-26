import * as React from "react";
import { connect } from "react-redux";
import style, { Title } from "./menuScreenStyles";
import { toggleMenuScreenAction, restartGameAction } from "../../store/actions";

export interface propsI {
  className: string;
  toggleMenuScreen: () => void;
  restartGame: () => void;
  gameOver: boolean;
  pause: boolean;
  record: number;
}

const MenuScreen = ({
  className,
  toggleMenuScreen,
  restartGame,
  gameOver,
  pause,
  record
}: propsI) => {
  const restartVisible = gameOver || pause;
  return (
    <nav className={className}>
      {gameOver && <Title>game over</Title>}
      <Title margin='big'>Your record:{record}</Title>
      {!gameOver && <button onClick={toggleMenuScreen}>Play</button>}
      {restartVisible && <button onClick={restartGame}>{pause ? 'Restart game' : 'Play again'}</button>}
      <button>Turn off music</button>
    </nav>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  toggleMenuScreen: () => dispatch(toggleMenuScreenAction()),
  restartGame: () => dispatch(restartGameAction())
});

const mapStateToProps = ({
  gameOver,
  pause,
  record
}: {
  gameOver: boolean;
  pause: boolean;
  record: number
}) => ({
  gameOver,
  pause, record
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(style(MenuScreen));
