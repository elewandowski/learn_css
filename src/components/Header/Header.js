import React from "react";
import "./Header.css";

function Search() {
  function onSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    // return false;
  }
  return (
    <div className="searchContainer">
      <form className="search" onSubmit={onSubmit}>
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">
          <i>Submit</i>
        </button>
      </form>
    </div>
  );
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.links = [
      {
        text: "ONE",
        href: "/",
      },
      {
        text: "TWO",
        href: "/",
      },
      {
        text: "THREE",
        href: "/",
      },
    ];
  }

  render() {
    return (
      <header>
        <div className="headerContent">
          <div className="headerTitle">Emil's website</div>
          <nav>
            {this.links.map((element) => {
              console.log(element);
              return <a href={element.href}>{element.text}</a>;
            })}
          </nav>
          <Search />
        </div>
      </header>
    );
  }
}

export default Header;
