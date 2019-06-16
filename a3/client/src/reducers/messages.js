const initialState = {
  messages: [],
  loading: false,
  error: null
};

const messages = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MESSAGES_BEGIN':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_MESSAGES_SUCCESS':
      return {
        ...state,
        loading: false,
        messages: action.payload.messages
      };
    case 'FETCH_MESSAGES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        messages: []
      };
    default:
      return state;
  }
};

export default messages;
