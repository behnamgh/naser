import React from 'react';

import Videos from './Videos'
import Gallery from './Gallery'
import Header from './Header'
import GamePlay from './GamePlay';
import News from './News';
import JoinUs from './JoinUs';
import usePages from '../hooks/usePages';



interface ISampleProps {
  title: string;
}

const Section = ({ title }: ISampleProps) => {
  const pageContent = usePages(title);

  const renderComponent = () => {
    console.log(["pageContent", pageContent]);

    switch (title) {
      case "homepage":
        return <Header page={pageContent} />;

      case "videos":
        return <Videos page={pageContent} />;

      case "gallery":
        return <Gallery page={pageContent} />;

      case "gameplay":
        return <GamePlay page={pageContent} />;

      case "news":
        return <News page={pageContent} />;

      case "joinus":
        return <JoinUs page={pageContent} />;

      default:
        return <Header page={pageContent} />;
    }

  }


  return (
    <div className="section">
      {renderComponent()}
    </div>
  )
};

export default Section;