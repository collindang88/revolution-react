import React, { useState }from "react";
import "./Person.css";

const Person = ({ name, color }) => {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  let activeClass = isClicked ? "clicked" : "unclicked";

  return (
    <div className="column four wide">
      <button
        className={`ui ${chooseColor(color)} huge circular small width button ${activeClass}`}
        onClick={handleClick}
      >
        <div className="ui white">{name}</div>
      </button>
    </div>
  );
};

const chooseColor = (color) => {
  switch (color) {
    case "red":
      return "red";
    case "black":
      return "black";
    case "brown":
      return "brown";
    case "split":
      return "ui button gradient";
    default:
      console.log("not a color");
  }
};

export default Person;
