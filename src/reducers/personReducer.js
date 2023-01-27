const INITIAL_STATE = {
  generalClicked: false,
  captainClicked: false,
  innkeeperClicked: false,
  magistrateClicked: false,
  priestClicked: false,
  aristocratClicked: false,
  merchantClicked: false,
  printerClicked: false,
  rogueClicked: false,
  spyClicked: false,
  apothecaryClicked: false,
  mercenaryClicked: false,
};

const personReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SELECT_PERSON":
      switch (action.payload) {
        case "General":
          return { ...state, generalClicked: !state.generalClicked };
        case "Captain":
          return { ...state, captainClicked: !state.captainClicked };
        case "Innkeeper":
          return { ...state, innkeeperClicked: !state.innkeeperClicked };
        case "Magistrate":
          return { ...state, magistrateClicked: !state.magistrateClicked };
        case "Priest":
          return { ...state, priestClicked: !state.priestClicked };
        case "Aristocrat":
          return { ...state, aristocratClicked: !state.aristocratClicked };
        case "Merchant":
          return { ...state, merchantClicked: !state.merchantClicked };
        case "Printer":
          return { ...state, printerClicked: !state.printerClicked };
        case "Rogue":
          return { ...state, rogueClicked: !state.rogueClicked };
        case "Spy":
          return { ...state, spyClicked: !state.spyClicked };
        case "Apothecary":
          return { ...state, apothecaryClicked: !state.apothecaryClicked };
        case "Mercenary":
          return { ...state, mercenaryClicked: !state.mercenaryClicked };
        default:
          throw new Error("Person does not exist on bribe board");
      }
    default:
      return state;
  }
};

export default personReducer;
