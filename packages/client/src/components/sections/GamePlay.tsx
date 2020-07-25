import React, { useContext } from 'react'

import BACKGROUND from '../../images/videos/NewsPaper_Down.png';
import EN_CONTENT from "../../images/videos/NewsPaper_Text_EN.png";
import DE_CONTENT from "../../images/videos/NewsPaper_Text_DE.png";
import IRON from '../../images/Header/Iron.png'
import langContext from "../contexts/lang"

export default function GamePlay({ page }: any) {
  const { lang } = useContext(langContext);


  return (
    <div className="gameplay">
      <div className="gameplay__body">
        <img src={BACKGROUND} alt="" />
        <img src={lang === "en-US" ? EN_CONTENT : DE_CONTENT} alt="" />
      </div>
      <img src={IRON} className="section__iron" alt="iron" />
    </div>
  )
}
