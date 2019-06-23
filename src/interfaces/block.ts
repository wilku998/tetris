export default interface {
    squares: Array<{
        id: string,
        position: {
            x: number,
            y: number
        }
    }>
    id: string
    color: string,
    isActive: boolean,
    defaultPosition: boolean,
}