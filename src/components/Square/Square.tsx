import * as React from "react";
import { connect } from "react-redux";

import { animationTimeing } from '../../staticData/staticData';
import { changeBlockXPositionAction, changeBlockYPositionAction } from "../../store/actions";
import StyledSquare from "./squareStyles";

const { useEffect } = React;

interface propsI {
    id: number
    color: string;
    className: string;
    isActive: boolean;
    moveYRequest: number;
    resetMoveYRequest: () => void;
    moveXRequest: number;
    resetMoveXRequest: () => void;
    position: {
        x: number,
        y: number
    },
    changeBlockYPosition: (id: number) => void,
    changeBlockXPosition: (moveXRequest: number, id: number) => void
}

const Square = ({
    color,
    isActive,
    moveYRequest,
    resetMoveYRequest,
    moveXRequest,
    resetMoveXRequest,
    className,
    position,
    changeBlockYPosition,
    changeBlockXPosition,
    id
}: propsI) => {
    const { x, y } = position;

    useEffect(() => {
        if (isActive && moveYRequest === 1) {
            changeBlockYPosition(id);
            resetMoveYRequest();
        }
    }, [moveYRequest]);

    useEffect(() => {
        if (isActive && moveXRequest !== 0) {
            changeBlockXPosition(moveXRequest, id)
        }
        resetMoveXRequest();
    }, [moveXRequest]);

    return (
        <StyledSquare
            animationTimeing={animationTimeing/10}
            style={{ backgroundColor: isActive ? "green" : "orangered" }}
            x={x}
            y={y}
            color={color}
            className={className}
        />
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    changeBlockXPosition: (moveXRequest: number, id: number) => dispatch(changeBlockXPositionAction(moveXRequest, id)),
    changeBlockYPosition: (id: number) => dispatch(changeBlockYPositionAction(id)),
});

export default connect(
    undefined,
    mapDispatchToProps
)(Square);
