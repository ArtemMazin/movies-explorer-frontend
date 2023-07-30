import React from 'react';
import { Link } from 'react-router-dom';
import SectionName from '../SectionName/SectionName';
import './AboutMe.css';
import avatar from '../../../images/avatar.jpg';

const AboutMe = () => {
  return (
    <section className='about-me'>
      <SectionName>Студент</SectionName>
      <div className='about-me__content'>
        <div>
          <h2 className='about-me__title'>Артем</h2>
          <article className='about-me__description'>
            <h2 className='about-me__subtitle'>Фронтенд-разработчик, 32 года</h2>
            <p className='about-me__text'>
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать
              музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После
              того, как прошёл курс по веб&#8209;разработке, начал заниматься фриланс-заказами и ушёл с постоянной
              работы.
            </p>
            <Link
              to={'https://github.com/ArtemMazin'}
              className='about-me__link'
              target='blank'
              tabIndex={1}>
              Github
            </Link>
          </article>
        </div>
        <img
          src={avatar}
          alt='Фотография автора'
          className='about-me__avatar'
        />
      </div>
    </section>
  );
};

export default AboutMe;
