import blockI from "../../../interfaces/block";

export default (blocks: Array<blockI>, fullRowsY: Array<number>) =>
  blocks
    .map(block => ({
      ...block,
      squares: block.squares.filter(e => !fullRowsY.some(y => y === e.position.y)).map(e => {
        if(fullRowsY.some(y => y > e.position.y)){
          return {
            ...e,
            position: {
              ...e.position,
              y: e.position.y + 1
            }
          }
        }else{
          return e
        }
      })
    })).filter(block => block.squares.length > 0)
