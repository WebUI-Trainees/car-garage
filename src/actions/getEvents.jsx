import axios from 'axios';

const getEvents = () => {
  const request = axios.get('src/data/events.json');

  return {
    type: 'GET_EVENTS',
    payload: request
  };
};

export default getEvents;
