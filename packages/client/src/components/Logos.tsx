import React from 'react';
import LOGO from '../images/naser-logo.png'
import LIGHTEN_LOGO from '../images/naser-lighten-logo.png'
const Logos = () => {
    return (
        <div className="logo">
            <img src={LOGO} alt="logo" />
            <img src={LIGHTEN_LOGO} alt="lighten logo" />
        </div>
    );
};

export default Logos;