import React from 'react';

import TABS from '../images/tabs-frame@3x.png'

import TITLEFRAME from '../images/sec-public/title-Frame.png'
import TITLELIGHT from '../images/sec-public/title-Light.png'


import LIGHT from '../images/tabs-frame-light@3x.png'

const Menu = ({ scrollToSlide, getCurrentSlideIndex, slidesCount, forwardRef, pages }: { pages: any, forwardRef: any, scrollToSlide: (pageNumber: number) => void, getCurrentSlideIndex: () => number, slidesCount: number }) => {

    const currentSlideIndex = getCurrentSlideIndex();
    let lightPosition = 28.3 + (6.25 * currentSlideIndex) + "%";
    const rightSpace = window.outerWidth/window.innerHeight> 16 / 10 ? ((window.innerWidth - (window.innerHeight*16 / 10)) / 2) - 5 : 10;

    return (
        <div className="tabs">

            <div className="section-header">
                <img src={TITLEFRAME} style={{ opacity: pages && pages[currentSlideIndex] && pages[currentSlideIndex].titleImage ? `1` : `0` }} alt="title-frame" />
                {pages.map((page: any, index: number) => (page.titleImage && <img key={index} src={page.titleImage} style={{ opacity: currentSlideIndex === index ? `1` : `0` }} alt="title-video" />))}
                <img src={TITLELIGHT} style={{ opacity: pages && pages[currentSlideIndex] && pages[currentSlideIndex].titleImage ? `1` : `0` }} alt="title-light" />
            </div>
            <div className="tabs__container">
                <img src={TABS} alt="" style={{ right: `${rightSpace}px` }} />
                <img src={LIGHT} alt="" ref={forwardRef} style={{ top: `${lightPosition}`, right: `${rightSpace + 33}px` }} />
            </div>
            {pages.map((page: any, index: number) => <img key={index} src={page.menuImage} className={`tabs-${index}`} style={{ right: `${rightSpace + 55}px`, transform: currentSlideIndex === index ? `translateX(-30px)` : `translateX(-10px)` }} onClick={() => scrollToSlide(index)} alt="" />)}

        </div>
    );
};

export default Menu;