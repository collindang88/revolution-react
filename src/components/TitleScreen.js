import React from "react";
import { Link } from "react-router-dom";

const TitleScreen = () => {
  return (
    <div className="position-absolute trans-50-50 text-center w-50 l-50 t-50 ">
      <div className="back-red border-5-px p-3 mb-4">
        <h1 className="font-huge">Revolution!</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Link className="btn btn-success btn-lg" to="game">
              Play
            </Link>
          </div>
          <div className="col-sm">
            <Link className="btn btn-warning btn-lg" to="rules">
              Rules
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleScreen;
