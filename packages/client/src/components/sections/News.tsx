import React , { useState, useContext } from  'react'
import Slider from '../slider/Slider'
import ARROWLEFT from '../../images/-e-GalleryArrow-left.png'
import ARROWRIGHT from '../../images/-e-GalleryArrow-Right.png'
import languageContext from '../contexts/lang';

export default function News({ page }: any) {
  const lang = useContext(languageContext);
  const slideData = page.contents[0].values && page.contents[0].values[lang];


  const [ current, setCurrent ] = useState(1);

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
