import React from "react";
import BribeBoard from "./BribeBoard";
import GameMap from "./GameMap";
import PlayerCard from "./PlayerCard";
import EnemyCard from "./EnemyCard";

const Game = () => {
  return (
    <div>
      <GameMap />
      <BribeBoard />
      <PlayerCard />
      <EnemyCard />
    </div>
  );
};

export default Game;
