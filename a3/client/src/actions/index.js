import axios from 'axios';

const a3 = axios.create({
  baseURL: 'localhost:5000'
});

function getMessages() {
  return a3
    .get('/messages')
    .then(messages => messages)
    .catch(err => err);
}

export function fetchMessages() {
  return dispatch => {
    dispatch(fetchMessagesBegin());
    return getMessages()
      .then(res => dispatch(fetchMessagesSuccess(res)))
      .catch(err => dispatch(fetchMessagesFailure(err)));
  };
}

export const fetchMessagesBegin = () => ({
  type: 'FETCH_MESSAGES_BEGIN'
});

export const fetchMessagesSuccess = messages => ({
  type: 'FETCH_MESSAGES_SUCCESS',
  payload: { messages }
});

export const fetchMessagesFailure = error => ({
  type: 'FETCH_MESSAGES_FAILURE',
  payload: { error }
});

