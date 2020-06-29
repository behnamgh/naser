import React from 'react';
import TOPFRAME from '../images/NewExport/Frame.png';
// import DOWNFRAME from '../images/downFrame.pngs';

const frames = () => {
    return (
        <div className="frames">
            <img className="frames__top-frame" src={TOPFRAME} alt="top" />
            {/* <img src={DOWNFRAME} alt="down" /> */}
        </div>
    );
};

export default frames;