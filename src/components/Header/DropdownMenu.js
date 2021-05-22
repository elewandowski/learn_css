import React from "react";

class DropdownHeader extends React.Component {
  constructor(props) {
    super(props);
    this.isOpen = false;
  }

  render() {
    return (
      <div className="dropdownMenu">
        <button>
          <label>Emil's website</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            width="12"
            height="12"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 14l-4-4h8z" />
          </svg>
        </button>
      </div>
    );
  }
}

export default DropdownHeader;
