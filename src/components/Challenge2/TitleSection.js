import React from "react";
import "./TitleSection.css";

class TitleSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TitleSection">
        <h1 className="header firstHeader">Reliable, efficient delivery</h1>
        <h1 className="header secondHeader">Powered by technology</h1>
        <p>
          Our artificial intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
    );
  }
}

export default TitleSection;
