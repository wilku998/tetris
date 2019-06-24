import allBlocks from "../../../staticData/blocks/allBlocks";
const colors = ["red", "blue", "yellow", "pink", "purple", "brown"];

export default () => {
  const random = Math.floor(Math.random() * allBlocks.length);
  const id = Date.now().toString();
  const squares = allBlocks[random].map((e, i) => ({ ...e, id: `${id}${i}` }));

  return {
    squares,
    id,
    color: colors[random],
    isActive: true,
    defaultPosition: true,
    transition: "gentle",
    rotatedPositionsQuantity: squares[0].rotatedPositions ? squares[0].rotatedPositions.length : 0,
    rotatedBy: 0,
    movedBy: {x: 0, y: 0}
  };
};
