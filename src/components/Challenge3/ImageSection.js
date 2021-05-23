import React from "react";
import "./ImageSection.css";
import illustrationMockup from "./assets/illustration-mockups.svg";

class ImageSection extends React.Component {
  render() {
    return (
      <div>
        <img
          className="illustrationMockup"
          src={illustrationMockup}
          width="200px"
          height="200px"
        ></img>
      </div>
    );
  }
}

export default ImageSection;
