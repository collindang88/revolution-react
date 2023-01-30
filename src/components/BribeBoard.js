import React from "react";
import Person from "./Person";

const BribeBoard = () => {
  return (
    <div className="position-absolute trans-50-50 w-50 l-50 t-50 m-auto border-5-px p-2 mb-10">
      <h2 className="text-center">Select Your Bribes!</h2>
      <div className="container">
        <div className="row">
          <Person role="general"/>
          <Person role="captain"/>
          <Person role="innkeeper" />
          <Person role="magistrate" />
        </div>
        <div className="row">
          <Person role="priest" />
          <Person role="aristocrat" />
          <Person role="merchant" />
          <Person role="printer" />
        </div>
        <div className="row">
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
