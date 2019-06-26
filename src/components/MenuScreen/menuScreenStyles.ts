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
  justify-content: center;
  padding: 2rem;
  ${({ theme }) => `
        border-top: ${theme.purpleBorder};
        border-right: ${theme.purpleBorder};
    `}
`;

export const Title = styled.h1<{ margin?: string }>`
  font-size: 1.8rem;
  ${({ margin }) => `
    margin-bottom: ${margin === "big" ? "4rem" : "1rem"} !important;
  `}
`;

export const Footer = styled.footer`
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span {
    &:not(:first-child){
      margin-top: 1rem;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
`;
