import React from "react";
import { connect } from "react-redux";

const PlayerCard = (props) => {
  return (
    <div className="position-absolute b-0 l-0 ms-2 mb-2 border-5-px p-2 w-15">
      <div className="text-center">
        <h1>Player (You)</h1>
        <div>Force: {props.player.force}</div>
        <div>Blackmail: {props.player.blackmail}</div>
        <div>Gold: {props.player.gold}</div>
        <div>Support: {props.player.support}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { player: state.player };
};

export default connect(mapStateToProps)(PlayerCard);
