import React from 'react'

import SOCIALHOLDER from '../../images/-e-SocialMedia-Frame.png'
import INSTAGRAM from '../../images/-e-Insta1.png'
import FACEBOOK from '../../images/-e-FB1.png'
import TWITTER from '../../images/-e-Twitter1.png'
import WEBSITE from '../../images/-e-WebSite1.png'

export default function JoinUs({ page }: any) {
  return (
    <div className="join-us">
      <div className="join-us__body">
        <img src={SOCIALHOLDER} alt=""/>

        <div className="join-us__body-social">
          <img src={INSTAGRAM} alt=""/>
          <img src={FACEBOOK} alt=""/>
          <img src={TWITTER} alt=""/>
          <img src={WEBSITE} alt=""/>
        </div>
      </div>
    </div>
  )
}