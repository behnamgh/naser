import React from 'react';

const Menu = ({ getCurrentSlideIndex}: { pages: any, forwardRef: any, scrollToSlide: (pageNumber: number) => void, getCurrentSlideIndex: () => number, slidesCount: number }) => {

    const currentSlideIndex = getCurrentSlideIndex();
    const pages = [
        {},
        {
            titleImage: "/images/mobile/VIDEOS.png"

        },
        {
            titleImage: "/images/mobile/GAMEPLAY_STORY.png"

        },
        {
            titleImage: "/images/mobile/GALLERY.png"

        },
        {
            titleImage: "/images/mobile/NEWS.png"

        }
    ]

    return (
        <div className="tabs">

            <div className="section-header">
                {/* <img src={TITLEFRAME} className="section-header__title-frame" style={{ opacity: pages && pages[currentSlideIndex] && pages[currentSlideIndex].titleImage ? `1` : `0` }} alt="title-frame" /> */}
                {pages.map((page: any, index: number) => (page.titleImage && <img key={index} className="section-header-mobile__title-image" src={page.titleImage} style={{ opacity: currentSlideIndex === index ? `1` : `0` }} alt={page.titleImage} />))}
                {/* <img src={TITLELIGHT} className="section-header__title-light" style={{ opacity: pages && pages[currentSlideIndex] && pages[currentSlideIndex].titleImage ? `1` : `0` }} alt="title-light" /> */}
            </div>

        </div>
    );
};

export default Menu;