import React from "react";
import "./ContentSection.css";
import illustrationMockup from "./assets/illustration-mockups.svg";
import { ReactComponent as LogoFacebook } from "./assets/logo-facebook.svg";
import { ReactComponent as LogoTwitter } from "./assets/logo-twitter.svg";
import { ReactComponent as LogoInstagram } from "./assets/logo-instagram.svg";

class ContentSection extends React.Component {
  render() {
    return (
      <div className="Content">
        <div className="upper">
          <img
            className="illustrationMockup"
            src={illustrationMockup}
            // width="600vw"
            // height="400vh"
          ></img>
          <section className="textSection">
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <button>Register</button>
            <section className="socialLinks">
              <LogoFacebook
                className="LogoFacebook socialLink"
                fill="#FFFFFF"
                stroke="#000000"
              ></LogoFacebook>
              <LogoTwitter
                className="LogoTwitter socialLink"
                fill="#FFFFFF"
                stroke="#000000"
              ></LogoTwitter>
              <LogoInstagram
                className="LogoInstagram socialLink"
                fill="#FFFFFF"
                stroke="#000000"
              ></LogoInstagram>
            </section>
          </section>
        </div>
      </div>
    );
  }
}

export default ContentSection;
