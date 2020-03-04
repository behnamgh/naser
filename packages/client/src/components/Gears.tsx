import React from 'react';
import GEARS1 from '../images/gears-1.png'
import GEARS2 from '../images/gears-2.png'
import GEARS3 from '../images/gears-3.png'


import GEARSTAND from '../images/gears-stands.png'

const Gears = ({ ImageRefs }: { ImageRefs: any }) => {
    return (
        <>
            <img src={GEARSTAND} className={`fixed gear-stand`} alt="" />
            <img src={GEARS1} className={`fixed gear1`} ref={ImageRefs.gear1} alt="gear one" />
            <img src={GEARS2} className={`fixed gear2`} ref={ImageRefs.gear2} alt="gear two" />
            <img src={GEARS3} className={`fixed gear3`} ref={ImageRefs.gear3} alt="gear 3" />
        </>
    );
};

export default Gears;