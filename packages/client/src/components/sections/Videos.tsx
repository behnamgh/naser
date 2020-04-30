import React, { useState, useContext } from 'react';
import BACKGROUND from "../../images/NewsPaper-Top1.png";
import YouTube from 'react-youtube';
import languageContext from '../contexts/lang'

export default function Videos({ page }: any) {
  const lang = useContext(languageContext);
  const youtubeLink = page.contents[0].values && page.contents[0].values[lang];

  const [videoState, changeVideoState] = useState("empty");
  return (
    <div className="videos">

      <div className="videos__body">
        <img src={BACKGROUND} alt="background" />
        <div className="videos__body-main">
          {youtubeLink && <YouTube
            videoId={youtubeLink}
            className={`videos__body-main-youtube-${videoState}`}
            containerClassName="videos__body-main-container"
            opts={{
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
    </div>
  )
}
