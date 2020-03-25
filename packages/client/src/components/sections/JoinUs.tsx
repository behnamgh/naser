import React, { useState, useRef, useEffect } from 'react'

import SOCIALHOLDER from '../../images/-e-SocialMedia-Frame.png'
import INSTAGRAM from '../../images/-e-Insta1.png'
import FACEBOOK from '../../images/-e-FB1.png'
import TWITTER from '../../images/-e-Twitter1.png'
import WEBSITE from '../../images/-e-WebSite1.png'
import getHttpClient from "../../utils/httpClient";

export default function JoinUs({ page }: any) {
  const [email, setMail] = useState("");
  const refs = {
    body: useRef<HTMLImageElement>(null),
    imageContainer: useRef<HTMLImageElement>(null),
    facebook: useRef<HTMLAnchorElement>(null),
    instagram: useRef<HTMLAnchorElement>(null),
    twitter: useRef<HTMLAnchorElement>(null),
    website: useRef<HTMLAnchorElement>(null),
  }

  // const socialImageWidth = window.innerWidth > 1680 ? '180px' : '25%';
  // const socialElementWidth = window.innerWidth > 1680 ? '750px' : '33%';

  useEffect(() => {
    if (window.innerWidth > 1680) {
      if (refs.body && refs.body.current) refs.body.current.style.width = '750px';
      if (refs.imageContainer && refs.imageContainer.current) refs.imageContainer.current.style.width = '750px';
      if (refs.facebook && refs.facebook.current) {
        refs.facebook.current.style.left = '70px';
      };
      if (refs.instagram && refs.instagram.current) {
        refs.instagram.current.style.left = '218px';
        refs.instagram.current.style.width = '165px';
      };
      if (refs.twitter && refs.twitter.current) {
        refs.twitter.current.style.left = '370px';
        refs.twitter.current.style.width = '165px';
      };
      if (refs.website && refs.website.current) {
        refs.website.current.style.left = '525px';
        refs.website.current.style.width = '165px';
      };

    } else {
      if (refs.body && refs.body.current) refs.body.current.style.width = '40%';
      if (refs.body && refs.imageContainer.current) refs.imageContainer.current.style.width = '33%';

    }
  }, [refs]);

  const handleType = (event: any) => {
    setMail(event.target.value)
  }

  const handleKeyDown = async (event: any) => {
    if (event.key === "Enter") {
      await new getHttpClient().post("/user/addSubscriber", { email });
    }
  }
  // const displayImages = (display: string) => () => {
  //   if (refs.facebook && refs.facebook.current) refs.facebook.current.style.display = display;
  //   if (refs.instagram && refs.instagram.current) refs.instagram.current.style.display = display;
  //   if (refs.twitter && refs.twitter.current) refs.twitter.current.style.display = display;
  //   if (refs.website && refs.website.current) refs.website.current.style.display = display;
  // }
  // const showImage = () => {
  //   if (refs.facebook && refs.facebook.current) refs.facebook.current.style.display = "block";
  // }


  return (
    <div className="join-us">
      <div className="join-us__body">
        <img src={SOCIALHOLDER} alt="" ref={refs.body} />

        <input className="join-us__body-input" type="text" id="mail" name="mail" value={email} onChange={handleType} onKeyDown={handleKeyDown} />
        <div className="join-us__body-social" ref={refs.imageContainer} >
          <a href="http://facebook.com" ref={refs.facebook}><img src={FACEBOOK} alt="facebook icon" /></a>
          <a href="http://instagram.com" ref={refs.instagram}><img src={INSTAGRAM} alt="instagram icon" /></a>
          <a href="http://twitter.com" ref={refs.twitter}><img src={TWITTER} alt="twitter icon" /></a>
          <a href="http://website.com" ref={refs.website}><img src={WEBSITE} alt="website icon" /></a>
        </div>
      </div>
    </div>
  )
}