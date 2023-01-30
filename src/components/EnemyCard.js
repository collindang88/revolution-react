import React from "react";
import { connect } from "react-redux";

const EnemyCard = (props) => {
  return (
    <div className="position-absolute b-0 r-0 me-2 mb-2 border-5-px p-2 w-15">
      <div className="text-center">
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
