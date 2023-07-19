import React from 'react';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';
import './Main.css';
import AboutProject from './AboutProject/AboutProject';

const Main = () => {
  return (
    <main className='main'>
      <Promo />
      <AboutProject />
      <Techs />
    </main>
  );
};

export default Main;
