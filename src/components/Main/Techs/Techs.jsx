import React from 'react';
import SectionName from '../SectionName/SectionName';
import './Techs.css';

const Techs = () => {
  return (
    <section className='techs'>
      <SectionName>Технологии</SectionName>
      <div className='techs__content'>
        <article className='techs__description'>
          <h2 className='techs__title'>7 технологий</h2>
          <p className='techs__text'>
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
