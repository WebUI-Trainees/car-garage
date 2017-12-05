const ItemReducer = (state = { date: '', text: '', imageSrc: '' }, action) => {
  switch (action.type) {
    case 'SELECTED_ITEM':
      return action.item;
    default:
      return state;
  }
};

export default ItemReducer;
