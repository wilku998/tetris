import styled from 'styled-components';
import { FunctionComponent } from 'react';

import { propsI } from './Header';

export default (Header: FunctionComponent<propsI>) => styled(Header)`
    padding: 1rem 1rem .8rem 1rem;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    ${({theme}) => `
        background-color: ${theme.colorGreyLight2};
        border-top: ${theme.purpleBorder};
        border-right: ${theme.purpleBorder};
    `}
`;

export const Item = styled.span`
    line-height: 1;
    &:not(:last-of-type){
        margin-right: 2rem;
    }
`

export const MusicButton = styled.button`
    background-color: transparent;
    border: none;
    display: inline-block;
    width: 1.8rem;
    margin-left: auto;
    box-sizing: content-box;
`