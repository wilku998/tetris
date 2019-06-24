import styled from "styled-components";

export default styled.div.attrs(({ x, y }: { x: number; y: number }) => ({
  style: {
    top: `calc(100% / 15 * ${y})`,
    left: `calc(100% / 10 * ${x})`
  }
}))`
  position: absolute;
  width: calc(100% / 10);
  height: calc(100% / 15);
  ${({ color, animationTimeing }: {color: string, animationTimeing: number}) => `
        background-color: ${color};
        transition: all .${animationTimeing}s linear;
    `}
`;
