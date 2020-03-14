import React, {   useState } from 'react';

import BIGFRAME from '../../images/-e-BigFrame-1.png'
// import FRAMEHOLDER from '../../images/-e-hanger.png'
import BOTTOMFRAME from '../../images/-e-SmallFrame.png'
import NAVBARRIGHT from '../../images/-e-GalleryArrowFrame-Right.png'

import FIRSTONE from '../../images/test.jpg'
import SECONDONE from '../../images/naser8.jpeg'
import THIRDONE from '../../images/test.jpg'
import FOURTHONE from '../../images/naser2.jpeg'
import FIFTHONE from '../../images/test.jpg'

export default function Gallery({ page }: any) {

  const [ activeImage, setActiveImage ] = useState(0);

  const images = [FIRSTONE,SECONDONE,THIRDONE,FOURTHONE,FIFTHONE]

  // const prevSlide = () => {
  //   const resetToVeryBack = activeImage === 0;

  //   const index = resetToVeryBack ? images.length - 1 : activeImage - 1;

  //   setActiveImage(index);
  // }

  const nextSlide = () => {
    const resetIndex = activeImage === images.length - 1;
    console.log(activeImage,resetIndex)

    const index = resetIndex ? 0 : activeImage + 1;

    setActiveImage(index);
  }

  const activeImageSourcesFromState = images.slice(activeImage, activeImage + 3);

  console.log(activeImageSourcesFromState)

  const imageSourcesToDisplay = activeImageSourcesFromState.length < 3
    ? [...activeImageSourcesFromState, ...images.slice(0, 3 - activeImageSourcesFromState.length) ]
    : activeImageSourcesFromState;

    console.log(imageSourcesToDisplay)
  


  return (
    <div className="gallery">
      <img src={BIGFRAME} className="gallery__background" alt=""/>
      {/* <img src={FRAMEHOLDER} className="gallery__holder" alt=""/> */}
      {/* <img src={BOTTOMFRAME} className="gallery__bottom" alt=""/> */}

      {/* <img src={NAVBARRIGHT} className="navbar" alt="" onClick={prevSlide} /> */}
      <img src={NAVBARRIGHT} className="gallery__navbar" alt="" onClick={nextSlide} />


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
