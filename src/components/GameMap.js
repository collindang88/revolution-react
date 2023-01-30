import React from "react";

const GameMap = () => {
  return (
    <div className="position-absolute t-20 l-50 trans-50-50 m-auto border-5-px p-2 mb-2 w-70">
      <h2 className="text-center">Game Map</h2>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="row m-auto">
              <div className="text-center">Plantation</div>
            </div>
            <div className="row m-auto">
              <div className="text-center">0/6</div>
            </div>
          </div>
          <div className="col-sm">
            <div className="row m-auto">
              <div className="text-center">Tavern</div>
            </div>
            <div className="row m-auto">
              <div className="text-center">0/4</div>
            </div>
          </div>
          <div className="col-sm">
            <div className="row m-auto">
              <div className="text-center">Cathedral</div>
            </div>
            <div className="row m-auto">
              <div className="text-center">0/7</div>
            </div>
          </div>
          <div className="col-sm">
            <div className="row m-auto">
              <div className="text-center">Town Hall</div>
            </div>
            <div className="row m-auto">
              <div className="text-center">0/7</div>
            </div>
          </div>
          <div className="col-sm">
            <div className="row m-auto">
              <div className="text-center">Fortress</div>
            </div>
            <div className="row m-auto">
              <div className="text-center">0/8</div>
            </div>
          </div>
          <div className="col-sm">
            <div className="row m-auto">
              <div className="text-center">Market</div>
            </div>
            <div className="row m-auto">
              <div className="text-center">0/5</div>
            </div>
          </div>
          <div className="col-sm">
            <div className="row m-auto">
              <div className="text-center">Harbor</div>
            </div>
            <div className="row m-auto">
              <div className="text-center">0/6</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameMap;
