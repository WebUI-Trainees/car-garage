import * as actionType from '../actions/constants';

const defaultState = {
  data: [],
  error: false
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case actionType.FETCH_CONVERSATIONS:
      return { data: payload.data, error: !!payload.error };
    default:
      return state;
  }
};
