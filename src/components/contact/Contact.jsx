import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get in touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Project in mind? </h3>
          <p className="contact__details">
            Want to build something cool? Send us an email.
          </p>
        </div>

        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeBCnx1NB1fxLdRfUfUYDcX9UyK5N6I_R_vUIhgS0MyVlYBrg/formResponse"
          method="POST"
          className="contact__form"
        >
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input form-control"
                placeholder="Email"
                name="entry.1986735188"
              />
            </div>

            <div className="contact__form-div form-control">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Name"
                name="entry.1087480494"
              />
            </div>

            <div className="contact__form-div form-control">
              <input
                type="number"
                className="contact__form-input form-control"
                placeholder="Number"
                name="entry.742390422"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input form-control"
              placeholder="Subject"
              name="entry.125944306"
            />
          </div>

          <div className="contact__form-div">
            <textarea
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Message"
              name="entry.1461346954"
            ></textarea>
          </div>

          <button className="btn" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
