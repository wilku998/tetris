import styled from "styled-components";

export default styled.div.attrs(({ x, y }: { x: number; y: number }) => ({
  style: {
    top: `calc((100% / 15 * ${y}) + 1px)`,
    left: `calc(100% / 10 * ${x})`
  }
}))`
  position: absolute;
  z-index: -1;
  width: calc((100% - 9px) / 10 );
  height: calc((100% - 14px) / 15);
  ${({
    color,
  }: {
    color: string;
  }) => `
        background-color: ${color};
    `}
`;
