import React from 'react';

import Videos from './Videos'
import Gallery from './Gallery'
import Header from './Header'
import GamePlay from './GamePlay';
import News from './News';
import JoinUs from './JoinUs';


interface ISampleProps {
  page: any;
}

const Section = ({ page }: ISampleProps) => {

  const renderComponent = () => {

    switch (page.name) {
      case "homepage":
        return <Header page={page} />;

      case "videos":
        return <Videos page={page} />;

      case "gallery":
        return <Gallery page={page} />;

      case "gameplay":
        return <GamePlay page={page} />;

      case "news":
        return <News page={page} />;

      case "joinus":
        return <JoinUs page={page} />;

      default:
        return <Header page={page} />;
    }

  }


  return (
    <div className="section">
      {renderComponent()}
    </div>
  )
};

export default Section;