const INITIAL_STATE = {
  support: 0,
  force: 1,
  blackmail: 1,
  gold: 3,
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "BRIBE_PERSON":
      if (action.payload.currency === "force") {
        return { ...state, force: state.force - 1 };
      } else if (action.payload.currency === "blackmail") {
        return { ...state, blackmail: state.blackmail - 1 };
      } else if (action.payload.currency === "gold") {
        return { ...state, gold: state.gold - 1 };
      }
      throw Error("currency passed was not valid");
    case "UNBRIBE_PERSON":
      if (action.payload.currency === "force") {
        return { ...state, force: state.force + 1 };
      } else if (action.payload.currency === "blackmail") {
        return { ...state, blackmail: state.blackmail + 1 };
      } else if (action.payload.currency === "gold") {
        return { ...state, gold: state.gold + 1 };
      }
      throw Error("currency passed was not valid");
    default:
      return state;
  }
};

export default playerReducer;
