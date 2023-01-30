import _ from "lodash";

const INITIAL_STATE = {
  general: {
    title: "General",
    description: "One Support, One Force, Influence Fortress",
    clicked: false,
    canForce: false,
    canBlackmail: true,
    canGold: true,
  },
  captain: {
    title: "Captain",
    description: "One Support, One Force, Influence Harbor",
    clicked: false,
    canForce: false,
    canBlackmail: true,
    canGold: true,
  },
  innkeeper: {
    title: "InnKeeper",
    description: "Three Support, One Blackmail, Influence Tavern",
    clicked: false,
    canForce: true,
    canBlackmail: false,
    canGold: true,
  },
  magistrate: {
    title: "Magistrate",
    description: "One Support, One Blackmail, Influence Townhall",
    clicked: false,
    canForce: true,
    canBlackmail: false,
    canGold: true,
  },
  priest: {
    title: "Priest",
    description: "Six Support, Influence Cathedral",
    clicked: false,
    canForce: true,
    canBlackmail: true,
    canGold: true,
  },
  aristocrat: {
    title: "Aristocrat",
    description: "Five Support, Three Gold, Influence Plantation",
    clicked: false,
    canForce: true,
    canBlackmail: true,
    canGold: true,
  },
  merchant: {
    title: "Merchant",
    description: "Three Support, Five Gold, Influence Market",
    clicked: false,
    canForce: true,
    canBlackmail: true,
    canGold: true,
  },
  printer: {
    title: "Printer",
    description: "Ten Support",
    clicked: false,
    canForce: true,
    canBlackmail: true,
    canGold: true,
  },
  rogue: {
    title: "Rogue",
    description: "Two Blackmail",
    clicked: false,
    canForce: false,
    canBlackmail: false,
    canGold: true,
  },
  spy: {
    title: "Spy",
    description: "Replace one Influence, Cube with one of, your own",
    clicked: false,
    canForce: true,
    canBlackmail: false,
    canGold: true,
  },
  apothecary: {
    title: "Apthecary",
    description: "Swap the cubes in any, two Influence Spheres",
    clicked: false,
    canForce: false,
    canBlackmail: true,
    canGold: true,
  },
  mercenary: {
    title: "Mercenary",
    description: "Three Support, One Force",
    clicked: false,
    canForce: false,
    canBlackmail: false,
    canGold: true,
  },
};

const personReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SELECT_PERSON":
      console.log(action.payload)
      console.log(state[action.payload])
      state[action.payload].clicked = !state[action.payload].clicked;
      return _.cloneDeep(state);
    default:
      return state;
  }
};

export default personReducer;
