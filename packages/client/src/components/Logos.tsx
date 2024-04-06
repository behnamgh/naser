import React from "react";
import LOGO from "../images/naser-logo.png";
import LIGHTEN_LOGO from "../images/naser-lighten-logo.png";
// import DE from "../images/languages/LanguageSelectDE.png";
// import EN from "../images/languages/LanguageSelectEN.png";
// import langContext from "../components/contexts/lang";

const Logos = () => {
  //   const { lang, toggleLanguage } = useContext(langContext);

  //   const handleLangChange = () => {
  //     toggleLanguage();
  //   };

  return (
    <div className="logo">
      <img src={LOGO} alt="logo" />
      <img src={LIGHTEN_LOGO} alt="lighten logo" />

      {/* {lang === "en-US" ? <img src={EN} alt="down" onClick={handleLangChange} /> : <img src={DE} alt="down" onClick={handleLangChange} />} */}
    </div>
  );
};

export default Logos;
