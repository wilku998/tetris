import * as React from "react";
import { connect } from "react-redux";

import style from "./appStyles";
import GlobalStyles from "../../styledComponents/GlobalStyles";
import MainField from "../MainField/MainField";
import ControlPanel from "../ControlPanel/ControlPanel";
import Header from "../Header/Header";
import MenuScreen from "../MenuScreen/MenuScreen";

interface propsI {
  className: string;
  menuScreenVisible: boolean
}
const App = ({ className, menuScreenVisible }: propsI) => (
  <div className={className}>
    <GlobalStyles />
    {menuScreenVisible && <MenuScreen />}
    <Header />
    <MainField />
    <ControlPanel />
  </div>
);

const mapStateToProps = ({menuScreenVisible}: {menuScreenVisible: boolean}) => ({
  menuScreenVisible
})
export default connect(mapStateToProps)(style(App));
