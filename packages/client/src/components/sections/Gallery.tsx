import React, { useState, useContext } from 'react';

import Slider from '../slider/Slider'

import BIGFRAME from '../../images/-e-BigFrame-1.png'
// import FRAMEHOLDER from '../../images/-e-hanger.png'
// import BOTTOMFRAME from '../../images/-e-SmallFrame.png'
import NAVBARRIGHT from '../../images/-e-GalleryArrowFrame-Right.png'


import languageContext from '../contexts/lang';

export default function Gallery({ page }: any) {
  console.log(page);
  const lang = useContext(languageContext);
  const slideData = page.contents[0].values && page.contents[0].values[lang];
  console.log(slideData);

  const [current, setCurrent] = useState(1);

  // const handlePreviousClick = () => {
  //   const previous = current - 1;

  //   let currentNumber = previous < 0 ? slideData.length - 1 : previous
  //   setCurrent(currentNumber)
  // }

  const handleNextClick = () => {
    const next = current + 1;
    let currentNumber = next === slideData.length ? 0 : next
    setCurrent(currentNumber)
  }


  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index)
    }
  }




  return (
    <div className="gallery">
      <img src={BIGFRAME} className="gallery__background" alt="" />
      {/* <img src={FRAMEHOLDER} className="gallery__holder" alt=""/> */}
      {/* <img src={BOTTOMFRAME} className="gallery__bottom" alt=""/> */}

      {/* <img src={NAVBARRIGHT} className="navbar" alt="" onClick={prevSlide} /> */}
      <img src={NAVBARRIGHT} className="gallery__navbar" alt="navbar" onClick={handleNextClick} />


      <div className="gallery__container">

        <Slider heading="Example Slider" currentData={current} type="GALLERY" slides={slideData} handleSlide={handleSlideClick} />
      </div>
    </div>
  )
}
