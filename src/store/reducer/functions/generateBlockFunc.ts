import Square from "../../../components/Square/Square";

export default () => ({
    Block: Square,
    id: Date.now(),
    position: { x: 5, y: 0 }
  });