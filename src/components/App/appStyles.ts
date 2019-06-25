import styled from "styled-components";
import { FunctionComponent } from "react";

export default (App: FunctionComponent<{className: string}>) => styled(App)`
  width: 40rem;
  display: flex;
  flex-direction: column;
  
  ${({theme}) => `
    border-bottom: ${theme.purpleBorder};
    border-left: ${theme.purpleBorder};
  `}
`;
