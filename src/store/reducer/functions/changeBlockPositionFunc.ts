import blockI from '../../../interfaces/block';

export default (blocks: Array<blockI>, id: number, property: 'y' | 'x', value: number) => {
  return blocks.map(block => {
    return block.id === id
      ? {
        ...block,
        position: {
          ...block.position,
          [property]: block.position[property] + value
        }
      }
      : block;
  })
};