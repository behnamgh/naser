import React from 'react'
import HomeImage from "../../images/mobile/Home.png"
export default function HomePage({ page }: any) {
//   const { lang } = useContext(languageContext);
//   const videoPath = page.contents[0].values && page.contents[0].values[lang].value;

  return (
    <div className="header">
      <img className="home-image" src={HomeImage} alt=""/>
    </div>
  )
}
