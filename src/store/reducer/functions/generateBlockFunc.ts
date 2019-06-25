import allBlocks from "../../../staticData/blocks/allBlocks";
import theme from '../../../styledComponents/theme';

const colors = [theme.colorBlue, theme.colorGreen, theme.colorPink];

export default () => {
  const id = Date.now().toString();
  const squares = allBlocks[Math.floor(Math.random() * allBlocks.length)].map((e, i) => ({ ...e, id: `${id}${i}` }));

  return {
    squares,
    id,
    color: colors[Math.floor(Math.random() * colors.length)],
    isActive: true,
    defaultPosition: true,
    transition: "gentle",
    rotatedPositionsQuantity: squares[0].rotatedPositions ? squares[0].rotatedPositions.length : 0,
    rotatedBy: 0,
    movedBy: {x: 0, y: 0}
  };
};
