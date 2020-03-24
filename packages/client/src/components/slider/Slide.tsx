import React from 'react';

import BOTTOMFRAME from '../../images/-e-SmallFrame.png'
import IMAGELIGHT from '../../images/-e-SmallFrame-Light.png'
import NEWSHOLDER from '../../images/Layer 1.png'
import cx from "classnames";


function Slide(props: any) {
  console.log(props);

  const handleSlideClick = (event: any) => {
    props.handleSlideClick(props.slide.index);
  }

  const { index, src } = props.slide;

  const current = props.current;

  return (
    <li
      className={cx({ "gallery-slide": props.type === "GALLERY", "news-slide": props.type === "NEWS", "slide--current": current === index, "slide--previous": current - 1 === index, "slide--next": current + 1 === index })}
      onClick={handleSlideClick}
    >
      {
        props.type === "GALLERY" &&
        <div className="gallery-slide__image-wrapper">
          <img key={index} src={src} className={cx("slide__image", { "slide--current-image": current === index })} alt={src} />
          <img src={BOTTOMFRAME} className={cx("gallery__bottom", { "slide--current-frame": current === index })} alt="" />
          <img src={IMAGELIGHT} className={cx("slide--current-light", { "slide--current-light": current === index })} alt="" />
        </div>
      }

      {
        props.type === "NEWS" &&
        <div className="news-slide__wrapper">
          <img className="news-slide__holder" src={NEWSHOLDER} alt="" />
          <span className="news-slide__content">{src}</span>
        </div>
      }

    </li>
  );
}

export default Slide;
