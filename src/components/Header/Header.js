import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';

const Header = () => (
  <header data-testid="header">
    <span className={style.back}><Link to="/">&laquo;</Link></span>
    <span>Statistics</span>
    <div>
      <img src={`${process.env.PUBLIC_URL}images/microphone.png`} alt="Microphone" />
      <img src={`${process.env.PUBLIC_URL}images/settings.png`} alt="Settings" />
    </div>
  </header>
);

export default Header;
