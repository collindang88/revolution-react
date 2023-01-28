import React from "react";
import { connect } from "react-redux";
import { selectPerson } from "../actions";

const Person = ({ role, people, selectPerson }) => {
  const person = people[role];
  const isClicked = person.clicked
    ? "clicked"
    : "unclicked";

  const onPersonClick = () => {
    selectPerson(person);
  };

  return (
    <div className="column four wide">
      <div
        className={`${chooseColor(
          person
        )}  ${isClicked} pointer person-box`}
        onClick={onPersonClick}
      >
        <div className="ui white">{person.title}</div>
        <div>{person.description}</div>
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
