import blockI from '../../../interfaces/block';

export default (block: blockI, property: 'y' | 'x', value: number) => ({
  ...block,
  defaultPosition: false,
  squares: block.squares.map(square => ({
    ...square,
    position: {
      ...square.position,
      [property]: square.position[property] + value
    }
  }))
});