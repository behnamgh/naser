import React, { useEffect, useState, useRef } from 'react';
import WALL from './images/wall-left.png'
import GEARS1 from './images/gears-1.png'
import GEARS2 from './images/gears-2.png'
import GEARS3 from './images/gears-3.png'
import LOGO from './images/naser-logo.png'
import TOPFRAME from './images/top-frame@3x.png'
import GEARSTAND from './images/gears-stands.png'
// import DOWNFRAME from './images/down-frame-1@3x.png'
import TABS from './images/tabs-frame@3x.png'
import LIGHTEN_LOGO from './images/naser-lighten-logo.png'
import NEWS from './images/news@3x.png'
import HOME from './images/Home@3x.png'
import GALLERY from './images/gallery@3x.png'
import GAMEPLAY from './images/gamePlay@3x.png'
import VIDEO from './images/video@3x.png'
import JOIN from './images/join@3x.png'
import LIGHT from './images/tabs-frame-light@3x.png'

import Sample from './components/sample-template';

import ReactPageScroller from 'react-page-scroller';

import './sass/main.scss';
const App = () => {
    let myRef = useRef(null as any);
    let myRef3 = useRef(null as any);
    let myRef2 = useRef(null as any);
    const [currentPage, setCurrentPage] = useState(null);
    useEffect(() => {
        window.addEventListener("wheel", event => event.deltaY > 0
            ? setClockside()
            : removeClockSide()
        )
        return () => {
            window.removeEventListener("wheel", event => event.deltaY > 0
                ? setClockside()
                : removeClockSide())
        }
    });

    useEffect(() => {
        myRef.current.style.animationPlayState = "paused"
        myRef2.current.style.animationPlayState = "paused"
        myRef3.current.style.animationPlayState = "paused"
    }, [currentPage]);

    const setClockside = () => {
        myRef.current.style.animation = "clockwiseSpin 2s linear infinite"
        myRef2.current.style.animation = "clockwiseSpin 2s linear infinite"
        myRef3.current.style.animation = "clockwiseSpin 2s linear infinite"
    }

    const removeClockSide = () => {
        myRef.current.style.animation = "antiClockwiseSpin 2s linear infinite"
        myRef2.current.style.animation = "antiClockwiseSpin 2s linear infinite"
        myRef3.current.style.animation = "antiClockwiseSpin 2s linear infinite"
    }

    const handlePageChange = (number: any) => {
        setCurrentPage(number)
    };


    // const getPagesNumbers = () => {
    //     const pageNumbers = [];

    //     for (let i = 1; i <= 5; i++) {
    //         pageNumbers.push(
    //             <button key={i} onClick={handlePageChange}>{i}</button>
    //         );
    //     }

    //     return [...pageNumbers];
    // };
    
    let lightPosition 

    if(currentPage === 0) { lightPosition = "32.8% "} 
    else if(currentPage === 1) { lightPosition = "38.8% "} 
    else if(currentPage === 2) { lightPosition = "44.1% "} 
    else if(currentPage === 3) { lightPosition = "50.2% "} 
    else if(currentPage === 4) { lightPosition = "55.7% "} 
    else if(currentPage === 5) { lightPosition = "61.4% "} 

    return (<div className="App">
        <div className="walls">
            <img src={WALL} alt="walls" />
            <img src={WALL} alt="walls" />
        </div>

        <div className="logo">
            <img src={LOGO} alt="logo" />
            <img src={LIGHTEN_LOGO} alt="lighten logo" />
        </div>

        <img src={GEARSTAND} className="gear-stand" alt="" />
        <img src={GEARS1} className="gear-1" ref={myRef} alt="gear one" />
        <img src={GEARS2} className="gear-2" ref={myRef2} alt="gear two" />
        <img src={GEARS3} className="gear-3" ref={myRef3} alt="gear 3" />

        <div className="frames">
            <img src={TOPFRAME} alt="top" />
        </div>

        <div className="tabs">
            <div className="tabs__container">
                <img src={TABS} alt=""/>
                <img src={LIGHT} alt=""  style={{ top: `${lightPosition}` }}/>

            </div>

            <img src={HOME} className="tabs-h" style={{  right: currentPage === 0 ? '14%' : '12.7%' }} onClick={() => handlePageChange(0)} alt=""/>
            <img src={VIDEO} className="tabs-v" style={{  right: currentPage === 1 ? '14%' : '12.7%' }} onClick={() => handlePageChange(1)} alt=""/>
            <img src={GAMEPLAY} className="tabs-p" style={{  right: currentPage === 2 ? '14%' : '12.7%' }} onClick={() => handlePageChange(2)} alt=""/>
            <img src={GALLERY} className="tabs-g" style={{  right: currentPage === 3 ? '14%' : '12.7%' }} onClick={() => handlePageChange(3)} alt=""/>
            <img src={NEWS} className="tabs-n" style={{  right: currentPage === 4 ? '14%' : '12.7%' }} onClick={() => handlePageChange(4)} alt=""/>
            <img src={JOIN} className="tabs-j" style={{  right: currentPage === 5 ? '14%' : '12.7%' }} onClick={() => handlePageChange(5)} alt=""/>
        </div>

        <div className="content">
            <ReactPageScroller
                pageOnChange={handlePageChange}
                containerWidth={window.innerWidth * 0.4}
                containerHeight={window.innerHeight * 0.5}
                customPageNumber={currentPage}
            >
                <Sample title="Header" />
                <Sample title="Videos" />
                <Sample title="GamePlay" />
                <Sample title="News" />
                <Sample title="Gallery" />
                <Sample title="Footer" />
            </ReactPageScroller>
        </div>

    </div>
    );
};

export default App;