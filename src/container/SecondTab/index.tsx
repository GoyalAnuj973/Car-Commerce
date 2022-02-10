import React from "react";
import HomeComponent from "../../component/HomeComponent";
import "./index.css";

class SecondTab extends React.Component {
  render() {
    return (
      <div className="first-tab-container">
        <HomeComponent name="Tab 2" color="#A9A9A9" />
      </div>
    );
  }
}

export default SecondTab;
