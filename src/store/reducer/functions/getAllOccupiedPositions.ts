import blockI from "../../../interfaces/block";

export default (blocks: Array<blockI>, id: string) => {
  const allSquaresPositons: Array<{ x: number; y: number }> = [];
  blocks
    .filter(e => e.id !== id)
    .forEach(block => {
      block.squares.forEach(square =>
        allSquaresPositons.push({ ...square.position })
      );
    });
  return allSquaresPositons;
};
