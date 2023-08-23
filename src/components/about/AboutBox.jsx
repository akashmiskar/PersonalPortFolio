import React, { useRef } from "react";
import {
  RiFireLine,
  RiCupLine,
  RiGroupLine,
  RiTrophyLine,
} from "react-icons/ri";
import CountUp from "react-countup";
const AboutBox = () => {
  
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <RiFireLine className="about__icon" />

        <div>
          <h3 className="js-count-up about__title">
            <CountUp end={3.5} start={0} delay={1} decimals={1}>
              {" "}
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </h3>
          <span className="about__subtitle">Years of Experience</span>
        </div>
      </div>

      <div className="about__box">
        <RiCupLine className="about__icon" />

        <div>
          <h3 className="js-count-up about__title">
          <CountUp end={6} start={0} delay={0.5} >
              {" "}
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </h3>
          <span className="about__subtitle">Github Repositories</span>
        </div>
      </div>

      <div className="about__box">
        <RiGroupLine className="about__icon" />

        <div>
          <h3 className="js-count-up about__title">
          <CountUp end={1} start={0} delay={0.1} >
              {" "}
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </h3>
          <span className="about__subtitle">Launched Projects</span>
        </div>
      </div>

      <div className="about__box">
        <RiTrophyLine className="about__icon" />

        <div>
          <h3 className="js-count-up about__title">
            {" "}
            <CountUp end={100} start={0} delay={1} >
              {" "}
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </h3>
          <span className="about__subtitle">Code Quality</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
