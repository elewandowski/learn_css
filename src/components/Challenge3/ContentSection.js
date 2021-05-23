import React from "react";
import "./ContentSection.css";
import illustrationMockup from "./assets/illustration-mockups.svg";
import { ReactComponent as facebookLogo } from "./assets/logo-facebook.svg";
import twitterLogo from "./assets/logo-twitter.svg";
import instagramLogo from "./assets/logo-instagram.svg";

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
            <section className="socialLinks">
              <facebookLogo
                className="facebookLogo socialLink"
                src={facebookLogo}
                width="25px"
                height="25px"
              ></facebookLogo>
              <img
                className="twitterLogo socialLink"
                src={twitterLogo}
                width="25px"
                height="25px"
              ></img>
              <img
                className="instagramLogo socialLink"
                src={instagramLogo}
                width="25px"
                height="25px"
              ></img>
            </section>
          </section>
        </div>
      </div>
    );
  }
}

export default ContentSection;
