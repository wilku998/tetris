import positionI from "../../../interfaces/position";

export default (
  allPositions: Array<positionI>,
  positionsToCheck: Array<positionI>,
  maxPerRow: number,
) => {
  const fullRows = positionsToCheck.map(({ x, y }) => allPositions.filter(e => e.y === y).length === maxPerRow);
  return Array.from(new Set(allPositions.filter((e, i) => fullRows[i]).map(e => e.y)))
};
