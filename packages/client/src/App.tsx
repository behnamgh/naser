import React, { useState, } from 'react';
import WALL from './images/wall-left.png'
import GEARS1 from './images/gears-1.png'
import GEARS2 from './images/gears-2.png'
import GEARS3 from './images/gears-3.png'
import LOGO from './images/naser-logo.png'
import TOPFRAME from './images/top-frame@3x.png'
import GEARSTAND from './images/gears-stands.png'
// import DOWNFRAME from './images/down-frame-1@3x.png'
import TABS from './images/tabs-frame@3x.png'
import LIGHTEN_LOGO from './images/naser-lighten-logo.png'
import NEWS from './images/news@3x.png'
import HOME from './images/Home@3x.png'
import GALLERY from './images/gallery@3x.png'
import GAMEPLAY from './images/gamePlay@3x.png'
import VIDEO from './images/video@3x.png'
import JOIN from './images/join@3x.png'
// import LIGHT from './images/tabs-frame-light@3x.png'
import Sample from './components/sample-template';
import { FullPage, Slide } from 'react-full-page';
import './sass/main.scss';
const App = () => {
  const [currentPage] = useState(null);
  const [gearRotation, updateGearRotation] = useState<string>("");


  const startChange = (data: { from: number, to: number }) => {
    if (data.from > data.to) {
      updateGearRotation("cloclwise")
    } else {
      updateGearRotation("anticloclwise")

    }
  }

  const endChange = (data: { from: number, to: number }) => {
    updateGearRotation("")
  }

  const menuController = ({ scrollToSlide, getCurrentSlideIndex, slidesCount }: { scrollToSlide: (pageNumber: number) => void, getCurrentSlideIndex: () => number, slidesCount: number }) => {

    return <div className="tabs">
      <div className="tabs__container">
        <img src={TABS} alt="" />
        {/* <img src={LIGHT} alt="" style={{ top: `${lightPosition}` }} /> */}

      </div>
      <img src={HOME} className="tabs-h" style={{ right: currentPage === 0 ? '14%' : '12.7%' }} onClick={() => scrollToSlide(1)} alt="" />
      <img src={VIDEO} className="tabs-v" style={{ right: currentPage === 1 ? '14%' : '12.7%' }} onClick={() => scrollToSlide(2)} alt="" />
      <img src={GAMEPLAY} className="tabs-p" style={{ right: currentPage === 2 ? '14%' : '12.7%' }} onClick={() => scrollToSlide(3)} alt="" />
      <img src={GALLERY} className="tabs-g" style={{ right: currentPage === 3 ? '14%' : '12.7%' }} onClick={() => scrollToSlide(4)} alt="" />
      <img src={NEWS} className="tabs-n" style={{ right: currentPage === 4 ? '14%' : '12.7%' }} onClick={() => scrollToSlide(5)} alt="" />
      <img src={JOIN} className="tabs-j" style={{ right: currentPage === 5 ? '14%' : '12.7%' }} onClick={() => scrollToSlide(6)} alt="" />
    </div>
  }

  // let lightPosition

  // if (currentPage === 0) { lightPosition = "32.8% " }
  // else if (currentPage === 1) { lightPosition = "38.8% " }
  // else if (currentPage === 2) { lightPosition = "44.1% " }
  // else if (currentPage === 3) { lightPosition = "50.2% " }
  // else if (currentPage === 4) { lightPosition = "55.7% " }
  // else if (currentPage === 5) { lightPosition = "61.4% " }

  return (<div className="App">
    <div className="walls">
      <img src={WALL} alt="walls" />
      <img src={WALL} alt="walls" />
    </div>

    <div className="logo">
      <img src={LOGO} alt="logo" />
      <img src={LIGHTEN_LOGO} alt="lighten logo" />
    </div>

    <img src={GEARSTAND} className={`fixed gear-stand`} alt="" />
    <img src={GEARS1} className={`fixed gear-1 ${gearRotation}`} alt="gear one" />
    <img src={GEARS2} className={`fixed gear-2 anti${gearRotation}`} alt="gear two" />
    <img src={GEARS3} className={`fixed gear-3 ${gearRotation}`} alt="gear 3" />

    <div className="frames">
      <img src={TOPFRAME} alt="top" />
    </div>



    <div className="content">
      <FullPage beforeChange={startChange} afterChange={endChange} controls={menuController}>
        <Slide>
          <Sample title="Header" />
        </Slide>
        <Slide>
          <Sample title="Videos" />
        </Slide>
        <Slide>
          <Sample title="GamePlay" />
        </Slide>
        <Slide>
          <Sample title="News" />
        </Slide>
        <Slide>
          <Sample title="Gallery" />
        </Slide>
        <Slide>
          <Sample title="Footer" />
        </Slide>
      </FullPage>
    </div>

  </div>
  );
};

export default App;