import { css } from "styled-components";

export const sizes = {
  medium: 56.25, //900
  medium_2: 37.5, //600
  small: 21.875 //350
};

let media: any = {};

Object.keys(sizes).forEach((key: "medium" | "small") => {
  media[key] = (...args: any) => css`
    @media only screen and (max-width: ${sizes[key]}em) {
      ${css(...args)}
    }
  `;
});

export default media;
