import React, { useRef } from 'react';
import GEARS1 from '../../images/gears-1.png';
import GEARS2 from '../../images/gears-2.png'
import GEARS3 from '../../images/gears-3.png'
import Walls from "../Walls";
import Logos from "../Logos";
import Gears from "../Gears";
import Frames from "../Frames";


function WithLoading(Component: any) {
    return function WihLoadingComponent({ Loading, ...props }: any) {

        const ImageRefs = useRef(null);

        if (Loading) return (<Component {...props} />);


        return (<div className="App section">
            <Walls />
            <Logos />
            <Gears ImageRefs={ImageRefs} />
            <Frames />
            <img src={GEARS1} className={`fixed anticloclwise gear1-loading`} alt="gear one" />
            <img src={GEARS2} className={`fixed cloclwise gear2-loading`} alt="gear two" />
            <img src={GEARS3} className={`fixed cloclwise gear3-loading`} alt="gear 3" />
        </div>);

    }
}

export default WithLoading;