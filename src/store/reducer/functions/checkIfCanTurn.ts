import columnI from "../../../interfaces/column";
import blockI from "../../../interfaces/block";

export default (
  columns: Array<columnI>,
  positions: Array<{x: number, y: number}>,
  moveXRequest: number
) =>
  positions.every(position =>
    columns[position.x + moveXRequest]
      ? columns[position.x + moveXRequest].rows[position.y].fieldEmpty
      : false
  );
