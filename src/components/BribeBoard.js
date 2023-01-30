import React from "react";
import Person from "./Person";

const BribeBoard = () => {
  return (
    <div className="position-absolute trans-50-50 w-50 l-50 t-50 m-auto border-5-px p-2 mb-10">
      <h2 className="text-center">Select Your Bribes!</h2>
      <div className="container">
        <div className="row">
          <Person personString="general"/>
          <Person personString="captain"/>
          <Person personString="innkeeper" />
          <Person personString="magistrate" />
        </div>
        <div className="row">
          <Person personString="priest" />
          <Person personString="aristocrat" />
          <Person personString="merchant" />
          <Person personString="printer" />
        </div>
        <div className="row">
          <Person personString="rogue" />
          <Person personString="spy" />
          <Person personString="apothecary"/>
          <Person personString="mercenary" />
        </div>
      </div>
    </div>
  );
};

export default BribeBoard;
