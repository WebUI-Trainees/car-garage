const DateReducer = (state = 'pesho', action) => {
  switch (action.type) {
    case 'PICK_DATE':
      return action.id;
    // return {
    //   ...state,
    //   img: action.img
    // };
    case 'SELECTED_DATE':
      return action.selectedDate;
    default:
      return state;
  }
};

export default DateReducer;
