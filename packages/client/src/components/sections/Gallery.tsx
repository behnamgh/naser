import React, { useState, useContext } from 'react';

import Slider from '../slider/Slider'

// import BIGFRAME from '../../images/-e-BigFrame-1.png'
// import FRAMEHOLDER from '../../images/-e-hanger.png'
// import BOTTOMFRAME from '../../images/-e-SmallFrame.png'
import NAVBARRIGHT from '../../images/-e-GalleryArrowFrame-Right.png'
import NAVBARLIGHT from '../../images/-e-GalleryArrow-Right.png'

import BIGFRAME from '../../images/NewExport/GalleryBigFrame.png'


import languageContext from '../contexts/lang';

export default function Gallery({ page }: any) {
  const { lang } = useContext(languageContext);
  const slideData = page.contents[0].values && page.contents[0].values[lang];

  const [current, setCurrent] = useState(0);

  const handleNextClick = (increment: number) => () => {
    let next = current + increment;
    if (next < 0) {
      next += slideData.length;
    }
    setCurrent(next % slideData.length)
  }


  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index)
    }
  }


  return (
    <div className="gallery">
      <div className="gallery__big-frame">
        <img src={BIGFRAME} alt="bigframe" />
        <img src={slideData[current].value} alt="bigimage" />
      </div>

      <img src={NAVBARRIGHT} className="gallery__navbar_left" alt="navbar" onClick={handleNextClick(-1)} />
      <img src={NAVBARRIGHT} className="gallery__navbar_right" alt="navbar" onClick={handleNextClick(1)} />

      <img src={NAVBARLIGHT} className="gallery__navbar_light_left" alt="navbar" onClick={handleNextClick(-1)} />
      <img src={NAVBARLIGHT} className="gallery__navbar_light_right" alt="navbar" onClick={handleNextClick(1)} />

      <div className="gallery__container">
        <Slider heading="Example Slider" currentData={current} type="GALLERY" slides={slideData} handleSlide={handleSlideClick} />
      </div>
    </div>
  )
}
