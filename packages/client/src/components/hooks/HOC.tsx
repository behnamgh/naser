import React, { useRef, useState, useEffect } from 'react';
import GEARS1 from '../../images/gears-1.png';
import GEARS2 from '../../images/gears-2.png'
import GEARS3 from '../../images/gears-3.png'
import Walls from "../Walls";
import Logos from "../Logos";
import Gears from "../Gears";
import Frames from "../Frames";


function WithLoading(Component: any) {
    return function WihLoadingComponent({ Loading, ...props }: any) {
        const [width, setWidth] = useState(0);
        const [height, setHeight] = useState(0);
        const date = new Date().getTime();

        const ImageRefs = useRef(null);

        useEffect(() => {
            const updateSize = () => {
                console.log([window.innerWidth, window.innerHeight]);
                setWidth(window.outerWidth);
                setHeight(window.innerHeight);
            }
            window.addEventListener("resize", updateSize);
            updateSize()
            return () => window.removeEventListener('resize', updateSize);
        }, [setWidth, setHeight]);


        if (Loading && height > 600 && 16 / 5 >= width / height && 16 / 9 <= width / height) {
            return (<Component key={`${width}-${height}-${date}`} {...props} />);
        } else if (Loading) {
            return (<div className="size-problem"><span className="size-problem__text">Please maximuze your browser.</span></div>);
        } else {

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
}

export default WithLoading;