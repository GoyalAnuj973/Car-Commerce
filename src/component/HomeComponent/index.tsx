import React from "react";
import "./index.css";
import BMWX3 from "../../assets/images/BMW X3.png";
import BMWX5 from "../../assets/images/BMW X5.png";
import BMWX6 from "../../assets/images/BMW X6.png";
import BMWX7 from "../../assets/images/BMW X7.png";
import unionArrow from "../../assets/images/arrow.png";

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
      <div className="row">
        <div className="column">
          <div className="card">
            <img className="car-image" src={BMWX3} alt="BMW X3" />
            <div className="container">
              <h2>BMW X3</h2>
              <p className="title">69.9 lakh onwards</p>
              <p><button className="button"><img src={unionArrow} /></button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="car-image" src={BMWX5} alt="BMWX5" />
            <div className="container">
              <h2>BMW X5</h2>
              <p className="title">76.5 lakh onwards</p>
              <p><button className="button"><img src={unionArrow} /></button></p>
            </div>
          </div>
        </div>
        
        <div className="column">
          <div className="card">
            <img className="car-image" src={BMWX6} alt="BMWX6" />
            <div className="container">
              <h2>BMW X6</h2>
              <p className="title">1.02 crore onwards</p>
              <p><button className="button"><img src={unionArrow} /></button></p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img className="car-image" src={BMWX7} alt="BMWX7" />
            <div className="container">
              <h2>BMW X7</h2>
              <p className="title">1.15 crore onwards</p>
              <p><button className="button"><img src={unionArrow} /></button></p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HomeComponent;

//12 ${props.name}