import React , { useState } from  'react'
import Slider from '../slider/Slider'
import ARROWLEFT from '../../images/-e-GalleryArrow-left.png'
import ARROWRIGHT from '../../images/-e-GalleryArrow-Right.png'

export default function News({ page }: any) {

  const [ current, setCurrent ] = useState(1);

  const slideData = [
    {
      index: 0,
      headline: "first image",
      text: 'this txt is for test'
    },
    {
      index: 1,
      headline: "this is header",
      text: 'this txt is for test'
    },
    {
      index: 2,
      headline: "this is header",
      text: 'this txt is for test'
    },
    {
      index: 3,
      headline: "this is header",
      text: 'this txt is for test'
    },
    {
      index: 4,
      headline: "this is header",
      text: 'this txt is for test'
    }
  ];

    const handlePreviousClick = () => {
    const previous = current - 1;

    let currentNumber = previous < 1 ? slideData.length - 1 : previous
    setCurrent(currentNumber)
  }

  const handleNextClick = ()=> {
    const next = current + 1;
    let currentNumber = next === slideData.length ? 1 : next
    setCurrent(currentNumber)
  }


  const handleSlideClick = (index:number) => {
    if (current !== index && (current !== slideData.length || current !== 0)) {
      setCurrent(index)
    }
  }


  return (
    <div className="news">
      <img src={ARROWLEFT} onClick={handlePreviousClick} alt=""/>
      <img src={ARROWRIGHT} onClick={handleNextClick} alt=""/>

      <Slider heading="Example Slider" currentData={current} type="NEWS" slides={slideData} handleSlide={handleSlideClick} />
      
    </div>
  )
}
