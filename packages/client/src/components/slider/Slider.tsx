import React  from "react";
import Slide from "./Slide";
// import SliderControl from "./SliderControl";

function Slider(props : any) {

  // const [ current, setCurrent ] = useState(0);

  // const handlePreviousClick = () => {
  //   const previous = current - 1;

  //   let currentNumber = previous < 0 ? props.slides.length - 1 : previous
  //   setCurrent(currentNumber)
  // }

  // const handleNextClick = ()=> {
  //   const next = current + 1;
  //   let currentNumber = next === props.slides.length ? 0 : next
  //   setCurrent(currentNumber)
  // }

  const handleSlideclicking = (value:number) => {
    props.handleSlide(value)
  }

  const { slides, heading, currentData } = props;
  const headingId = `slider-heading__${heading
    .replace(/\s+/g, "-")
    .toLowerCase()}`;
  const wrapperTransform = {
    transform: `translateX(-${currentData * (100 / slides.length)}%)`
  };

  return (
    <div className="slider" aria-labelledby={headingId}>
      <ul className="slider__wrapper" style={wrapperTransform}>
        <h3 id={headingId} className="visuallyhidden">
          {heading}
        </h3>

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
