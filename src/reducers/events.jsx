const EventsReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_EVENTS':
      return action.payload.data.options;
    default:
      return state;
  }
};

export default EventsReducer;
