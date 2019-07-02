import React from 'react';
import { useDispatch } from 'react-redux';
import { removeMessage } from '../actions';

function Message({ id, msg }) {
  const dispatch = useDispatch();

  return (
    <li key={id} onClick={() => dispatch(removeMessage(id))}>
      {msg}
    </li>
  );
}

export default Message;
