import React from "react";
import { connect } from "react-redux";
import { selectPerson } from "../actions";

const Person = ({ role, people, selectPerson }) => {
  const person = people[role];
  const isClicked = person.clicked
    ? "clicked"
    : "unclicked";

  const onPersonClick = () => {
    selectPerson(role);
  };

  return (
    <div className="col-sm my-1">
      <div
        className={`${chooseColor(
          person
        )}  ${isClicked} pointer height-100 text-center`}
        onClick={onPersonClick}
      >
        <div className="text-white">{person.title}</div>
        <div className="text-white">{person.description}</div>
      </div>
    </div>
  );
};

const chooseColor = (person) => {
  if (!person.canForce && person.canBlackmail) return "red";
  else if (person.canForce && !person.canBlackmail) return "black";
  else if (!person.canForce && !person.canBlackmail) return "gradient";
  else return "brown";
};

const mapStateTo= (state) => {
  return { people: state.people };
};

export default connect(mapStateTo, { selectPerson })(Person);
