import React, { useState } from 'react'

import SOCIALHOLDER from '../../images/-e-SocialMedia-Frame.png'
import INSTAGRAM from '../../images/-e-Insta1.png'
import FACEBOOK from '../../images/-e-FB1.png'
import TWITTER from '../../images/-e-Twitter1.png'
import WEBSITE from '../../images/-e-WebSite1.png'
import getHttpClient from "../../utils/httpClient";

export default function JoinUs({ page }: any) {
  const [email, setMail] = useState("")
  const handleType = (event: any) => {
    console.log("here");
    setMail(event.target.value)
  }
  const handleKeyDown = async (event: any) => {
    if (event.key === "Enter") {
      let response = await new getHttpClient().post("/user/addSubscriber", { email });
      console.log(response);
    }
  }
  return (
    <div className="join-us">
      <div className="join-us__body">
        <img src={SOCIALHOLDER} alt="" />

        <input className="join-us__body-input" type="text" id="mail" name="mail" value={email} onChange={handleType} onKeyDown={handleKeyDown} />
        <div className="join-us__body-social">
          <img src={INSTAGRAM} alt="" />
          <img src={FACEBOOK} alt="" />
          <img src={TWITTER} alt="" />
          <img src={WEBSITE} alt="" />
        </div>
      </div>
    </div>
  )
}