import * as React from "react";

import { animationTimeing } from "../../staticData/animationTimeing";
import StyledSquare from "./squareStyles";

interface propsI {
  color: string;
  square: {
    position: {
      x: number;
      y: number;
    }
  };
  className: string;
}

const Square = ({ color, className, square }: propsI) => {
  const { x, y } = square.position;
  return (
    <StyledSquare
      animationTimeing={animationTimeing / 10}
      style={{ backgroundColor: color }}
      x={x}
      y={y}
      color={color}
      className={className}
    />
  );
};

export default Square;
