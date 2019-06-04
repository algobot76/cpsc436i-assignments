import React from 'react';
import PropTypes from 'prop-types';
import './Popup.css';

const Popup = ({ onClick, text }) => (
  <div className="popup">
    <div className="popup_inner">
      <h1>{text}</h1>
      <button onClick={onClick}>Close me</button>
    </div>
  </div>
);

Popup.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Popup;
