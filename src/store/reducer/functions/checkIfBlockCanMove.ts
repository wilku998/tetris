import positionI from "../../../interfaces/position";

export default (
  allOccupiedPositions: Array<positionI>,
  positions: Array<positionI>,
  max: number,
  property: "x" | "y",
  value: number
) => {
  const secondProperty = property === 'y' ? 'x' : 'y';
  
  return !positions.some(
    position =>
      allOccupiedPositions.findIndex(
        e => position[secondProperty] === e[secondProperty] ? e[property] === position[property] + value : false
      ) > -1 || position[property] + value > max || position[property] + value < 0
  );
};
