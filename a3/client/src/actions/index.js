function getMessages() {
  return fetch('http://localhost:5000/messages', {
    mode: 'no-cors'
  })
    .then(handleErrors)
    .then(res => {
      return res.json();
  });
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchMessages() {
  return dispatch => {
    dispatch(fetchMessagesBegin());
    return getMessages()
      .then(json => {
        dispatch(fetchMessagesSuccess(json.messages));
        return json.messages;
      })
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
