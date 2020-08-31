import React from 'react';

// import TABS from '../images/tabs-frame@3x.png'

import TITLEFRAME from '../images/Header/Header.png'
import Presskit_holder from '../images/Header/PressKit_Desktop.png'
import Presskit from '../images/Header/Bottun-Up.png'
// import TITLELIGHT from '../images/Header/Header-Light.png'


import LIGHT from '../images/tabs-frame-light@3x.png'

const Menu = ({ scrollToSlide, getCurrentSlideIndex, slidesCount, forwardRef, pages }: { pages: any, forwardRef: any, scrollToSlide: (pageNumber: number) => void, getCurrentSlideIndex: () => number, slidesCount: number }) => {

    const currentSlideIndex = getCurrentSlideIndex();
    // let lightPosition = 28.3 + (6.25 * currentSlideIndex) + "%";
    let lightPosition = [33.1,
        38.8,
        44.4,
        50.1,
        55.8,
        61.5][currentSlideIndex];

    const rightSpace = window.outerWidth / window.innerHeight > 16 / 10 ? ((window.innerWidth - (window.innerHeight * 16 / 10)) / 2) + (0.054 * window.innerHeight) : window.innerWidth * 0.10;

    return (
        <div className="tabs">

            <div className="section-header">
                <img src={TITLEFRAME} className="section-header__title-frame" style={{ opacity: pages && pages[currentSlideIndex] && pages[currentSlideIndex].titleImage ? `1` : `0` }} alt="title-frame" />
                {pages.map((page: any, index: number) => (page.titleImage && <img key={index} className="section-header__title-image" src={page.titleImage} style={{ opacity: currentSlideIndex === index ? `1` : `0` }} alt="title-video" />))}
                {currentSlideIndex === 5 && <><img src={Presskit_holder} className="section-header__press-frame" alt="title-frame" />
                    <img style={{ pointerEvents: "visible", cursor: "grab" }} className="section-header__press-image" onClick={() => { window.location.href = "https://enlightenedrobot.com/press" }} src={Presskit} alt="title-video" />
                </>}

                {/* <img src={TITLELIGHT} className="section-header__title-light" style={{ opacity: pages && pages[currentSlideIndex] && pages[currentSlideIndex].titleImage ? `1` : `0` }} alt="title-light" /> */}
            </div>
            <div className="tabs__container">
                {/* <img src={TABS} alt="" style={{ right: `${rightSpace}px` }} /> */}
                <img src={LIGHT} alt="" ref={forwardRef} style={{ top: `${lightPosition - 3}%`, right: `${rightSpace - (0.038 * window.innerHeight)}px` }} />
            </div>
            {pages.map((page: any, index: number) => <img key={index} src={page.menuImage} className={`tabs-${index}`} style={{ right: `${rightSpace}px`, transform: currentSlideIndex === index ? `translateX(-4vh)` : `none` }} onClick={() => scrollToSlide(index)} alt="" />)}

        </div>
    );
};

export default Menu;