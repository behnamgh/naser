import React from 'react';

import Videos from './Videos'
import Gallery from './Gallery'
import Header from './Header'
import GamePlay from './GamePlay';
import News from './News';
import JoinUs from './JoinUs';



interface ISampleProps {
    title: string;
}

const Section = ({ title }: ISampleProps) => {

    let component = null;
    switch(title) {
      case "Header":
        component = <Header />;
        break;
      case "Videos":
        component = <Videos />;
        break;
      case "Gallery":
        component = <Gallery />;
        break;
      case "GamePlay":
        component = <GamePlay />;
        break;
      case "News":
        component = <News />;
        break;
      case "joinUs":
        component = <JoinUs />;
        break;
      default:
        component = <Header />;
    }



    return (
        <div className="section">

            {component}
        </div>
    )
};

export default Section;