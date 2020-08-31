import React, { useState, useContext } from 'react'
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


  const [email, setMail] = useState("");
  const [inputProps, setInputProps] = useState<any>({ placeholder: "Your Email Address" });

  // const socialImageWidth = window.innerWidth > 1680 ? '180px' : '25%';
  // const socialElementWidth = window.innerWidth > 1680 ? '750px' : '33%';

  const handleType = (event: any) => {
    setMail(event.target.value)
  }

  const handleSubmitClick = async (event: any) => {
    try {
      await new getHttpClient().post("/user/addSubscriber", { email });
      setInputProps({ placeholder: "thank you for  subscribing! ", disabled: true });
      setMail("")
    } catch (error) {

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
        <img src={lang === "en-US" ? SOCIALHOLDER_EN : SOCIALHOLDER_DE} alt="" />
        <input className="join-us__body-input" type="text" id="mail" name="mail" {...inputProps} value={email} onChange={handleType} />
        <div className="join-us__body-social">
          <a href="mailto:info@enlightenedrobot.com"><img src={MAIL} alt="website icon" /></a>
          <a href="https://twitter.com/ere_studios"><img src={TWITTER} alt="twitter icon" /></a>
          <a href="https://www.instagram.com/enlightenedrobot"><img src={INSTAGRAM} alt="instagram icon" /></a>
          <a href="http://facebook.com/EnlightenedRobotEntertainmentGmbH"><img src={FACEBOOK} alt="facebook icon" /></a>
          <a onClick={handleSubmitClick}><img src={JOINUS_BUTTON} alt="" /></a>
        </div>
      </div>
    </div>
  )
}
