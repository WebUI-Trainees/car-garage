// import uuid from 'uuid';

const DatePicker = ({ img = 'image1', id, title = 'demotitle' }) => ({
  type: 'PICK_DATE',
  id,
  title,
  text: '',
  img
});

const SelectedDate = selected => ({
  type: 'SELECTED_DATE',
  selected
});

export { DatePicker, SelectedDate };
