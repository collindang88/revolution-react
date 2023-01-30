import _ from "lodash";

const INITIAL_STATE = {
  general: {
    title: "General",
    description: "One Support, One Force, Influence Fortress",
    clicked: false,
    currency: null,
    canForce: false,
    canBlackmail: true,
    canGold: true,
  },
  captain: {
    title: "Captain",
    description: "One Support, One Force, Influence Harbor",
    clicked: false,
    currency: null,
    canForce: false,
    canBlackmail: true,
    canGold: true,
  },
  innkeeper: {
    title: "InnKeeper",
    description: "Three Support, One Blackmail, Influence Tavern",
    clicked: false,
    currency: null,
    canForce: true,
    canBlackmail: false,
    canGold: true,
  },
  magistrate: {
    title: "Magistrate",
    description: "One Support, One Blackmail, Influence Townhall",
    clicked: false,
    currency: null,
    canForce: true,
    canBlackmail: false,
    canGold: true,
  },
  priest: {
    title: "Priest",
    description: "Six Support, Influence Cathedral",
    clicked: false,
    currency: null,
    canForce: true,
    canBlackmail: true,
    canGold: true,
  },
  aristocrat: {
    title: "Aristocrat",
    description: "Five Support, Three Gold, Influence Plantation",
    clicked: false,
    currency: null,
    canForce: true,
    canBlackmail: true,
    canGold: true,
  },
  merchant: {
    title: "Merchant",
    description: "Three Support, Five Gold, Influence Market",
    clicked: false,
    currency: null,
    canForce: true,
    canBlackmail: true,
    canGold: true,
  },
  printer: {
    title: "Printer",
    description: "Ten Support",
    clicked: false,
    currency: null,
    canForce: true,
    canBlackmail: true,
    canGold: true,
  },
  rogue: {
    title: "Rogue",
    description: "Two Blackmail",
    clicked: false,
    currency: null,
    canForce: false,
    canBlackmail: false,
    canGold: true,
  },
  spy: {
    title: "Spy",
    description: "Replace one Influence Cube with one of your own",
    clicked: false,
    currency: null,
    canForce: true,
    canBlackmail: false,
    canGold: true,
  },
  apothecary: {
    title: "Apothecary",
    description: "Swap the cubes in any two Influence Spheres",
    clicked: false,
    currency: null,
    canForce: false,
    canBlackmail: true,
    canGold: true,
  },
  mercenary: {
    title: "Mercenary",
    description: "Three Support One Force",
    clicked: false,
    currency: null,
    canForce: false,
    canBlackmail: false,
    canGold: true,
  },
};

const personReducer = (state = INITIAL_STATE, action) => {
  console.log('inside person reducer')
  let person;
  switch (action.type) {
    case "BRIBE_PERSON":
      person = state[action.payload.person];
      person.clicked = true;
      person.currency = action.payload.currency;
      return _.cloneDeep(state);
    case "UNBRIBE_PERSON":
      person = state[action.payload.person];
      person.clicked = false;
      person.currency = null;
      return _.cloneDeep(state);
    default:
      return state;
  }
};

export default personReducer;
