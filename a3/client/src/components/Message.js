import React from 'react';
import PropTypes from 'prop-types';

function Message({ msg }) {
  return <li>{msg}</li>;
}

Message.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Message;
