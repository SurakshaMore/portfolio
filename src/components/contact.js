import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter } from "@fortawesome/free-solid-svg-icons";
import gitImg from "../assets/images/git.png";
import linkedinImg from "../assets/images/linkedin.png";
import twitterImg from "../assets/images/twitter.jpeg";
export const Contact = () => {
  return (
    <footer className="footer">
      <div className="formContainer">
        <h2>Contact Me</h2>
        <p>Feel free to reach out:</p>
        <form
          action="https://formspree.io/f/maygeone"
          method="POST"
          className="contactForm"
        >
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message"></textarea>
          <button type="submit" className="submitbut" >
            Send
          </button>
        </form>
        <div className="social-links">
          <a href="https://github.com/SurakshaMore">
            <img src={gitImg} className="socialLogo"/>
          </a>
          <a href="www.linkedin.com/in/surakshamore">
            <img src={linkedinImg} className="socialLogo"/>
          </a>
          <a href="https://twitter.com/MoreSuraksha">
            <img src={twitterImg} className="socialLogo"/>
          </a>
        </div>
      </div>
    </footer>
  );
};
