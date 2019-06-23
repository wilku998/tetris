import columnI from "../../../interfaces/column";

export default (
  columns: Array<columnI["column"]>,
  positions: Array<{
    x: number,
    y: number
  }>
) => {
  const fullRows = positions.map(({ y }) => {
    return columns.every(column => !column.rows[y].fieldEmpty);
  });
  
  return Array.from(new Set(positions.filter((e, i) => fullRows[i]).map(e => e.y)))
};

