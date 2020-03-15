import React , { useState } from 'react';

import Slider from '../slider/Slider'

import BIGFRAME from '../../images/-e-BigFrame-1.png'
// import FRAMEHOLDER from '../../images/-e-hanger.png'
// import BOTTOMFRAME from '../../images/-e-SmallFrame.png'
import NAVBARRIGHT from '../../images/-e-GalleryArrowFrame-Right.png'

import FIRSTONE from '../../images/test.jpg'
import SECONDONE from '../../images/naser8.jpeg'
import THIRDONE from '../../images/test.jpg'
import FOURTHONE from '../../images/naser2.jpeg'
import FIFTHONE from '../../images/test.jpg'

export default function Gallery({ page }: any) {

  const [ current, setCurrent ] = useState(1);

  const slideData = [
    {
      index: 0,
      src : FIRSTONE
    },
    {
      index: 1,
      src : SECONDONE
    },
    {
      index: 2,
      src : THIRDONE
    },
    {
      index: 3,
      src : FOURTHONE
    },
    {
      index: 4,
      src : FIFTHONE
    }
  ];


  // const handlePreviousClick = () => {
  //   const previous = current - 1;

  //   let currentNumber = previous < 0 ? slideData.length - 1 : previous
  //   setCurrent(currentNumber)
  // }

  const handleNextClick = ()=> {
    const next = current + 1;
    let currentNumber = next === slideData.length ? 0 : next
    setCurrent(currentNumber)
  }


  const handleSlideClick = (index:number) => {
    if (current !== index) {
      setCurrent(index)
    }
  }




  return (
    <div className="gallery">
      <img src={BIGFRAME} className="gallery__background" alt=""/>
      {/* <img src={FRAMEHOLDER} className="gallery__holder" alt=""/> */}
      {/* <img src={BOTTOMFRAME} className="gallery__bottom" alt=""/> */}

      {/* <img src={NAVBARRIGHT} className="navbar" alt="" onClick={prevSlide} /> */}
      <img src={NAVBARRIGHT} className="gallery__navbar" alt="navbar" onClick={handleNextClick} />


      <div className="gallery__container"> 
        {/* {imageSourcesToDisplay.map((image, index) =>
          <div className="gallery__images">
            <img key={index} src={image} className="gallery__naser" alt="" />
            <img src={BOTTOMFRAME} className="gallery__bottom" alt=""/>
          </div>
        )} */}
      <Slider heading="Example Slider" currentData={current} slides={slideData} handleSlide={handleSlideClick} />
      </div>
    </div>
  )     
}
