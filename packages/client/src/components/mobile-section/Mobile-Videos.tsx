import React, { useState, useContext } from 'react'
import VideoImage from "../../images/mobile/Video.png";

import YouTube from 'react-youtube';
import languageContext from '../contexts/lang'


export default function Videos({ page }: any) {
  const { lang } = useContext(languageContext);
  const youtubeLink = page.contents[0].values && page.contents[0].values[lang].value;
  const [videoState, changeVideoState] = useState("empty");

  return (
    <div className="mobile-video">
      <img src={VideoImage} alt="VideoImage" className="mobile-video__image" />
      <div className="mobile-videos__body-main">
        {youtubeLink && <YouTube
          videoId={youtubeLink}
          className={`mobile-videos__body-main-youtube-${videoState}`}
          containerClassName="mobile-videos__body-main-container"
          opts={{
            height: '100%',
      width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
              controls: 0,
              showinfo: 0,
              rel: 0
            }
          }}
          onReady={(e) => changeVideoState("ready")}
          onPlay={(e) => changeVideoState("playing")}
          onPause={(e) => { changeVideoState("paused"); }}
          onEnd={(e) => changeVideoState("end")}
          onError={(e) => changeVideoState("error")} />}
      </div>
    </div>
  )
}
