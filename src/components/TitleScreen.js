import React from "react";
import { AiTwotoneGold, AiOutlineMail } from "react-icons/ai";
import { FaHandRock } from "react-icons/fa";
import './TitleScreen';

const TitleScreen = ( { setStartGame }) => {
  return (
    <div>
      <h1 className="center">Revolution!</h1>
      <div className="ui container grid center">
        <div className="ui row">
          <div className="column five wide">
            <AiTwotoneGold size={48} />
            <div>Gold.</div>
          </div>
          <div className="column five wide">
            <AiOutlineMail size={48} />
            <div>Blackmail.</div>
          </div>
          <div className="column five wide">
            <FaHandRock size={48} />
            <div>Force.</div>
          </div>
        </div>
      </div>
      <h3 className="center">Make Your Bid For Power</h3>
      <div className="center">
        <button className="ui red huge circular button centered" onClick={() => setStartGame(true)}>Play</button>
      </div>
    </div>
  );
};

export default TitleScreen;
