import React from 'react';
import './Home.css';
import Me from '../../assets/logo.jpg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} id='Imglog' alt="" className='home__img'  />
                <h1 className="home__name">Akash Miskar</h1>
                <span className="home__education">I'm a Associate React Developer </span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contact Me</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home