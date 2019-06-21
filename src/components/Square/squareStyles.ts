import styled from 'styled-components';

export default styled.div`
    position: absolute;
    width: calc(100% / 10);
    height: calc(100% / 15);
    ${({color, x, y, animationTimeing}) => `
        top: calc(100% / 15 * ${y});
        left: calc(100% / 10 * ${x});
        background-color: ${color};
        transition: all .${animationTimeing}s linear;
    `}
`; 