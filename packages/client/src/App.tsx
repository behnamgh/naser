import React, { useState , useEffect , useRef } from 'react';
import WALL from './images/wall-left.png'
import GEARS1 from './images/gears-1.png'
import GEARS2 from './images/gears-2.png'
import GEARS3 from './images/gears-3.png'
import LOGO from './images/naser-logo.png'
import TOPFRAME from './images/topFrame.png'
import GEARSTAND from './images/gears-stands.png'
import DOWNFRAME from './images/downFrame.png'
import TABS from './images/tabs-frame@3x.png'
import LIGHTEN_LOGO from './images/naser-lighten-logo.png'
import NEWS from './images/news@3x.png'
import HOME from './images/Home@3x.png'
import GALLERY from './images/gallery@3x.png'
import GAMEPLAY from './images/gamePlay@3x.png'
import VIDEO from './images/video@3x.png'
import JOIN from './images/join@3x.png'

import TITLEFRAME from './images/sec-public/title-Frame.png'
import TITLELIGHT from './images/sec-public/title-Light.png'
import TITLEVIDEO from './images/VIDEOS.png'
import TITLEGAMEPLAY from './images/GAMEPLAYSTORY.png'
import TITLEGALLERY from './images/GALLERY.png'
import TITLENEWS from './images/NEWS.png'
  
import LIGHT from './images/tabs-frame-light@3x.png'
import Section from './components/sections';
import { FullPage, Slide } from 'react-full-page';
import './sass/main.scss';


const App = (props : any) => {

  const image2 = useRef<HTMLImageElement>(null);
  const image3 = useRef<HTMLImageElement>(null);
  const image4 = useRef<HTMLImageElement>(null);
  const image8 = useRef<HTMLImageElement>(null);

  // const startChange = (data: { from: number, to: number }) => {
  //   setstate(data.from)
  // }

  useEffect(() => {
    window.addEventListener("scroll" , (e) => {
      if(image2.current) image2.current.style.transform = `rotate(${-window.scrollY/10}deg)`;
      if(image3.current) image3.current.style.transform = `rotate(${window.scrollY/10}deg)`;
      if(image4.current) image4.current.style.transform = `rotate(${window.scrollY/10}deg)`;
 
    })

  })

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll" , () => {
        
      })
    };
  })

  const startChange = (data: { from: number, to: number }) => {
    if(image8.current) image8.current.style.display = "none"
  }

  const endChange = (data: { from: number, to: number }) => {
    if(image8.current) image8.current.style.display = "unset"
  }

  // const checkScrollPosition = (currentSlideIndex : number) => {
  //   let element = document.getElementsByClassName("section") as HTMLCollectionOf<HTMLElement>;
  //   if(element[currentSlideIndex]) return  Math.floor(element[currentSlideIndex].offsetTop / element[currentSlideIndex].clientHeight)  === currentSlideIndex
  // }

  const menuController = ({ scrollToSlide, getCurrentSlideIndex, slidesCount }: { scrollToSlide: (pageNumber: number) => void, getCurrentSlideIndex: () => number, slidesCount: number }) => {
    const currentSlideIndex = getCurrentSlideIndex();
    let lightPosition

    if (currentSlideIndex === 0) { lightPosition = "28.2% "}
    else if (currentSlideIndex === 1) { lightPosition = "34.8% " }
    else if (currentSlideIndex === 2) { lightPosition = "40.8% " }
    else if (currentSlideIndex === 3) { lightPosition = "47.1% " }
    else if (currentSlideIndex === 4) { lightPosition = "53.2% " }
    else if (currentSlideIndex === 5) { lightPosition = "59.3% " }

    return (

      <div className="tabs">

        <div className="section-header">
          <img src={TITLEFRAME} style={{ opacity: (currentSlideIndex === 0 || currentSlideIndex === 5) ? `0` : `1` }}   alt="title-frame"/>
          <img src={TITLEVIDEO} style={{ opacity: currentSlideIndex === 1 ? `1` : `0` }}  alt="title-video"/>
          <img src={TITLEGAMEPLAY} style={{ opacity: currentSlideIndex === 2 ? `1` : `0` }}  alt="title-gameplay"/>
          <img src={TITLENEWS} style={{ opacity: currentSlideIndex === 3 ? `1` : `0` }}  alt="title-news"/>
          <img src={TITLEGALLERY} style={{ opacity: currentSlideIndex === 4 ? `1` : `0` }}  alt="title-gallery"/>
          <img src={TITLELIGHT} style={{ opacity: (currentSlideIndex === 0 || currentSlideIndex === 5) ? `0` : `1` }}  alt="title-light"/>
        </div>
        <div className="tabs__container">
          <img src={TABS} alt="" />
          <img src={LIGHT} alt=""  ref={image8} style={{ top: `${lightPosition}` }} />
        </div>
        <img src={HOME} className="tabs-h" style={{ transform: currentSlideIndex === 0 ? `translateX(-20px)` : `translateX(0)` }} onClick={() => scrollToSlide(0)} alt="" />
        <img src={VIDEO} className="tabs-v" style={{ transform: currentSlideIndex === 1 ? 'translateX(-20px)' : 'translateX(0)' }} onClick={() => scrollToSlide(1)} alt="" />
        <img src={GAMEPLAY} className="tabs-p" style={{ transform: currentSlideIndex === 2 ? 'translateX(-20px)' : 'translateX(0)' }} onClick={() => scrollToSlide(2)} alt="" />
        <img src={GALLERY} className="tabs-g" style={{ transform: currentSlideIndex === 3 ? 'translateX(-20px)' : 'translateX(0)' }} onClick={() => scrollToSlide(3)} alt="" />
        <img src={NEWS} className="tabs-n" style={{ transform: currentSlideIndex === 4 ? 'translateX(-20px)' : 'translateX(0)' }} onClick={() => scrollToSlide(4)} alt="" />
        <img src={JOIN} className="tabs-j" style={{ transform: currentSlideIndex === 5 ? 'translateX(-20px)' : 'translateX(0)' }} onClick={() => scrollToSlide(5)} alt="" />
      </div>
    )
  }



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
    <img src={GEARS1} className={`fixed gear-1`} ref={image2} alt="gear one" />
    <img src={GEARS2} className={`fixed gear-2 anti`} ref={image3} alt="gear two" />
    <img src={GEARS3} className={`fixed gear-3`} ref={image4} alt="gear 3" />

    <div className="frames">
      <img src={TOPFRAME} alt="top" />
      <img src={DOWNFRAME} alt="down" />
    </div>



    <div className="content">
      <FullPage controls={menuController}  afterChange={endChange} beforeChange={startChange}>
        <Slide>
          <Section title="Header" />
        </Slide>
        <Slide>
          <Section title="Videos" />
        </Slide>
        <Slide>
          <Section title="GamePlay" />
        </Slide>
        <Slide>
          <Section title="Gallery" />
        </Slide>
        <Slide>
          <Section title="News" />
        </Slide>
        <Slide>
          <Section title="Footer" />
        </Slide>
      </FullPage>
    </div>

  </div>
  );
};

export default App;