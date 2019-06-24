import positionI from './position';

export default interface {
    squares: Array<{
        id: string,
        position: positionI,
        rotatedPositions?: Array<positionI>
    }>
    id: string
    color: string,
    isActive: boolean,
    defaultPosition: boolean,
    rotatedBy: number,
    rotatedPositionsQuantity: number,
    movedBy: {x: number, y: number}
}