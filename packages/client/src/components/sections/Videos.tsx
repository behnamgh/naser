import React from 'react'

import BACKGROUND from "../../images/-e-TopBG1.png"
import MAINBACKGROUND from "../../images/-e-BIG1.png"
import MAINBACKGROUND2 from "../../images/-e-BIG2.png"
import DOWNBACKGROUND from "../../images/-e-SmallDown.png"
import DOWNBACKGROUND2 from "../../images/-e-SmallDown-2.png"
import TOPBACKGROUND from "../../images/-e-Smalltop.png"
import TOPBACKGROUND2 from "../../images/-e-Smalltop-2.png"

export default function Videos({ page }: any) {
  return (
    <div className="videos">

      <div className="videos__body">
        <img src={BACKGROUND} alt="background" />
        <div className="videos__body-main">
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
