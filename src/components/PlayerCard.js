import React from "react";
import { connect } from "react-redux";

const PlayerCard = (props) => {
  return (
    <div className="player-location player-card">
      <div className="center aligned content">
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
