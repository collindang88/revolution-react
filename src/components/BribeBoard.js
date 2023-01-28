import React from "react";
import Person from "./Person";

const BribeBoard = () => {
  return (
    <div className="bribe-board-location bribe-board">
      <h2 className="">Select Your Bribes!</h2>
      <div className="ui container grid">
        <div className="ui row">
          <Person name="General" color="red" />
          <Person name="Captain" color="red" />
          <Person name="Innkeeper" color="black" />
          <Person name="Magistrate" color="black" />
        </div>
        <div className="ui row">
          <Person name="Priest" color="brown" />
          <Person name="Aristocrat" color="brown" />
          <Person name="Merchant" color="brown" />
          <Person name="Printer" color="brown" />
        </div>
        <div className="ui row">
          <Person name="Rogue" color="split" />
          <Person name="Spy" color="black" />
          <Person name="Apothecary" color="red" />
          <Person name="Mercenary" color="split" />
        </div>
      </div>
    </div>
  );
};

export default BribeBoard;
