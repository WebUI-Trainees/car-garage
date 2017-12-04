// import uuid from 'uuid';

const DatePicker = ({ img = 'image1', id, title = 'demotitle' }) => ({
  type: 'PICK_DATE',
  id,
  title,
  text: '',
  img
});

const SelectedDate = selectedDate => ({
  type: 'SELECTED_DATE',
  selectedDate
});

export { DatePicker, SelectedDate };
