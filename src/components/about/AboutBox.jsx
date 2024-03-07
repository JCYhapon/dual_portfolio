import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"> </i>
        <div>
          <h3 className="about__title">20+</h3>
          <span className="about__subtitle">Project completed</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-people"></i>
        <div>
          <h3 className="about__title">10+</h3>
          <span className="about__subtitle">Deans list</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-badge"> </i>
        <div>
          <h3 className="about__title">5+</h3>
          <span className="about__subtitle">Certificates</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
