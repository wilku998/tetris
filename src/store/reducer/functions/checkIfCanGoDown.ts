import columnI from "../../../interfaces/column";

export default (
  columns: Array<columnI>,
  positions: Array<{
    x: number,
    y: number
  }>
) =>{
  return positions.every((position) =>
    columns[position.x].rows[position.y + 1]
      ? columns[position.x].rows[position.y + 1].fieldEmpty
      : false
  );
}

