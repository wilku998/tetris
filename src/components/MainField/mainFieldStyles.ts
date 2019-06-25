import { FunctionComponent } from "react";
import styled from "styled-components";

import { propsI } from "./MainField";

export default (MainField: FunctionComponent<propsI>) => styled(MainField)`
  height: 600px;
  border-top: 1px solid black;
  border-left: 1px solid black;
  display: grid;
  grid-template-rows: repeat(15, 1fr);
  grid-template-columns: repeat(10, 1fr);
  position: relative;
  & > div {
    border-bottom: 1px solid black;
    border-right: 1px solid black;
  }
`;
