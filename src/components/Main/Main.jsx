import React from 'react';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';
import './Main.css';
import AboutProject from './AboutProject/AboutProject';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main = () => {
  return (
    <>
      <Header />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default Main;
