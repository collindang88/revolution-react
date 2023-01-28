import React from "react";

const GameMap = () => {
  return (
    <div className="game-map-location game-map">
      <h2>Game Map</h2>
      <div className="ui grid">
        <div className="column two wide">Locations:</div>
        <div className="column two wide">
          <div className="row">Plantation</div>
          <div className="row">0/6</div>
        </div>
        <div className="column two wide">
          <div className="row">Tavern</div>
          <div className="row">0/4</div>
        </div>
        <div className="column two wide">
          <div className="row">Cathedral</div>
          <div className="row">0/7</div>
        </div>
        <div className="column two wide">
          <div className="row">Town Hall</div>
          <div className="row">0/7</div>
        </div>
        <div className="column two wide">
          <div className="row">Fortress</div>
          <div className="row">0/8</div>
        </div>
        <div className="column two wide">
          <div className="row">Market</div>
          <div className="row">0/5</div>
        </div>
        <div className="column two wide">
          <div className="row">Harbor</div>
          <div className="row">0/6</div>
        </div>
      </div>
    </div>
  );
};

export default GameMap;
