import React from 'react'

import BACKGROUND from '../../images/NewExport/NewsPaper_Down.png';
import IRON from '../../images/Header/Iron.png'

export default function GamePlay({ page }: any) {
  return (
    <div className="gameplay">
      <div className="gameplay__body">
        <img src={BACKGROUND} alt=""/>
      </div>
      <img src={IRON} className="section__iron" alt="iron" />
    </div>
  )
}
