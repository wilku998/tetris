import generateBlockFunc from "./functions/generateBlockFunc";

export default () => {
  const blocks = [generateBlockFunc()]
  return {
    blocks,
    gameOver: false,
    pause: true,
    source: blocks[0].squares.length,
    level: 1,
    fallTimeing: 500,
    menuScreenVisible: true,
    record: 0
  };
};
