import React from "react";
import "./CardSection.css";

class Card extends React.Component {
  render(props) {
    return (
      <div className="Card">
        <h1>{this.props.title}</h1>
        <p>{this.props.text}</p>
        <div style={{ textAlign: "right" }}>
          <img src={this.props.svgPath} height="50px" width="50px"></img>
        </div>
      </div>
    );
  }
}

class CardSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="CardSection">
        <table>
          <tr>
            <td>
              <Card
                title="Supervisor"
                text="Monitors activity to identify project roadblocks "
                svgPath="./icons/icon-supervisor.svg"
              ></Card>
            </td>
            <td>
              <Card
                title="Team Builder"
                text="Scans our talent network to create the optimal team for your project"
                svgPath="./icons/icon-team-builder.svg"
              ></Card>
              <Card
                title="Karma"
                text="Regularly evaluates our talent to ensure quality"
                svgPath="./icons/icon-karma.svg"
              ></Card>
            </td>
            <td>
              <Card
                title="Calculator"
                text="Uses data from past projects to provide better delivery estimates"
                svgPath="./icons/icon-calculator.svg"
              ></Card>
            </td>
          </tr>
        </table>
        <div className="column1"></div>
        <div className="column2"></div>
        <div className="column3"></div>
      </div>
    );
  }
}

export default CardSection;
