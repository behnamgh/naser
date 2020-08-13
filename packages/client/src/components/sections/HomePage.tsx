import React, { useContext } from 'react'
import languageContext from '../contexts/lang';
import FRAME from '../../images/VideoFrame.png';

export default function HomePage({ page }: any) {
  const { lang } = useContext(languageContext);
  const videoPath = page.contents[0].values && page.contents[0].values[lang].value;

  return (
    <div className="header">
      {<video autoPlay loop muted width="320" height="240" className="homepage-video">
        <source src={videoPath || "/videos/mainpage.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
      </video>}
      <img className="header-frame" src={FRAME} alt="side-image" />
    </div>
  )
}
