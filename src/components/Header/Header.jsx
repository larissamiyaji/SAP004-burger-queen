import React from "react";

import logo from "../images/logo.png";

const Header = () => {
  return (
    <nav className="navbar">
      <h1 className="main-title">
        <img
          className="logo"
          src={logo}
          alt="Hambúrguer envolto em anel de cebola roxa, a -26º"
        />
        <img
          src="https://fontmeme.com/permalink/200807/6ac31f6f80a785a32d6842bfa1bcf81d.png"
          alt="maroon-font"
          border="0"
        />
      </h1>
    </nav>
  );
};

export default Header;
