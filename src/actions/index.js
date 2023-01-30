export const bribePerson = (person, currency) => {
  return {
    type: 'BRIBE_PERSON',
    payload: {
      person: person,
      currency: currency
    }
  };
};

export const unbribePerson = (person, currency) => {
  console.log('sending out unbribe action')
  return {
    type: 'UNBRIBE_PERSON',
    payload: {
      person: person,
      currency: currency
    }
  };
};