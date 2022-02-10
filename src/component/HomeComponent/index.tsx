import React from "react";
import "./index.css";

interface IProps {
  name: string;
  color: string;
}

const HomeComponent = (props: IProps) => {
  return (
    <div className="home-component" style={{ backgroundColor: props.color }}>
      <div className="home-component-one">
        <div className="component-text">{`FIND YOUR DREAM CARS`}</div>
          <div className="search">
              <form action="#">
                  <input type="text"
                      placeholder="Enter car name..."
                      name="search" 
                  />
                  <button name="subject" type="submit">SEARCH</button>
              </form>
          </div>
      </div>
      <div className="featured-cars">
        <h3>Featured <b>CARS</b></h3>
        <div className="tab">
          <button className="tablinks" id="defaultOpen">Popular</button>
          <button className="tablinks">Just launched</button>
          <button className="tablinks">Upcoming</button>
        </div>
      </div>
      
    </div>
  );
};

export default HomeComponent;

//12 ${props.name}