import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <h2 className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__row'>
        <p className='footer__copyright'>&#169; 2023</p>
        <nav>
          <ul className='footer__links'>
            <li>
              <Link
                to={'https://practicum.yandex.ru/'}
                className='footer__link'
                target='blank'
                tabIndex={1}>
                Яндекс.Практикум
              </Link>
            </li>
            <li>
              <Link
                to={'https://github.com/ArtemMazin'}
                className='footer__link'
                target='blank'
                tabIndex={1}>
                Github
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
