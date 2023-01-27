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
      <h2 className="">Round: 1</h2>
      <h2 className="">Support: 0</h2>
      <br />
      <div className="ui container grid">
        <div className="ui row">
          <h2 className="column five wide">Force: 0</h2>
          <h2 className="column five wide">Blackmail: 0</h2>
          <h2 className="column five wide">Gold: 5</h2>
        </div>
      </div>
    </div>
  );
};

export default BribeBoard;
