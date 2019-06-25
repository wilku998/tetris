import { FunctionComponent } from "react";
import styled from "styled-components";

import { propsI } from "./MainField";

export default (MainField: FunctionComponent<propsI>) => styled(MainField)`
  height: 60rem;
  display: grid;
  grid-template-rows: repeat(15, 1fr);
  grid-template-columns: repeat(10, 1fr);
  position: relative;

  ${({ theme }) => `
    & > div {
      border-top: ${theme.purpleBorder};
      border-right: ${theme.purpleBorder};
    }
  `}
`;
