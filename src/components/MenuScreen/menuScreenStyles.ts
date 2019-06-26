import styled from "styled-components";
import { FunctionComponent } from "react";

import { propsI } from "./MenuScreen";

export default (Header: FunctionComponent<propsI>) => styled(Header)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  ${({ theme }) => `
        border-top: ${theme.purpleBorder};
        border-right: ${theme.purpleBorder};
    `}

  & > * {
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h1<{margin?: string}>`
  font-size: 1.8rem;
  ${({margin}) => `
    margin-bottom: ${margin==='big' ? '4rem' : '1rem'} !important;
  `}
`;
