import React from "react";

const Header = ({ title, description }) => {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <p className="header__subtitle">{description}</p>
    </header>
  );
};

export default Header;
