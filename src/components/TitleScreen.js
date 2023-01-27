import React from "react";
import { Link } from "react-router-dom";

const TitleScreen = () => {
  return (
    <div className="revolution-banner center">
      <div className="title">
        <h1 className="title-font">Revolution!</h1>
      </div>
      <div>
        <Link className="ui green huge circular button centered" to="game">
          Play
        </Link>
      </div>
    </div>
  );
};

export default TitleScreen;
