import React from "react";
import { Link } from "react-router-dom";

const TitleScreen = () => {
  return (
    <div className="revolution-banner center">
      <div className="title">
        <h1 className="title-font">Revolution!</h1>
      </div>
      <div className = "ui container grid">
        <div className = "column eight wide">
          <Link className="ui green huge circular button centered" to="game">
            Play
          </Link>
        </div>
        <div className = "ui column eight wide">
          <Link className="ui yellow huge circular button centered" to="rules">
            Rules
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TitleScreen;
