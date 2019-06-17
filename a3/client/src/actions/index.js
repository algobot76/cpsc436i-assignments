import { getMessages, postMessage } from '../api/messageService';

export function fetchMessages() {
  return dispatch => {
    dispatch(fetchMessagesBegin());
    return getMessages()
      .then(res => dispatch(fetchMessagesSuccess(res.data)))
      .catch(error => fetchMessagesFailure(error));
  };
}

export const FETCH_MESSAGES_BEGIN = 'FETCH_MESSAGES_BEGIN';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

export const fetchMessagesBegin = () => ({
  type: FETCH_MESSAGES_BEGIN
});

export const fetchMessagesSuccess = messages => ({
  type: FETCH_MESSAGES_SUCCESS,
  payload: { messages }
});

export const fetchMessagesFailure = error => ({
  type: FETCH_MESSAGES_FAILURE,
  payload: { error }
});

function addMessage(message) {
  return dispatch => {
    dispatch(addMessageBegin(message));
    return postMessage(message)
      .then(() => dispatch(addMessageSuccess()))
      .catch(err => dispatch(addMessageFailure(err)));
  };
}

export const ADD_MESSAGE_BEGIN = 'ADD_MESSAGE_BEGIN';
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const ADD_MESSAGE_FAILURE = 'ADD_MESSAGE_FAILURE';

export const addMessageBegin = message => ({
  type: ADD_MESSAGE_BEGIN,
  payload: { message }
});

export const addMessageSuccess = () => ({
  type: ADD_MESSAGE_SUCCESS
});

export const addMessageFailure = error => ({
  type: ADD_MESSAGE_FAILURE,
  payload: { error }
});
