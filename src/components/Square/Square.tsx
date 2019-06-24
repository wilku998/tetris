import * as React from "react";

import StyledSquare from "./squareStyles";

interface propsI {
  color: string;
  square: {
    position: {
      x: number;
      y: number;
    };
  };
  className: string;
  transition: "gentle" | "immedietly";
}

const Square = ({ color, className, square, transition }: propsI) => {
  const { x, y } = square.position;
  return (
    <StyledSquare
      style={{ backgroundColor: color }}
      x={x}
      y={y}
      transition={transition}
      color={color}
      className={className}
    />
  );
};

export default Square;
