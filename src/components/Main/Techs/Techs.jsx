import React from 'react';
import './Techs.css';

const Techs = () => {
  return (
    <section className='techs'>
      <h2 className='section-name'>Технологии</h2>
      <div className='techs__content'>
        <article className='description techs__description'>
          <h2 className='description__title main-title techs__title'>7 технологий</h2>
          <p className='description__text techs__text'>
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </p>
        </article>
        <ul className='techs__skills'>
          <li>
            <button className='techs__skill'>HTML</button>
          </li>
          <li>
            <button className='techs__skill'>CSS</button>
          </li>
          <li>
            <button className='techs__skill'>JS</button>
          </li>
          <li>
            <button className='techs__skill'>React</button>
          </li>
          <li>
            <button className='techs__skill'>Git</button>
          </li>
          <li>
            <button className='techs__skill'>Express.js</button>
          </li>
          <li>
            <button className='techs__skill'>mongoDB</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;
