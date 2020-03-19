import React from "react";
import Slide from "./Slide";

function Slider(props: any) {

  const handleSlideclicking = (value: number) => {
    props.handleSlide(value)
  }

  const { slides, currentData, type } = props;
  const wrapperTransform = {
    transform: type === "GALLERY"
      ? `translateX(-${currentData * (100 / slides.length)}%)`
      : `translateX(-${currentData * (100 / slides.length) + 10}%)`
  };

  let classNames = "";

  if (type === "NEWS") classNames += "news-";
  else if (type === "GALLERY") classNames += "gallery-";

  return (
    <div className={classNames + "slider"} >
      <ul className={classNames + "slider__wrapper"} style={wrapperTransform}>
        {slides.map((slide: any, index: number) => {
          return (
            <Slide
              key={index}
              type={type}
              slide={{ src: slide, index }}
              current={currentData}
              handleSlideClick={handleSlideclicking}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Slider;
