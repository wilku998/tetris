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
    border-top: ${theme.purpleBorder};
    border-right: ${theme.purpleBorder};
  `}
`;

export const Icon = styled(ReactSVG)`
  & > div {
    display: flex;
    justify-content: center;
    &> svg {
    width: 2rem;
    height: 2rem;
  }}
`;

export const IconLeft = styled(Icon)`
  transform: rotate(90deg);
`;

export const IconRight = styled(Icon)`
  transform: rotate(270deg);
`;
