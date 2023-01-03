import React from "react";

interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <p className="header__subtitle">{description}</p>
    </header>
  );
};

export default Header;
