import allBlocks from "../../../staticData/blocks/allBlocks";
const colors = ["red", "blue", "yellow", "pink", "purple", "brown"];

export default () => {
  const random = Math.floor(Math.random() * allBlocks.length);
  const id = Date.now().toString();
  return {
    squares: allBlocks[random].map((e, i) => ({ ...e, id: `${id}${i}` })),
    id,
    color: colors[random],
    isActive: true,
    defaultPosition: true
  };
};
