import styled from 'styled-components';
import { FunctionComponent } from 'react';

import { propsI } from './Header';

export default (Header: FunctionComponent<propsI>) => styled(Header)`
    padding: 1rem;
    font-size: 1.4rem;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, max-content) 1fr;
    ${({theme}) => `
        background-color: ${theme.colorGreyLight2}
    `}
`;

export const Item = styled.span`
    &:not(:last-of-type){
        margin-right: 2rem;
    }
`

export const MusicButton = styled.button`
    background-color: transparent;
    border: none;
    display: inline-block;
    width: 1.8rem;
    justify-self: flex-end;
    padding: 0 1rem;
    box-sizing: content-box;
`