import React from 'react';
import LeftFrame from '../../images/mobile/FrameLeft.png';
import RightFrame from '../../images/mobile/FrameRight.png';
import Background from '../../images/mobile/BG.jpg';

const frames = () => {
    return (
        <div className="mobile-frames">
            <img className="mobile-frames__frames-right" src={RightFrame} alt="right" />
            <img className="mobile-frames__frames-left" src={LeftFrame} alt="left" />
            <img className="mobile-frames__background" src={Background} alt="back" />
        </div>
    );
};

export default frames;