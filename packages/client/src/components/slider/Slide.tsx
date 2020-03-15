import React from 'react';

function Slide(props : any) {


  const handleSlideClick = (event : any) => {
    props.handleSlideClick(props.slide.index);
  }

  const imageLoaded = (event : any) =>  {
    event.target.style.opacity = 1;
  }

  const { src, headline, index } = props.slide;
  console.log(src)
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
        <img
          className="slide__image"
          alt={headline}
          src={src}
          onLoad={imageLoaded}
        />
      </div>
    </li>
  );
}

export default Slide;
