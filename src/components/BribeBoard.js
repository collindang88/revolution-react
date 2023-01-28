import React from "react";
import Person from "./Person";

const BribeBoard = () => {
  return (
    <div className="bribe-board-location bribe-board">
      <h2 className="">Select Your Bribes!</h2>
      <div className="ui container grid">
        <div className="ui row">
          <Person role="general"/>
          <Person role="captain"/>
          <Person role="innkeeper" />
          <Person role="magistrate" />
        </div>
        <div className="ui row">
          <Person role="priest" />
          <Person role="aristocrat" />
          <Person role="merchant" />
          <Person role="printer" />
        </div>
        <div className="ui row">
          <Person role="rogue" />
          <Person role="spy" />
          <Person role="apothecary"/>
          <Person role="mercenary" />
        </div>
      </div>
    </div>
  );
};

export default BribeBoard;
