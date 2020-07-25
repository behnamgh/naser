import React, { useState, useContext } from 'react'
import Slider from '../slider/Slider'
import NAVBARRIGHT from '../../images/-e-GalleryArrowFrame-Right.png'
import languageContext from '../contexts/lang';

export default function News({ page }: any) {
  const {lang} = useContext(languageContext);
  const slideData = page.contents[0].values && page.contents[0].values[lang];


  const [current, setCurrent] = useState(1);



  const handleNextClick = (increment: number) => () => {
    let next = current + increment;
    if (next < 0) {
      next += slideData.length;
    }
    setCurrent(next % slideData.length)
  }

  const handleSlideClick = (index: number) => {
    if (current !== index && (current !== slideData.length || current !== 0)) {
      setCurrent(index)
    }
  }


  return (
    <div className="news">
      <img src={NAVBARRIGHT} className="news__navbar_left" alt="navbar" onClick={handleNextClick(-1)} />
      <img src={NAVBARRIGHT} className="news__navbar_right" alt="navbar" onClick={handleNextClick(1)} />
        <Slider heading="Example Slider" currentData={current} type="NEWS" slides={slideData} handleSlide={handleSlideClick} />
    </div>
  )
}
