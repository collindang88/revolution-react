import React from "react";
import { connect } from "react-redux";
import { bribePerson, unbribePerson } from "../actions";

const Person = ({ personString, people, player, bribePerson }) => {
  const person = people[personString];
  const isClicked = person.clicked ? "clicked" : "unclicked";

  const onPersonClick = () => {
    if (person.clicked) {
      const currency = person.currency;
      unbribePerson(personString, currency);
      console.log('unbribing')
      return;
    }

    if (!playerHasEnoughCurrencyForBribe(player, person)) return;
    const currency = chooseCurrency(player, person);
    bribePerson(personString, currency);
    console.log('bribing')
  };

  return (
    <div className="col-sm my-1 p-1">
      <div
        className={`${chooseColor(
          person
        )}  ${isClicked} pointer height-100 text-center`}
        onClick={onPersonClick}
      >
        <div className="text-white h5">{person.title}</div>
        <div className="text-white">{person.description}</div>
      </div>
    </div>
  );
};

const chooseCurrency = (player, person) => {
  if (person.canForce && player.force > 0) return "force";
  if (person.canBlackmail && player.blackmail > 0) return "blackmail";
  if (person.canGold && player.gold > 0) return "gold";
  throw Error("player's currency for bribe cannot be chosen");
};

const playerHasEnoughCurrencyForBribe = (player, person) => {
  if (person.canForce && player.force > 0) return true;
  if (person.canBlackmail && player.blackmail > 0) return true;
  if (person.canGold && player.gold > 0) return true;
  return false;
};

const chooseColor = (person) => {
  if (!person.canForce && person.canBlackmail) return "red";
  else if (person.canForce && !person.canBlackmail) return "black";
  else if (!person.canForce && !person.canBlackmail) return "gradient";
  else return "brown";
};

const mapStateToProps = (state) => {
  return { people: state.people, player: state.player };
};

export default connect(mapStateToProps, { bribePerson, unbribePerson })(Person);
