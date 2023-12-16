import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import Computer from './img/Web Development.png'
const Navigation = () => {
  return (
    <div>
      <header>
        <nav>
          <div className='img'>
            <img src={Computer} alt="" />
          </div>
      <div className='home'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      </nav>
      </header>
    </div>
  );
};

export default Navigation;
