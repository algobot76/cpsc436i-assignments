import React from 'react';
import PropTypes from 'prop-types';
import Clock from './Clock';
import './Popup.css';

const Popup = ({ onClick }) => (
  <div className="popup">
    <div className="popup-inner">
      <Clock />
      <div className="close-me">
        <button onClick={onClick}>Close me</button>
      </div>
    </div>
  </div>
);

Popup.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Popup;
