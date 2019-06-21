import * as React from "react";
import { connect } from "react-redux";

import { animationTimeing } from '../../staticData/staticData';

import style from "./mainFieldStyles";

const { useEffect, useState } = React;

interface propsI {
  className: string;
  blocks: Array<React.FunctionComponent>;
}
const MainField = ({ className, blocks }: propsI) => {
  const [moveYRequest, setMoveYRequest] = useState(0);
  const [moveXRequest, setMoveXRequest] = useState(0);

  const resetMoveYRequest = () => setMoveYRequest(0);
  const resetMoveXRequest = () => setMoveXRequest(0);

  useEffect(() => {
    setInterval(() => {
      setMoveYRequest(1)
    }, animationTimeing);

    let lastCall = 0;

    document.addEventListener("keydown", e => {
      const moveBlocked = Date.now() - lastCall < animationTimeing;
      const keyCode = e.code;
      switch (keyCode) {
        case "ArrowLeft":
          if (!moveBlocked) {
            setMoveXRequest(-1)
            lastCall = Date.now();
          }
          break;
        case "ArrowRight":
          if (!moveBlocked) {
            setMoveXRequest(1)
            lastCall = Date.now();
          }
          break;
        case "ArrowDown":
          setMoveYRequest(1);
          lastCall = Date.now();
          break;
        default:
      }
    });
  }, []);

  return (
    <main className={className}>
      {blocks.map((Block, blockIndex) => (
        <Block.Block
          key={Block.id}
          id={Block.id}
          isActive={blocks.length === blockIndex + 1}
          color="orangered"
          moveYRequest={moveYRequest}
          resetMoveYRequest={resetMoveYRequest}
          moveXRequest={moveXRequest}
          resetMoveXRequest={resetMoveXRequest}
          position={Block.position}
        />
      ))}
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </main>
  );
};

interface mapStateToPropsI {
  blocks: Array<React.FunctionComponent>;
}

const mapStateToProps = ({ blocks }: mapStateToPropsI) => ({
  blocks
});

export default connect(mapStateToProps)(style(MainField));
