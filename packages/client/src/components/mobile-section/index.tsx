import React, { useContext } from 'react';

import Videos from './Mobile-Videos'
import Gallery from './Mobile-Gallery'
import HomePage from './Mobile-HomePage'
import News from './Mobile-News';
import GamePlay from './Mobile-GamePlay';
import JoinUs from './Mobile-JoinUs';

import languageContext from '../contexts/lang';



interface ISampleProps {
  page: any;
}

const Section = ({ page }: ISampleProps) => {
  const { lang } = useContext(languageContext);

  const renderComponent = () => {

    switch (page.name) {
      //   case "homepage":
      //     return <HomePage page={page} />;

      case "videos":
        return <Videos page={page} />;

      case "gallery":
        return <Gallery page={page} />;

      case "gameplay":
        return <GamePlay page={page} />;

      case "news":
        const slideData = page.contents[0].values && page.contents[0].values[lang];

        return <News slideData={slideData.reverse()} />;

      case "joinus":
        return <JoinUs page={page} />;

      default:
        return <HomePage page={page} />;
    }

  }


  return (
    <div className="mobile-section">
      {renderComponent()}
    </div>
  )
};

export default Section;