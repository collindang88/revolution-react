import React from "react";
import { connect } from "react-redux";
import { selectPerson } from "../actions";

const Person = (props) => {
  const peopleStatusKey = props.name.toLowerCase() + "Clicked";
  const activeClass = props.peopleStatus[peopleStatusKey]
    ? "clicked"
    : "unclicked";

  const handleClick = () => {
    props.selectPerson(props.name);
  };

  return (
    <div className="column four wide">
      <button
        className={`ui ${chooseColor(
          props.color
        )} huge circular small width button ${activeClass}`}
        onClick={handleClick}
      >
        <div className="ui white">{props.name}</div>
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
      throw new Error("Color does not exist");
  }
};

const mapStateToProps = (state) => {
  return { peopleStatus: state.peopleStatus };
};

export default connect(mapStateToProps, { selectPerson })(Person);
