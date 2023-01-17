import React, { useState } from "react";
import TitleScreen from "./components/TitleScreen";
import Game from './components/Game';

const App = () => {
  const [startGame, setStartGame] = useState(false);
  return (
    <div className="ui segment black bordered padding">
      {startGame ? <Game /> : <TitleScreen setStartGame={setStartGame} />}
    </div>
  );
};

export default App;
