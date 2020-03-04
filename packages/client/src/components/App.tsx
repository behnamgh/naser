import React, { useEffect, useRef } from 'react';


import Section from './sections';
import { FullPage, Slide } from 'react-full-page';
import Frames from "./Frames";
import Logos from "./Logos";
import Walls from "./Walls";
import Menu from "./Menu";
import Gears from "./Gears";
import '../sass/main.scss';

const App = (props: any) => {

  const ImageRefs = {
    image2: useRef<HTMLImageElement>(null),
    image3: useRef<HTMLImageElement>(null),
    image4: useRef<HTMLImageElement>(null),
    image8: useRef<HTMLImageElement>(null)
  }


  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (ImageRefs.image2.current) ImageRefs.image2.current.style.transform = `rotate(${-window.scrollY / 10}deg)`;
      if (ImageRefs.image3.current) ImageRefs.image3.current.style.transform = `rotate(${window.scrollY / 10}deg)`;
      if (ImageRefs.image4.current) ImageRefs.image4.current.style.transform = `rotate(${window.scrollY / 10}deg)`;
    })
  });

  const startChange = (data: { from: number, to: number }) => {
    if (ImageRefs.image8.current) ImageRefs.image8.current.style.display = "none"
  }

  const endChange = (data: { from: number, to: number }) => {
    if (ImageRefs.image8.current) ImageRefs.image8.current.style.display = "unset"
  }

  return (<div className="App">

    <Walls />
    <Logos />
    <Gears ImageRefs={ImageRefs} />
    <Frames />
    <div className="content">
      <FullPage controls={(props: any) => <Menu {...props} forwardRef={ImageRefs.image8} />} afterChange={endChange} beforeChange={startChange}>
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
          <Section title="JoinUs" />
        </Slide>
      </FullPage>
    </div>
  </div>
  );
};

export default App;