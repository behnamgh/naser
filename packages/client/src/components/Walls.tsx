import React from 'react';
import WALL from '../images/wall-left.png';
import BACK from '../images/1150231-popular-forest-wallpaper-hd-1920x1200.jpg';

const Walls = () => {
    return (
        <div className="walls">
            <img className="walls__side-wall" src={WALL} alt="walls" />
            <img className="walls__background" src={BACK} alt="walls" />
            <img className="walls__side-wall" src={WALL} alt="walls" />
        </div>
    );
};

export default Walls;