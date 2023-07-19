import React from 'react';
import './AboutProject.css';
import SectionName from '../SectionName/SectionName';

const AboutProject = () => {
  return (
    <section className='about-project'>
      <SectionName>О проекте</SectionName>
      <ul className='about-project__content'>
        <li>
          <article className='about-project__description'>
            <h2 className='about-project__title'>Дипломный проект включал 5 этапов</h2>
            <p className='about-project__text'>
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </article>
        </li>
        <li>
          <article className='about-project__description'>
            <h2 className='about-project__title'>На выполнение диплома ушло 5 недель</h2>
            <p className='about-project__text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </article>
        </li>
      </ul>
      <div className='about-project__timeline'>
        <div className='about-project__timeline-block about-project__timeline-block_left'>
          <button className='about-project__timeline-button  about-project__timeline-button_left'>1 неделя</button>
          <p className='about-project__timeline-text'>Back-end</p>
        </div>
        <div className='about-project__timeline-block about-project__timeline-block_right'>
          <button className='about-project__timeline-button about-project__timeline-button_right'>4 недели</button>
          <p className='about-project__timeline-text'>Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
