import React, { Component } from 'react';
import WALL from './images/wall-left.png'
import GEARS1 from './images/gears-1.png'
import GEARS2 from './images/gears-2.png'
import GEARS3 from './images/gears-3.png'
import LOGO from './images/naser-logo.png'
import TOPFRAME from './images/top-frame.png'
import GEARSTAND from './images/gears-stands.png'
import DOWNFRAME from './images/down-frame-1.png'
import LIGHTEN_LOGO from './images/naser-lighten-logo.png'

import News from './views/News'
import Footer from './views/Footer'
import Header from './views/Header'
import Videos from './views/Videos'
import Gallery from './views/Gallery'
import GamePlay from './views/GamePlay'

import ReactPageScroller from 'react-page-scroller';

import './sass/main.scss';

class App extends Component<any, any> {
  myRef: any;
  myRef3: any;
  myRef2: any;
  constructor(props: any) {
    super(props);
    this.myRef = React.createRef();
    this.myRef3 = React.createRef();
    this.myRef2 = React.createRef();
    this.state = {
      currentPage: null
    }
  }


  componentDidMount = () => {
    window.addEventListener("wheel", event => event.deltaY > 0
      ? this.setClockside()
      : this.removeClockSide()
    )
  }

  setClockside = () => {
    this.myRef.current.style.animation = "clockwiseSpin 2s linear infinite"
    this.myRef2.current.style.animation = "clockwiseSpin 2s linear infinite"
    this.myRef3.current.style.animation = "clockwiseSpin 2s linear infinite"
  }

  removeClockSide = () => {
    this.myRef.current.style.animation = "antiClockwiseSpin 2s linear infinite"
    this.myRef2.current.style.animation = "antiClockwiseSpin 2s linear infinite"
    this.myRef3.current.style.animation = "antiClockwiseSpin 2s linear infinite"
  }
  componentWillUnmount = () => {
    window.removeEventListener("wheel", event => event.deltaY > 0
      ? this.setClockside()
      : this.removeClockSide())
  }

  componentDidUpdate(prevState: any) {
    if (this.state.currentPage !== prevState.currentPage) {
      this.myRef.current.style.animationPlayState = "paused"
      this.myRef2.current.style.animationPlayState = "paused"
      this.myRef3.current.style.animationPlayState = "paused"
    }
  }
  handlePageChange = (number: any) => {
    this.setState({ currentPage: number });
  };

  getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(
        <button key={i} onClick={this.handlePageChange}>{i}</button>
      );
    }

    return [...pageNumbers];
  };

  render() {
    return (<div className="App">
      <div className="walls">
        <img src={WALL} alt="walls" />
        <img src={WALL} alt="walls" />
      </div>

      <div className="logo">
        <img src={LOGO} alt="logo" />
        <img src={LIGHTEN_LOGO} alt="lighten logo" />
      </div>

      <img src={GEARSTAND} className="gear-stand" alt="" />
      <img src={GEARS1} className="gear-1" ref={this.myRef} alt="gear one" />
      <img src={GEARS2} className="gear-2" ref={this.myRef2} alt="gear two" />
      <img src={GEARS3} className="gear-3" ref={this.myRef3} alt="gear 3" />

      <div className="frames">
        <img src={TOPFRAME} alt="top" />
        <img src={DOWNFRAME} alt="bottom" />
      </div>

      <div className="content">
        <ReactPageScroller
          pageOnChange={this.handlePageChange}
          containerWidth={window.innerWidth * 0.4}
          containerHeight={window.innerHeight * 0.5}
          customPageNumber={this.state.currentpage}
        >
          <Header />
          <Videos />
          <GamePlay />
          <News />
          <Gallery />
          <Footer />
        </ReactPageScroller>
      </div>

    </div>
    );
  }
}

export default App;