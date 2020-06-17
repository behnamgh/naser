import React, { useRef, useEffect } from 'react';
import WALL from '../images/NewExport/Wall-Left.png';
import BACK from '../images/1150231-popular-forest-wallpaper-hd-1920x1200.jpg';
import sideBar from '../images/NewExport/Sidebar.png';

const Walls = () => {

    const left_wall = useRef<HTMLImageElement>(null);
    const right_wall = useRef<HTMLImageElement>(null);
    const left_sidebar = useRef<HTMLImageElement>(null);
    const right_sidebar = useRef<HTMLImageElement>(null);

    useEffect(() => {

        if (left_wall && left_wall.current) left_wall.current.style.width = window.innerWidth > 1680 ? `${((window.innerWidth - 1680) / 2) + 15}px` : `0`;
        if (right_wall && right_wall.current) right_wall.current.style.width = window.innerWidth > 1680 ? `${((window.innerWidth - 1680) / 2) + 15}px` : '0';

        if (left_sidebar && left_sidebar.current) left_sidebar.current.style.left = window.outerWidth/window.innerHeight> 16 / 9?`${((window.innerWidth - (window.innerHeight*16/9)) / 2) -97}px`:"-200px";
        if (right_sidebar && right_sidebar.current) right_sidebar.current.style.right = window.outerWidth/window.innerHeight> 16 / 9?`${((window.innerWidth - (window.innerHeight*16/9)) / 2) -97}px`:"-200px";
        // if (right_sidebar && right_sidebar.current) right_sidebar.current.style.right =window.outerWidth/window.innerHeight> 16 / 9? `${((window.innerWidth - 1680) / 2)-150 }px`:"-200px";

    }, []);

    return (
        <div className="walls">
            <img ref={left_wall} className="walls__side-wall" src={WALL} alt="walls" />
            <img ref={left_sidebar} className="walls__side-bar-left" src={sideBar} alt="sideWall" />
            <img className="walls__background-image" src={BACK} alt="walls" />
            <img ref={right_sidebar} className="walls__side-bar-right" src={sideBar} alt="walls" />
            <img ref={right_wall} className="walls__side-wall" src={WALL} alt="walls" />
        </div>
    );
};

export default Walls;