import * as React from "react";
import { connect } from "react-redux";
import ReactSVG from "react-svg";

import style, { Item, IconButton } from "./headerStyles";
import { toggleMenuScreenAction } from "../../store/actions";

export interface propsI {
  score: number;
  level: number;
  className: string;
  toggleMenuScreen: () => void
}

const Header = ({ score, level, className, toggleMenuScreen }: propsI) => {
  return (
    <header className={className}>
      <Item>Score:{score}</Item>
      <Item>Level:{level}</Item>
      <IconButton onClick={toggleMenuScreen}>
        <ReactSVG src="./svg/square.svg" />
      </IconButton>
    </header>
  );
};

interface mapStateToPropsI {
  score: number;
  level: number;
}

const mapStateToProps = ({ score, level }: mapStateToPropsI) => ({
  score,
  level
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleMenuScreen: () => dispatch(toggleMenuScreenAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(style(Header));
