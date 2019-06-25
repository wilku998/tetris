import styled from "styled-components";
import { FunctionComponent } from "react";

export default (App: FunctionComponent<{className: string}>) => styled(App)`
  width: 400px;
`;
