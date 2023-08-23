import React from "react";
import "./About.css";
import Image from "../../assets/Akash.jpg";
import Resume from "../../assets/React Js-Akash Miskar.pdf";
import AboutBox from "./AboutBox";

const About = () => {
  const downloadResume = async () => {
    window.open(Resume, "_blank");
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello! I'm Akash, and I'm based in Pune,India.
              <br />
              <br />
              Front-end developer with 3+ year experience with ability to design
              and develop JavaScript-based applications for web or mobile
              environments. Strong knowledge of React JS, Redux,Javascript
              jQuery, HTML, CSS, and Bootstrap ,Tailwind Css. Experienced in all
              stages of interface component design, from conception to final
              testing and deployment of web-responsive applications:
            </p>
            <ul className="about__list">
              <li>JavaScript (ES6+)</li>
              <li>Redux</li>
              <li>React</li>
              <li>JQuery</li>
              <li>REST API</li>
              <li>Tailwind CSS</li>
            </ul>
            <button className="btn" onClick={downloadResume}>
              Donwload CV
            </button>
          </div>

          {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
