import React, { useRef, useState, useContext } from 'react'
// import React, { useState, useRef, useEffect } from 'react'

import SOCIALHOLDER_EN from '../../images/JoinUs/JoinUs.png';
import SOCIALHOLDER_DE from '../../images/JoinUs/JoinUsDE.png';
import FACEBOOK from '../../images/facebook.png';
import INSTAGRAM from '../../images/instagram.png';
import TWITTER from '../../images/twitter.png';
import MAIL from '../../images/Mail.png';
import JOINUS_BUTTON from '../../images/joinUs.png';
import langContext from "../contexts/lang"

import getHttpClient from "../../utils/httpClient";

export default function JoinUs({ page }: any) {
  const { lang } = useContext(langContext);

  const bodySocial = useRef<HTMLDivElement>(null);

  const [email, setMail] = useState("");

  // const socialImageWidth = window.innerWidth > 1680 ? '180px' : '25%';
  // const socialElementWidth = window.innerWidth > 1680 ? '750px' : '33%';

  const handleType = (event: any) => {
    setMail(event.target.value)
  }

  const handleSubmitClick = async (event: any) => {
    await new getHttpClient().post("/user/addSubscriber", { email });
  }
  // useEffect(() => {
  //   if (bodySocial && bodySocial.current) {
  //     console.log(window.innerHeight);
  //     bodySocial.current.style.left = window.outerWidth / window.innerHeight > 16 / 10 ? `${((window.innerWidth - (window.innerHeight * 16 / 10)) / 2) - (0.12*window.innerHeight)}px` : "-200px";
  //   }

  // }, [])

  return (
    <div className="join-us">
      <div className="join-us__body">
        <img src={lang === "en-US" ? SOCIALHOLDER_EN : SOCIALHOLDER_DE} alt="" />
        <input className="join-us__body-input" placeholder="Your Email Address" type="text" id="mail" name="mail" value={email} onChange={handleType} />
        <div className="join-us__body-social" ref={bodySocial}>
          <a href="http://mail.com"><img src={MAIL} alt="website icon" /></a>
          <a href="http://twitter.com"><img src={TWITTER} alt="twitter icon" /></a>
          <a href="http://instagram.com"><img src={INSTAGRAM} alt="instagram icon" /></a>
          <a href="http://facebook.com"><img src={FACEBOOK} alt="facebook icon" /></a>
          <a onClick={handleSubmitClick}><img src={JOINUS_BUTTON} alt="" /></a>

        </div>
      </div>
    </div>
  )
}
