import React from 'react';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className='about-project'>
      <h2 className='section-name'>О проекте</h2>
      <div className='about-project__content'>
        <article>
          <h2 className='about-project__title'>Дипломный проект включал 5 этапов</h2>
          <p className='about-project__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </article>
        <article>
          <h2 className='about-project__title'>На выполнение диплома ушло 5 недель</h2>
          <p className='about-project__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div className='about-project__timeline'>
        <div className='about-project__timeline-block about-project__timeline-block_left'>
          <button className='about-project__timeline-button  black-button'>1 неделя</button>
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
