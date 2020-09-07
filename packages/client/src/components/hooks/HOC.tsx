import React, { useState, useEffect } from 'react';
import GEARS1 from '../../images/gears-1.png';
import GEARS2 from '../../images/gears-2.png'
import GEARS3 from '../../images/gears-3.png'
import MobileComonent from '../MobileComponent';


function WithLoading(Component: any) {
    return function WihLoadingComponent({ Loading, ...props }: any) {
        const [width, setWidth] = useState(0);
        const [height, setHeight] = useState(0);
        const date = new Date().getTime();
        const [seconds, setSeconds] = useState(3);

        useEffect(() => {
            let myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    setSeconds(-5);
                }
            }, 1000);
            return () => {
                clearInterval(myInterval);
            };
        });

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

        if (Loading && width < 600) {
            return (<>
                {seconds !== -5 && <div className="mobile-loading">
                    <div className="mobile-loading__gears">
                        <img src={GEARS1} className={`fixed anticloclwise mobile-gear1-loading`} alt="gear one" />
                        <img src={GEARS2} className={`fixed cloclwise mobile-gear2-loading`} alt="gear two" />
                        <img src={GEARS3} className={`fixed cloclwise mobile-gear3-loading`} alt="gear 3" />
                    </div>
                </div>}
                <MobileComonent key={width} {...props} />            </>);

        } else
            if (Loading && height > 600 && 16 / 5 >= width / height && 16 / 10 <= width / height) {
                return (<>
                    {seconds !== -5 && <div className="loading">
                        <div className="loading__gears">
                            <img src={GEARS1} className={`fixed anticloclwise gear1-loading`} alt="gear one" />
                            <img src={GEARS2} className={`fixed cloclwise gear2-loading`} alt="gear two" />
                            <img src={GEARS3} className={`fixed cloclwise gear3-loading`} alt="gear 3" />
                        </div>
                    </div>}
                    <Component key={`${width}-${height}-${date}`} {...props} />
                </>);
            } else if (Loading) {
                return (<div className="size-problem">
                    {/* <span className="size-problem__text">Please maximuze your browser.</span> */}
                </div>);
            } else {

                return (<div className="loading">
                    <div className="loading__gears">
                        <img src={GEARS1} className={`fixed anticloclwise gear1-loading`} alt="gear one" />
                        <img src={GEARS2} className={`fixed cloclwise gear2-loading`} alt="gear two" />
                        <img src={GEARS3} className={`fixed cloclwise gear3-loading`} alt="gear 3" />
                    </div>
                </div>);

            }
    }
}

export default WithLoading;