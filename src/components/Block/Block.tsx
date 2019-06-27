import * as React from "react";
import BlockI from "../../interfaces/block";

import Square from "../Square/Square";

interface propsI {
  block: BlockI;
}

const Block = ({
  block
}: propsI) => {
  const { color, squares } = block;
  
  return (
    <div style={{border: 'none', width: 0, height: 0}}>
      {squares.map(square => (
        <Square key={square.id} square={square} color={color} />
      ))}
    </div>
  );
};

export default React.memo(Block)
