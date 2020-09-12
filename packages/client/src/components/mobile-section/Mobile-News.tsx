import React, { useState } from 'react'
import cx from "classnames";
import NEWSHOLDER from "../../images/mobile/News.png"
import NewsReadMore from "../../images/mobile/NewsReadMore.png"
import Arrow from "../../images/mobile/Arrow.png"
// import languageContext from '../contexts/lang';



function SliderItem(props: any) {
  const { index, src, link } = props.slide;
  const current = props.current;

  return (<li
    className={cx({ "news-mobile__slide-li": 1, "slide--current": current === index, "slide--previous": current - 1 === index, "slide--next": current + 1 === index })}
  >
    <div className="news-mobile__slider-wrapper">
      <span className="news-mobile__slider-wrapper__content" >{src}</span>
      <img className="news-mobile__slider-wrapper__holder" src={link ? NewsReadMore : NEWSHOLDER} alt="" />
      {link && <a href={link} className="news-mobile__slider-wrapper__link" target="_blank">More</a>}
    </div>

  </li>);
}



function Slider({ currentData, slides }: any) {

  const wrapperTransform = {
    transform: `translateX(${-1 * (currentData * (100 / slides.length)) + 0.5}%)`
  };

  return (
    <div className="news-mobile__slider">
      <ul className="news-mobile__slider__wrapper" style={wrapperTransform}>
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





export default function News({ slideData }: any) {
  const [current, setCurrent] = useState(0);

  const handleNextClick = (increment: number) => () => {
    let next = current + increment;
    if (next < 0) {
      next += slideData.length;
    }
    setCurrent(next % slideData.length)
  }
  return (
    <div className="news-mobile">

      <img src={Arrow} className="news-mobile__navbar_right" alt="navbar" onClick={handleNextClick(1)} />
      <img src={Arrow} className="news-mobile__navbar_left" alt="navbar" onClick={handleNextClick(-1)} />
      <Slider slideData={slideData} currentData={current} slides={slideData} />
    </div>
  );

}
