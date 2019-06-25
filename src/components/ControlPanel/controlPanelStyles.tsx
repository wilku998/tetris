import styled from "styled-components";
import ReactSVG from "react-svg";
import { propsI } from "./ControlPanel";
import { FunctionComponent } from "react";

export default (ControlPanel: FunctionComponent<propsI>) => styled(
  ControlPanel
)`
  display: grid;
  grid-auto-flow: column;
  padding: 1rem;
  grid-template-columns: repeat(5, 1fr);
  ${({ theme }) => `
    background-color: ${theme.colorGreyLight2}
  `}
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
`;

export const Icon = styled(ReactSVG)`
  & > div > svg {
    width: 30px;
    height: 30px;
  }
`;

export const IconLeft = styled(Icon)`
  transform: rotate(90deg);
`;

export const IconRight = styled(Icon)`
  transform: rotate(270deg);
`;
