import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TitleScreen from "./components/TitleScreen";
import Game from "./components/Game";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TitleScreen />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
