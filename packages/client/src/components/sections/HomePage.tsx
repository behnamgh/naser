import React, { useContext } from 'react'
import languageContext from '../contexts/lang';

export default function HomePage({ page }: any) {
  const lang = useContext(languageContext);
  const videoPath = page.contents[0].values && page.contents[0].values[lang];

  return (
    <div className="header">
      {<video autoPlay loop muted width="320" height="240" className="homepage-video">
        <source src={videoPath || "/videos/mainpage.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
      </video>}
    </div>
  )
}
