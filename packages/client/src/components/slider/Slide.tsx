import React from 'react';

import BOTTOMFRAME from '../../images/-e-SmallFrame.png'
import IMAGELIGHT from '../../images/-e-SmallFrame-Light.png'


function Slide(props : any) {


  const handleSlideClick = (event : any) => {
    props.handleSlideClick(props.slide.index);
  }

  // const imageLoaded = (event : any) =>  {
  //   event.target.style.opacity = 1;
  // }

  const { index } = props.slide;

  const current = props.current;
  let classNames = "slide";

  if (current === index) classNames += " slide--current";
  else if (current - 1 === index) classNames += " slide--previous";
  else if (current + 1 === index) classNames += " slide--next";

  return (
    <li
      className={classNames}
      onClick={handleSlideClick}
    >
      <div className="slide__image-wrapper">
        {/* <img key={index} src={src} className="slide__image" alt={headline} onLoad={imageLoaded}/> */}
        <img src={BOTTOMFRAME} className="gallery__bottom" alt=""/>
        <img src={IMAGELIGHT} className="slide--current-light" alt=""/>
      </div>
    </li>
  );
}

export default Slide;
