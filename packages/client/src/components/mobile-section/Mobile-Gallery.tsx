import React, { useState } from 'react'
import cx from "classnames";
import GalleryHOLDER from "../../images/mobile/SmallFrame.png"
import Arrow from "../../images/mobile/Arrow.png"
import BIGFRAME from "../../images/mobile/BigFrame.png"
// import languageContext from '../contexts/lang';



function SliderItem(props: any) {
  const { index, src } = props.slide;
  const current = props.current;


  return (<li
    className={cx({ "gallery-mobile__slide-li": 1, "slide--current": current === index, "slide--previous": current - 1 === index, "slide--next": current + 1 === index })}
  >
    <div className="gallery-mobile__slider-wrapper">
      <img className="gallery-mobile__slider-wrapper__image" src={src} alt="" />
      <img className="gallery-mobile__slider-wrapper__holder" src={GalleryHOLDER} alt="" />
    </div>

  </li>);
}



function Slider({ currentData, slides }: any) {

  const wrapperTransform = {
    transform: `translateX(${-1 * (currentData * (100 / slides.length)) + 8.5}%)`
  };

  return (
    <div className="gallery-mobile__slider">
      <ul className="gallery-mobile__slider__wrapper" style={wrapperTransform}>
        {slides.map((slide: any, index: number) => {
          return (
            <SliderItem
              key={index}
              slide={{ src: slide.value, link: slide.link, index }}
              current={currentData}
            />
          );
        })}
      </ul>
    </div>
  );
}





export default function Gallery({ page }: any) {
  // const { lang } = useContext(languageContext);
  const lang = "en-US";
  const slideData = page.contents[0].values && page.contents[0].values[lang];
  const [current, setCurrent] = useState(0);

  const handleNextClick = (increment: number) => () => {
    let next = current + increment;
    if (next < 0) {
      next += slideData.length;
    }
    setCurrent(next % slideData.length)
  }
  return (
    <div className="gallery-mobile">

      <div className="gallery-mobile__big-frame">
        <img src={BIGFRAME} alt="bigframe" />
        <img src={slideData[current].value} alt="bigimage" onClick={() => window.open(slideData[current].value, '_blank')} />
      </div>

      <img src={Arrow} className="gallery-mobile__navbar_right" alt="navbar" onClick={handleNextClick(1)} />
      <img src={Arrow} className="gallery-mobile__navbar_left" alt="navbar" onClick={handleNextClick(-1)} />

      <Slider slideData={slideData} currentData={current} slides={slideData} />
    </div>
  );

}
