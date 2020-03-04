import React from 'react';
import TOPFRAME from '../images/topFrame.png';
import DOWNFRAME from '../images/downFrame.png';

const frames = () => {
    return (
        <div className="frames">
            <img src={TOPFRAME} alt="top" />
            <img src={DOWNFRAME} alt="down" />
        </div>
    );
};

export default frames;