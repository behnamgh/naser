import React from 'react';
import TABS from '../images/tabs-frame@3x.png'
import NEWS from '../images/news@3x.png'
import HOME from '../images/Home@3x.png'
import GALLERY from '../images/gallery@3x.png'
import GAMEPLAY from '../images/gamePlay@3x.png'
import VIDEO from '../images/video@3x.png'
import JOIN from '../images/join@3x.png'

import TITLEFRAME from '../images/sec-public/title-Frame.png'
import TITLELIGHT from '../images/sec-public/title-Light.png'
import TITLEVIDEO from '../images/VIDEOS.png'
import TITLEGAMEPLAY from '../images/GAMEPLAYSTORY.png'
import TITLEGALLERY from '../images/GALLERY.png'
import TITLENEWS from '../images/NEWS.png'

import LIGHT from '../images/tabs-frame-light@3x.png'

const Menu = ({ scrollToSlide, getCurrentSlideIndex, slidesCount, forwardRef }: { forwardRef: any, scrollToSlide: (pageNumber: number) => void, getCurrentSlideIndex: () => number, slidesCount: number }) => {

    const currentSlideIndex = getCurrentSlideIndex();
    let lightPosition


    if (currentSlideIndex === 0) { lightPosition = "28.2% " }
    else if (currentSlideIndex === 1) { lightPosition = "34.8% " }
    else if (currentSlideIndex === 2) { lightPosition = "40.8% " }
    else if (currentSlideIndex === 3) { lightPosition = "47.1% " }
    else if (currentSlideIndex === 4) { lightPosition = "53.2% " }
    else if (currentSlideIndex === 5) { lightPosition = "59.3% " }


    return (
        <div className="tabs">

            <div className="section-header">
                <img src={TITLEFRAME} style={{ opacity: (currentSlideIndex === 0 || currentSlideIndex === 5) ? `0` : `1` }} alt="title-frame" />
                <img src={TITLEVIDEO} style={{ opacity: currentSlideIndex === 1 ? `1` : `0` }} alt="title-video" />
                <img src={TITLEGAMEPLAY} style={{ opacity: currentSlideIndex === 2 ? `1` : `0` }} alt="title-gameplay" />
                <img src={TITLENEWS} style={{ opacity: currentSlideIndex === 3 ? `1` : `0` }} alt="title-news" />
                <img src={TITLEGALLERY} style={{ opacity: currentSlideIndex === 4 ? `1` : `0` }} alt="title-gallery" />
                <img src={TITLELIGHT} style={{ opacity: (currentSlideIndex === 0 || currentSlideIndex === 5) ? `0` : `1` }} alt="title-light" />
            </div>
            <div className="tabs__container">
                <img src={TABS} alt="" />
                <img src={LIGHT} alt="" ref={forwardRef} style={{ top: `${lightPosition}` }} />
            </div>
            <img src={HOME} className="tabs-h" style={{ transform: currentSlideIndex === 0 ? `translateX(-20px)` : `translateX(0)` }} onClick={() => scrollToSlide(0)} alt="" />
            <img src={VIDEO} className="tabs-v" style={{ transform: currentSlideIndex === 1 ? 'translateX(-20px)' : 'translateX(0)' }} onClick={() => scrollToSlide(1)} alt="" />
            <img src={GAMEPLAY} className="tabs-p" style={{ transform: currentSlideIndex === 2 ? 'translateX(-20px)' : 'translateX(0)' }} onClick={() => scrollToSlide(2)} alt="" />
            <img src={GALLERY} className="tabs-g" style={{ transform: currentSlideIndex === 3 ? 'translateX(-20px)' : 'translateX(0)' }} onClick={() => scrollToSlide(3)} alt="" />
            <img src={NEWS} className="tabs-n" style={{ transform: currentSlideIndex === 4 ? 'translateX(-20px)' : 'translateX(0)' }} onClick={() => scrollToSlide(4)} alt="" />
            <img src={JOIN} className="tabs-j" style={{ transform: currentSlideIndex === 5 ? 'translateX(-20px)' : 'translateX(0)' }} onClick={() => scrollToSlide(5)} alt="" />
        </div>
    );
};

export default Menu;