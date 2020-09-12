import React, { useRef, useEffect } from 'react';
import WALL from '../../images/NewExport/Wall-Left.png';

const Walls = () => {

    const left_wall = useRef<HTMLImageElement>(null);
    const right_wall = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (left_wall && left_wall.current) left_wall.current.style.width = window.outerWidth / window.innerHeight > 10 / 16 ? `${((window.innerWidth - (window.innerHeight * 10 / 16)) / 2) + 50}px` : `0`;
        if (right_wall && right_wall.current) right_wall.current.style.width = window.outerWidth / window.innerHeight > 10 / 16 ? `${((window.innerWidth - (window.innerHeight * 10 / 16)) / 2) + 50}px` : '0';
    }, []);

    return (
        <div className="mobile-walls">
            <img ref={left_wall} className="mobile-walls__side-wall" src={WALL} alt="walls" />
            <img ref={right_wall} className="mobile-walls__side-wall" src={WALL} alt="walls" />
        </div>
    );
};

export default Walls;