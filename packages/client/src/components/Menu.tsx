import React from 'react';

// import HOME from '../images/Home@3x.png'
// import VIDEO from '../images/video@3x.png'
// import GAMEPLAY from '../images/gamePlay@3x.png'
// import GALLERY from '../images/gallery@3x.png'
// import NEWS from '../images/news@3x.png'
// import JOIN from '../images/join@3x.png'

import TABS from '../images/tabs-frame@3x.png'

import TITLEFRAME from '../images/sec-public/title-Frame.png'
import TITLELIGHT from '../images/sec-public/title-Light.png'


import LIGHT from '../images/tabs-frame-light@3x.png'

const Menu = ({ scrollToSlide, getCurrentSlideIndex, slidesCount, forwardRef, pages }: { pages: any, forwardRef: any, scrollToSlide: (pageNumber: number) => void, getCurrentSlideIndex: () => number, slidesCount: number }) => {

    const currentSlideIndex = getCurrentSlideIndex();
    let lightPosition = 28.3 + (6.25 * currentSlideIndex) + "%";

    return (
        <div className="tabs">

            <div className="section-header">
                <img src={TITLEFRAME} style={{ opacity: (currentSlideIndex === 0 || currentSlideIndex === 5) ? `0` : `1` }} alt="title-frame" />
                {pages.map((page: any, index: number) => (page.titleImage && <img src={page.titleImage} style={{ opacity: currentSlideIndex === index ? `1` : `0` }} alt="title-video" />))}
                <img src={TITLELIGHT} style={{ opacity: (currentSlideIndex === 0 || currentSlideIndex === 5) ? `0` : `1` }} alt="title-light" />
            </div>
            <div className="tabs__container">
                <img src={TABS} alt="" />
                <img src={LIGHT} alt="" ref={forwardRef} style={{ top: `${lightPosition}` }} />
            </div>
            {pages.map((page: any, index: number) => <img src={page.menuImage} className={`tabs-${index}`} style={{ transform: currentSlideIndex === index ? `translateX(-20px)` : `translateX(0)` }} onClick={() => scrollToSlide(index)} alt="" />)}

        </div>
    );
};

export default Menu;