import React, {   useState } from 'react';

import BIGFRAME from '../../images/-e-BigFrame-1.png'
// import FRAMEHOLDER from '../../images/-e-hanger.png'
import BOTTOMFRAME from '../../images/-e-SmallFrame.png'

import FIRSTONE from '../../images/test.jpg'
import SECONDONE from '../../images/test.jpg'
import THIRDONE from '../../images/test.jpg'
import FOURTHONE from '../../images/test.jpg'
import FIFTHONE from '../../images/test.jpg'

export default function Gallery({ page }: any) {

  const [ activeImage, setActiveImage ] = useState(0);

  const images = [FIRSTONE,SECONDONE,THIRDONE,FOURTHONE,FIFTHONE]

  const prevSlide = () => {
    const resetToVeryBack = activeImage === 0;

    const index = resetToVeryBack ? images.length - 1 : activeImage - 1;

    setActiveImage(index);
  }

  const nextSlide = () => {
    const resetIndex = activeImage === images.length - 1;

    const index = resetIndex ? 0 : activeImage + 1;

    setActiveImage(index);
  }

  const activeImageSourcesFromState = images.slice(activeImage, activeImage + 5);

  const imageSourcesToDisplay = activeImageSourcesFromState.length < 5
    ? [...activeImageSourcesFromState, ...images.slice(0, 5 - activeImageSourcesFromState.length) ]
    : activeImageSourcesFromState;
  


  return (
    <div className="gallery">
      <img src={BIGFRAME} className="gallery__background" alt=""/>
      {/* <img src={FRAMEHOLDER} className="gallery__holder" alt=""/> */}
      {/* <img src={BOTTOMFRAME} className="gallery__bottom" alt=""/> */}
      <button onClick={nextSlide}></button>
      <button onClick={prevSlide}></button>

      <div className="gallery__container"> 
        {imageSourcesToDisplay.map((image, index) =>
          <div className="gallery__images">
            <img key={index} src={image} className="gallery__naser" alt="" />
            <img src={BOTTOMFRAME} className="gallery__bottom" alt=""/>
          </div>
        )}
      </div>
    </div>
  ) 
}
