import * as React from "react";
import { connect } from "react-redux";
import style, { Title } from "./menuScreenStyles";
import { toggleMenuScreenAction, restartGameAction } from "../../store/actions";

export interface propsI {
  className: string;
  toggleMenuScreen: () => void;
  restartGame: () => void;
  gameOver: boolean;
  record: number;
}

const MenuScreen = ({
  className,
  toggleMenuScreen,
  restartGame,
  gameOver,
  record
}: propsI) => {
  return (
    <nav className={className}>
      {gameOver && <Title>game over</Title>}
      <Title margin="big">Your record:{record}</Title>
      {!gameOver ? (
        <button onClick={toggleMenuScreen}>Play</button>
      ) : (
        <button onClick={restartGame}>Restart game</button>
      )}
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
  record
}: {
  gameOver: boolean;
  record: number;
}) => ({
  gameOver,
  record
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(style(MenuScreen));
