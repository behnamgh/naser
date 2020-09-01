import React from 'react'
import GamePlayImage from "../../images/mobile/GamePlay-Story.png"

export default function GamePlay({ page }: any) {
//   const { lang } = useContext(languageContext);
//   const videoPath = page.contents[0].values && page.contents[0].values[lang].value;

  return (
    <div className="mobile-gameplay">
      <img src={GamePlayImage} alt="" className="mobile-gameplay__image"/>
    </div>
  )
}
