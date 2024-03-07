import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.linkedin.com/in/john-carlo-yhapon/"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-linkedin"></i>
      </a>

      <a href="" className="home__social-link" target="_blank">
        <i class="fa-solid fa-envelope"></i>
      </a>

      <a
        href="https://www.github.com/JCYhapon"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-square-github"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
