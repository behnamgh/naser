import React, { useState } from 'react'

import BACKGROUND from "../../images/-e-TopBG1.png"
import MAINBACKGROUND from "../../images/-e-BIG1.png"
import MAINBACKGROUND2 from "../../images/-e-BIG2.png"
import DOWNBACKGROUND from "../../images/-e-SmallDown.png"
import DOWNBACKGROUND2 from "../../images/-e-SmallDown-2.png"
import TOPBACKGROUND from "../../images/-e-Smalltop.png"
import TOPBACKGROUND2 from "../../images/-e-Smalltop-2.png"
import YouTube from 'react-youtube';

export default function Videos({ page }: any) {
  const [videoState, changeVideoState] = useState("empty");
  return (
    <div className="videos">

      <div className="videos__body">
        <img src={BACKGROUND} alt="background" />
        <div className="videos__body-main">
          <YouTube
            videoId="FjnWqR3UPhs"
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
            onError={(e) => changeVideoState("error")} />
          <img src={MAINBACKGROUND} alt={"top-background"} />
          <img src={MAINBACKGROUND2} alt={"top-background"} />
        </div>

        <div className="videos__body-top">
          <img src={DOWNBACKGROUND} alt={"top-background"} />
          <img src={DOWNBACKGROUND2} alt={"top-background"} />
        </div>

        <div className="videos__body-down">
          <img src={TOPBACKGROUND} alt="" />
          <img src={TOPBACKGROUND2} alt="" />
        </div>

      </div>
    </div>
  )
}
