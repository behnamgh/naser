import React, { useRef, useEffect } from 'react';
import WALL from '../images/wall-left.png';
import BACK from '../images/1150231-popular-forest-wallpaper-hd-1920x1200.jpg';

const Walls = () => {

    const left_wall = useRef<HTMLImageElement>(null);
    const right_wall = useRef<HTMLImageElement>(null);

    useEffect(() => {

        if (left_wall && left_wall.current) left_wall.current.style.width = window.innerWidth > 1680 ? `${((window.innerWidth - 1680) / 2) + 15}px` : `0`;
        if (right_wall && right_wall.current) right_wall.current.style.width = window.innerWidth > 1680 ? `${((window.innerWidth - 1680) / 2) + 15}px` : '0';
    }, []);

    return (
        <div className="walls">
            <img ref={left_wall} className="walls__side-wall" src={WALL} alt="walls" />
            <img className="walls__background-image" src={BACK} alt="walls" />
            <img ref={right_wall} className="walls__side-wall" src={WALL} alt="walls" />
        </div>
    );
};

export default Walls;