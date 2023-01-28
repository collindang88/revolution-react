import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TitleScreen from "./components/TitleScreen";
import Game from "./components/Game";
import Rules from "./components/Rules";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TitleScreen />} />
          <Route path="/game" element={<Game />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
