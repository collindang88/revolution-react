const INITIAL_STATE = {
  support: 0,
  force: 1,
  blackmail: 1,
  gold: 3,
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "BRIBE_PERSON":
      return {...state, [action.payload.currency]: state[action.payload.currency] - 1 }
    case "UNBRIBE_PERSON":
      return {...state, [action.payload.currency]: state[action.payload.currency] + 1 }
    default:
      return state;
  }
};

export default playerReducer;
