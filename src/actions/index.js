import axios from 'axios';

import { FETCH_CONVERSATION, FETCH_CONVERSATIONS, API_URL } from './constants';

export const fatchConversations = () => {
  const request = axios.get(API_URL);

  return {
    type: FETCH_CONVERSATIONS,
    payload: request
  };
};

export const fatchConversation = userName => {
  const request = axios.get(`${API_URL}/user/${userName}`);

  return {
    type: FETCH_CONVERSATION,
    payload: request
  };
};
