import * as actionType from '../actions/constants';

const defaultState = {
  data: {
    name: '',
    conversations: [],
    orders: []
  },
  error: false
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case actionType.FETCH_CONVERSATION:
      return { data: payload.data, error: !!payload.error };
    default:
      return state;
  }
};
