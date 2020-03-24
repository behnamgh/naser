import React, { useEffect } from 'react';
import GEARS1 from '../images/gears-1.png'
import GEARS2 from '../images/gears-2.png'
import GEARS3 from '../images/gears-3.png'
import TOPFRAME from '../images/topFrame.png';
import DOWNFRAME from '../images/downFrame.png';


import GEARSTAND from '../images/gears-stands.png'

const Gears = ({ ImageRefs }: { ImageRefs: any }) => {
    useEffect(() => {
        if (ImageRefs.stand) ImageRefs.stand.current.style.left = `${((window.innerWidth - 1680) / 2) - 5}px`;
        if (ImageRefs.gear1) ImageRefs.gear1.current.style.left = `${((window.innerWidth - 1680) / 2) - 5}px`;
        if (ImageRefs.gear2) ImageRefs.gear2.current.style.left = `${((window.innerWidth - 1680) / 2) - 5}px`;
        if (ImageRefs.gear3) ImageRefs.gear3.current.style.left = `${((window.innerWidth - 1680) / 2) - 5}px`;
    }, [...ImageRefs]);

    return (
        <>
            <div className="frames">
                <img className="frames__frame-top" src={TOPFRAME} alt="top" />

                <img src={GEARSTAND} className={`fixed gear-stand`} ref={ImageRefs.stand} alt="" />
                <img src={GEARS1} className={`fixed gear1`} ref={ImageRefs.gear1} alt="gear one" />
                <img src={GEARS2} className={`fixed gear2`} ref={ImageRefs.gear2} alt="gear two" />
                <img src={GEARS3} className={`fixed gear3`} ref={ImageRefs.gear3} alt="gear 3" />

                <img className="frames__frame-bottom" src={DOWNFRAME} alt="down" />
            </div>
        </>
    );
};

export default Gears;