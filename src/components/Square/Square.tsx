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
      x={x}
      y={y}
      color={color}
      className={className}
    />
  );
};

export default Square;
