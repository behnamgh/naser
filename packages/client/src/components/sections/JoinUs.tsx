import React, { useRef, useState } from 'react'
// import React, { useState, useRef, useEffect } from 'react'

import SOCIALHOLDER from '../../images/JoinUs/JoinUs.png';
import FACEBOOK from '../../images/facebook.png';
import INSTAGRAM from '../../images/instagram.png';
import TWITTER from '../../images/twitter.png';
import MAIL from '../../images/website.png';

import getHttpClient from "../../utils/httpClient";

export default function JoinUs({ page }: any) {
  const bodySocial = useRef<HTMLDivElement>(null);

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
  // useEffect(() => {
  //   if (bodySocial && bodySocial.current) {
  //     console.log(window.innerHeight);
  //     bodySocial.current.style.left = window.outerWidth / window.innerHeight > 16 / 10 ? `${((window.innerWidth - (window.innerHeight * 16 / 10)) / 2) - (0.12*window.innerHeight)}px` : "-200px";
  //   }

  // }, [])

  return (
    <div className="join-us">
      <div className="join-us__body">
        <img src={SOCIALHOLDER} alt="" />

        <input className="join-us__body-input" placeholder="Your Email Address" type="text" id="mail" name="mail" value={email} onChange={handleType} onKeyDown={handleKeyDown} />
        <div className="join-us__body-social" ref={bodySocial}>
          <a onClick={() => console.log("website")}><img src={MAIL} alt="website icon" /></a>
          <a onClick={() => console.log("twitter")}><img src={TWITTER} alt="twitter icon" /></a>
          <a onClick={() => console.log("instagram")}><img src={INSTAGRAM} alt="instagram icon" /></a>
          <a onClick={() => console.log("facebook")}><img src={FACEBOOK} alt="facebook icon" /></a>
        </div>
      </div>
    </div>
  )
}