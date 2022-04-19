import { collectAssets } from 'next/dist/build/webpack/plugins/middleware-plugin';
import React from 'react';
import classes from './Header.module.scss';
import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';

const Header = () => {
  return (
    <header className={classes.header}> 
      <div className={classes.header__content}>
          <h2>header</h2>
      </div>
      <nav className={classes.header__content__nav}>
        <ul>
          <li>
            <a href="#">PageOne</a>
          </li>
          <li>
            <a href="#">PageTwo</a>
          </li>
          <li>
            <a href="#">PageThree</a>
          </li>
        </ul>
        <button>CTA Page</button>
      </nav>
      <div className={classes.header__content__toggle}>
          <BiMenuAltRight />
      </div>
    </header>
  );
};

export default Header;