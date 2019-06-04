import React, { useState } from 'react';
import Popup from './Popup';
import PropTypes from 'prop-types';

function Item({ onClick, completed, text }) {
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div>
        <li
          style={{
            textDecoration: completed ? 'line-through' : 'none'
          }}
        >
          {text}
        </li>
        <button type="button" onClick={onClick}>
          {completed ? 'restore' : 'delete'}
        </button>
        <button type="button" onClick={openPopup}>
          Popup
        </button>
      </div>
      <div>
        {showPopup ? (
          <Popup onClick={closePopup} text={text} />
        ) : null}
      </div>
    </div>
  );
}

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  showPopup: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Item;
