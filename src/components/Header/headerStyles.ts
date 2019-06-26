import styled from "styled-components";
import { FunctionComponent } from "react";

import { propsI } from "./Header";

export default (Header: FunctionComponent<propsI>) => styled(Header)`
  padding: 1rem;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  ${({ theme }) => `
        border-top: ${theme.purpleBorder};
        border-right: ${theme.purpleBorder};
    `}
`;

export const Item = styled.span`
  line-height: 1;
  margin-top: 0.2rem;
  &:not(:last-of-type) {
    margin-right: 2rem;
  }
`;

export const IconButton = styled.button`
  display: inline-block;
  box-sizing: content-box;
  margin-left: auto;

  & > div > div {
    display: flex;

    & > svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;
