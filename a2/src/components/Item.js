import React from 'react';
import Popup from './Popup';
import { connect } from 'react-redux';
import { openPopup, closePopup } from '../actions';
import PropTypes from 'prop-types';

function Item({
  showPopup,
  handleOpenPopup,
  handleClosePopup,
  onClick,
  deleted,
  text
}) {
  return (
    <div>
      <div>
        <li
          style={{
            textDecoration: deleted ? 'line-through' : 'none'
          }}
        >
          {text}
        </li>
        <button type="button" onClick={onClick}>
          {deleted ? 'restore' : 'delete'}
        </button>
        <button type="button" onClick={handleOpenPopup}>
          Popup
        </button>
      </div>
      <div>{showPopup ? <Popup onClick={handleClosePopup} /> : null}</div>
    </div>
  );
}

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  deleted: PropTypes.bool.isRequired,
  showPopup: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  showPopup: state.showPopup
});

const mapDispatchToProps = dispatch => ({
  handleOpenPopup: () => dispatch(openPopup),
  handleClosePopup: () => dispatch(closePopup)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
