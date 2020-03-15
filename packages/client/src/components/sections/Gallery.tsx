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

export default function Gallery() {

  const [ current, setCurrent ] = useState(1);

  const slideData = [
    {
      index: 0,
      headline: "New Fashion Apparel",
      button: "Shop now",
      src : FIRSTONE
    },
    {
      index: 1,
      headline: "In The Wilderness",
      button: "Book travel",
      src : SECONDONE
    },
    {
      index: 2,
      headline: "For Your Current Mood",
      button: "Listen",
      src : THIRDONE
    },
    {
      index: 3,
      headline: "Focus On The Writing",
      button: "Get Focused",
      src : FOURTHONE
    },
    {
      index: 4,
      headline: "New Fashion Apparel",
      button: "Shop now",
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
      <Slider heading="Example Slider" currentData={current} slides={slideData} />
      </div>
    </div>
  )     
}
