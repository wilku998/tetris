import styled from "styled-components";
import ReactSVG from "react-svg";

export const Button = styled.button``;

export const Icon = styled(ReactSVG)`
  & > div > svg {
    width: 50px;
    height: 50px;
  }
`;

export const IconLeft = styled(Icon)`
    transform: rotate(90deg);
`;

export const IconRight = styled(Icon)`
    transform: rotate(270deg);
`;