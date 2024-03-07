import React from "react";
import "./about.css";
import Me from "../../assets/avatar-3.svg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="bg-color">
      <div className="about container section" id="about">
        <h2 className="section__title">About Us</h2>

        <div className="about__container grid">
          <img src={Me} alt="" className="about__img" />

          <div className="about__data grid">
            <div className="about__info">
              <p className="about__description">
                John and Ivan, web developer students from Holy Angel
                University, passionate about coding innovative digital
                experiences. Explore our portfolio to see our creative projects
                in action!
              </p>
              <a href="" className="btn">
                Download CV
              </a>
            </div>

            <div className="about__skills grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Javascript</h3>
                  <span className="skills__number">2 Years Exp.</span>
                </div>

                <div className="skills__titles">
                  <h3 className="skills__name">TailwindCSS</h3>
                  <span className="skills__number">2 Years Exp.</span>
                </div>

                <div className="skills__titles">
                  <h3 className="skills__name">Angular</h3>
                  <span className="skills__number">2 Years Exp.</span>
                </div>

                <div className="skills__titles">
                  <h3 className="skills__name">Reactjs</h3>
                  <span className="skills__number">1 Year Exp.</span>
                </div>

                <div className="skills__titles">
                  <h3 className="skills__name">Laravel</h3>
                  <span className="skills__number">1 Year Exp.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AboutBox />
      </div>
    </section>
  );
};

export default About;
