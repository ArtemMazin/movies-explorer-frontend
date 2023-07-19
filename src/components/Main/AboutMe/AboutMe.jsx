import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';
import avatar from '../../../images/avatar.jpg';

const AboutMe = () => {
  return (
    <section className='about-me'>
      <h2 className='section-name'>Студент</h2>
      <div className='about-me__content'>
        <div className='about-me__description'>
          <h2 className='main-title'>Артем</h2>
          <article className='description about-me__description'>
            <h2 className='description__title about-me__title'>Фронтенд-разработчик, 32 года</h2>
            <p className='description__text about-me__text'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать
              музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После
              того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <Link
              to={'https://github.com/ArtemMazin'}
              className='about-me__link'
              target='blank'>
              Github
            </Link>
          </article>
        </div>
        <img
          src={avatar}
          alt='Фотография автора'
          className='about-me__avatar'></img>
      </div>
    </section>
  );
};

export default AboutMe;
