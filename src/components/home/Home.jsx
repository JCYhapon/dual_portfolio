import React from "react";
import "./home.css";
import { avatar1, avatar2, avatar3 } from "../../assets/import";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <div className="both__image">
          <img src={avatar3} alt="" className="home__img" />
          <img src={avatar1} alt="" className="home__img" />
        </div>
        <h1 className="home__name">
          John and Ivan<span className="dot">.</span>
        </h1>
        <span className="home__education">
          We are an aspiring Web Developer
        </span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          Let's work together!
        </a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};
export default Home;
