const INITIAL_STATE = {
  support: 0,
  force: 0,
  blackmail: 0,
  gold: 5,
};

const playerReducer = (state = INITIAL_STATE, action) => {
  console.log('inside player reducer')
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
