import React from "react";
import { connect } from "react-redux";

const EnemyCard = (props) => {
  return (
    <div className="enemy-location enemy-card">
      <div className="center aligned content">
        <h1>Enemy</h1>
        <div>Force: {props.enemy.force}</div>
        <div>Blackmail: {props.enemy.blackmail}</div>
        <div>Gold: {props.enemy.gold}</div>
        <div>Support: {props.enemy.support}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { enemy: state.enemy };
};

export default connect(mapStateToProps)(EnemyCard);
