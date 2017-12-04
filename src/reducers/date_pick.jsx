const DateReducer = (state = { img: '' }, action) => {
  switch (action.type) {
    case 'PICK_DATE':
      return action.id;
    // return {
    //   ...state,
    //   img: action.img
    // };
    case 'SELECTED_DATE':
      return { ...state, selected: action.selected };
    default:
      return state;
  }
};

export default DateReducer;
