import * as React from "react";

import style from "./appStyles";
import GlobalStyles from "../../styledComponents/GlobalStyles";
import MainField from "../MainField/MainField";
import ControlPanel from "../ControlPanel/ControlPanel";

interface propsI {
  className: string;
}
const App = ({ className }: propsI) => (
  <div className={className}>
    <GlobalStyles />
    <MainField />
    <ControlPanel />
  </div>
);

export default style(App);
