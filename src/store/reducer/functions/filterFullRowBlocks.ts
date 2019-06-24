import blockI from "../../../interfaces/block";

export default (blocks: Array<blockI>, fullRowsY: Array<number>) => {
  console.log("filtering");
  return blocks
    .map(block => ({
      ...block,
      squares: block.squares
        .filter(e => !fullRowsY.some(y => y === e.position.y))
        .map(e => {
          const value = fullRowsY.filter(y => e.position.y < y).length;

          if (value > 0) {
            return {
              ...e,
              position: {
                ...e.position,
                y: e.position.y + value
              }
            };
          } else {
            return e;
          }
        })
    }))
    .filter(block => block.squares.length > 0);
};
