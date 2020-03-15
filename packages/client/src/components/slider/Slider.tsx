import React  from "react";
import Slide from "./Slide";

function Slider(props : any) {

  const handleSlideclicking = (value:number) => {
    props.handleSlide(value)
  }

  const { slides, currentData } = props;
  const wrapperTransform = {
    transform: `translateX(-${currentData * (100 / slides.length)}%)`
  };

  return (
    <div className="slider" >
      <ul className="slider__wrapper" style={wrapperTransform}>
        {slides.map((slide : any) => {
          return (
            <Slide
              key={slide.index}
              slide={slide}
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
