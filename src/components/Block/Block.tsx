import * as React from "react";
import BlockI from "../../interfaces/block";

import Square from "../Square/Square";

interface propsI {
  block: BlockI;
}

const Block = ({
  block
}: propsI) => {
  const { isActive, color, squares } = block;
  
  return (
    <div>
      {squares.map(square => (
        <Square key={square.id} square={square} color={isActive ? "green" : color} />
      ))}
    </div>
  );
};

export default Block
