import React, { useRef, useEffect } from 'react';
import LeftFrame from '../../images/mobile/FrameLeft.png';
import RightFrame from '../../images/mobile/FrameRight.png';
import Background from '../../images/mobile/BG.jpg';

const Frames = () => {
    const left_side = useRef<HTMLImageElement>(null);
    const right_side = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (left_side && left_side.current) left_side.current.style.left = window.outerWidth / window.innerHeight > 10 / 16 ? `${((window.innerWidth - (window.innerHeight * 10 / 16)) / 2) +30}px` : "0px";
        if (right_side && right_side.current) right_side.current.style.right = window.outerWidth / window.innerHeight > 10 / 16 ? `${((window.innerWidth - (window.innerHeight * 10 / 16)) / 2) +30}px` : "0px";
    }, []);


    return (
        <div className="mobile-frames">
            <img ref={right_side} className="mobile-frames__frames-right" src={RightFrame} alt="right" />
            <img ref={left_side} className="mobile-frames__frames-left" src={LeftFrame} alt="left" />
            <img className="mobile-frames__background" src={Background} alt="back" />
        </div>
    );
};

export default Frames;