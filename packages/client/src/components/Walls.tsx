import React from 'react';
import WALL from '../images/wall-left.png'

const Walls = () => {
    return (
        <div className="walls">
            <img src={WALL} alt="walls" />
            <img src={WALL} alt="walls" />
        </div>
    );
};

export default Walls;