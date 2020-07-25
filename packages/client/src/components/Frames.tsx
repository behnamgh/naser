import React from 'react';
import TOPFRAME from '../images/NewExport/Frame.png';

const frames = () => {
    return (
        <div className="frames">
            <img className="frames__top-frame" src={TOPFRAME} alt="top" />
        </div>
    );
};

export default frames;