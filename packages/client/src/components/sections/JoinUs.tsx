import React, { useState} from 'react'

import SOCIALHOLDER from '../../images/-e-SocialMedia-Frame.png'
import INSTAGRAM from '../../images/-e-Insta1.png'
import FACEBOOK from '../../images/-e-FB1.png'
import TWITTER from '../../images/-e-Twitter1.png'
import WEBSITE from '../../images/-e-WebSite1.png'
import getHttpClient from "../../utils/httpClient";

export default function JoinUs({ page }: any) {
  const [email, setMail] = useState("");


  // const socialImageWidth = window.innerWidth > 1680 ? '180px' : '25%';
  // const socialElementWidth = window.innerWidth > 1680 ? '750px' : '33%';



  const handleType = (event: any) => {
    setMail(event.target.value)
  }

  const handleKeyDown = async (event: any) => {
    if (event.key === "Enter") {
      await new getHttpClient().post("/user/addSubscriber", { email });
    }
  }


  return (
    <div className="join-us">
      <div className="join-us__body">
        <img src={SOCIALHOLDER} alt="" />

        <input className="join-us__body-input" type="text" id="mail" name="mail" value={email} onChange={handleType} onKeyDown={handleKeyDown} />
        <div className="join-us__body-social"  >
          <a href="http://facebook.com" ><img src={FACEBOOK} alt="facebook icon" /></a>
          <a href="http://instagram.com" ><img src={INSTAGRAM} alt="instagram icon" /></a>
          <a href="http://twitter.com" ><img src={TWITTER} alt="twitter icon" /></a>
          <a href="http://website.com" ><img src={WEBSITE} alt="website icon" /></a>
        </div>
      </div>
    </div>
  )
}