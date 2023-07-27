import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <nav>
        <ul className='portfolio__links'>
          <li className='portfolio__row'>
            <Link className='portfolio__link'>
              Статичный сайт <span className='portfolio__arrow'>&#8599;</span>
            </Link>
          </li>
          <li className='portfolio__row'>
            <Link className='portfolio__link'>
              Адаптивный сайт <span className='portfolio__arrow'>&#8599;</span>
            </Link>
          </li>
          <li className='portfolio__row'>
            <Link className='portfolio__link'>
              Одностраничное приложение <span className='portfolio__arrow'>&#8599;</span>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Portfolio;
