import React from 'react';

import BOTTOMFRAME from '../../images/-e-SmallFrame.png'
import IMAGELIGHT from '../../images/-e-SmallFrame-Light.png'
import NEWSHOLDER from '../../images/Layer 1.png'



function Slide(props : any) {


  const handleSlideClick = (event : any) => {
    props.handleSlideClick(props.slide.index);
  }
  
  const { index } = props.slide;

  const current = props.current;
  let classNames = "";

  if(props.type === "GALLERY") classNames = "gallery-slide"
  else if (props.type === "NEWS") classNames += " news-slide";

  if (current === index) classNames += " slide--current";
  else if (current - 1 === index) classNames += " slide--previous";
  else if (current + 1 === index) classNames += " slide--next";

  return (
    <li
      className={classNames}
      onClick={handleSlideClick}
    >
      {
        props.type === "GALLERY" &&
          <div className="gallery-slide__image-wrapper">
            {/* <img key={index} src={src} className="slide__image" alt={headline} onLoad={imageLoaded}/> */}
            <img src={BOTTOMFRAME} className="gallery__bottom" alt=""/>
            <img src={IMAGELIGHT} className="slide--current-light" alt=""/>
          </div>
      }

      {
        props.type === "NEWS" && 
          <div className="">
            <img className="news__holder" src={NEWSHOLDER} alt=""/>
          </div>
      }

    </li>
  );
}

export default Slide;
