import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-title">
          <div className="navbar">
            <div className="header1"><img src="/src/assets/images/Logo.png"></img>XTREME<b>CARS</b></div>
            <div className="header2">NEW CARS</div>
            <div className="header3">USED CARS</div>
            <div className="header4">MY PROFILE</div>
          </div>
        </div>
        <div className="tab-items-container">
          <Link className="tab-item" to="/firstTab">
            Sedan
          </Link>
          <Link className="tab-item" to="/secondTab">
            SUV
          </Link>
          <Link className="tab-item" to="/thirdTab">
            Hatchback
          </Link>
          <Link className="tab-item" to="/fourthTab">
            Coupe
          </Link>
        </div>
        <div className="divider" />
      </div>
    );
  }
}

export default Header;
