import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.links = props.links;
  }
  render() {
    return (
      <header>
        <div className="headerContent">
          <div className="headerTitle">Emil's website</div>

          <ul>
            {this.links.map((element) => {
              console.log(element);
              return (
                <li>
                  <a href={element.href}>{element.text}</a>
                </li>
              );
            })}
          </ul>
          <input id="search" placeholder="search" />
        </div>
      </header>
    );
  }
}

export default Header;
