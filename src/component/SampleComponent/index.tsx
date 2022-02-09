import React from "react";
import "./index.css";

interface IProps {
  name: string;
  color: string;
}

const SampleComponent = (props: IProps) => {
  return (
    <div className="sample-component" style={{ backgroundColor: props.color }}>
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
  );
};

export default SampleComponent;

//12 ${props.name}