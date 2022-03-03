import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {


  return (
    <header className="header">
      <NavLink to="/" className="header__link">Валюты</NavLink>
      <NavLink to="/form" className="header__link">Узнать баланс</NavLink>
    </header>
  );
}

export default Header;
