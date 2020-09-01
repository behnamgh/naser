import React, { useState } from 'react'
import SOCIALHOLDER_EN from "../../images/mobile/JoinUs.png";

import Twiter from "../../images/mobile/JoinUs-Twiter.png";
import Mail from "../../images/mobile/JoinUs-Mail.png";
import Insta from "../../images/mobile/JoinUs-Insta.png";
import FB from "../../images/mobile/JoinUs-FB.png";
import JOINUS_BUTTON from "../../images/mobile/JoinUs-Tap.png";
import PressKit from "../../images/mobile/PressKit_Mobile.png";
import PressKitButton from "../../images/mobile/Bottun-Up.png";
import PressKitlight from "../../images/mobile/Bottun-Light.png";
import JoinUsText from "../../images/mobile/Texts.png";

import getHttpClient from "../../utils/httpClient";


export default function JoinUs({ page }: any) {
  //   const { lang } = useContext(languageContext);
  //   const videoPath = page.contents[0].values && page.contents[0].values[lang].value;

  const [email, setMail] = useState("");
  const [inputProps, setInputProps] = useState<any>({ placeholder: "Your Email Address" });

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

  return (
    <div className="mobile-join-us">
      <div className="mobile-join-us__press">
        <img className="mobile-join-us__press__holder" src={PressKit} alt="PressKit" />
        <img className="mobile-join-us__press__button" src={PressKitButton} alt="PressKitButton" />
        <img className="mobile-join-us__press__button-light blink_me" onClick={() => window.open('https://enlightenedrobot.com/press', '_blank')} src={PressKitlight} alt="PressKitlight" />
      </div>
        <img className="JoinUsText" src={JoinUsText} alt="JoinUsText" />
      <div className="mobile-join-us__body">
        <img src={SOCIALHOLDER_EN} alt="SOCIALHOLDER_EN" />
        <input className="mobile-join-us__body-input" type="text" id="mail" name="mail" {...inputProps} value={email} onChange={handleType} />

        <div className="mobile-join-us__body-social" >
          <a href="mailto:info@enlightenedrobot.com"><img src={Mail} alt="website icon" /></a>
          <a href="https://twitter.com/ere_studios"><img src={Twiter} alt="twitter icon" /></a>
          <a href="https://www.instagram.com/enlightenedrobot"><img src={Insta} alt="instagram icon" /></a>
          <a href="http://facebook.com/EnlightenedRobotEntertainmentGmbH"><img src={FB} alt="facebook icon" /></a>
          <a onClick={handleSubmitClick}><img src={JOINUS_BUTTON} alt="" /></a>
        </div>
      </div>
    </div>
  )
}
