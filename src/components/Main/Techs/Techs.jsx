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
            <p className='techs__skill'>HTML</p>
          </li>
          <li>
            <p className='techs__skill'>CSS</p>
          </li>
          <li>
            <p className='techs__skill'>JS</p>
          </li>
          <li>
            <p className='techs__skill'>React</p>
          </li>
          <li>
            <p className='techs__skill'>Git</p>
          </li>
          <li>
            <p className='techs__skill'>Express.js</p>
          </li>
          <li>
            <p className='techs__skill'>mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;
