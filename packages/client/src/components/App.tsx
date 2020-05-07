import React, { useEffect, useRef } from 'react';

import Section from './sections';
import { FullPage, Slide } from 'react-full-page';
// import Frames from "./Frames";
import Logos from "./Logos";
import Walls from "./Walls";
import Menu from "./Menu";
import Gears from "./Gears";
import '../sass/main.scss';

const App = ({ pages, key }: any) => {

  const contentRef = useRef<HTMLImageElement>(null);
  const ImageRefs = {
    gear1: useRef<HTMLImageElement>(null),
    gear2: useRef<HTMLImageElement>(null),
    gear3: useRef<HTMLImageElement>(null),
    stand: useRef<HTMLImageElement>(null),
    mainHeader: useRef<HTMLImageElement>(null)
  }
  
  useEffect(() => {
    window.addEventListener('scroll', function (e) {
      if (ImageRefs.gear1.current) ImageRefs.gear1.current.style.transform = `rotate(${-window.scrollY / 10}deg)`;
      if (ImageRefs.gear2.current) ImageRefs.gear2.current.style.transform = `rotate(${window.scrollY / 10}deg)`;
      if (ImageRefs.gear3.current) ImageRefs.gear3.current.style.transform = `rotate(${window.scrollY / 10}deg)`;
    });
    if (contentRef && contentRef.current) contentRef.current.style.left = window.innerWidth > 1680 ? `${((window.innerWidth - 1680) / 2) - 5}px` : "0px";
  });

  const startChange = (data: { from: number, to: number }) => {
    if (ImageRefs.mainHeader.current) ImageRefs.mainHeader.current.style.display = "none"
  }

  const endChange = (data: { from: number, to: number }) => {
    if (ImageRefs.mainHeader.current) ImageRefs.mainHeader.current.style.display = "unset"
  }

  return (<div className="App">
    <Walls />
    <Logos />
    <Gears ImageRefs={ImageRefs} />
    {/* <Frames /> */}
    <div className="content" ref={contentRef}>
      {pages && pages.length &&
        <FullPage key={key} controls={(props: any) => <Menu key="menu" {...props} forwardRef={ImageRefs.mainHeader} pages={pages} />} afterChange={endChange} beforeChange={startChange}>
          {pages.map((page: any) => <Slide key={page.id}>
            <Section page={page} />
          </Slide>)}
        </FullPage>
      }
    </div>
  </div>
  );
};

export default App;