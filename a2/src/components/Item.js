import React from 'react';
import Popup from './Popup';
import PropTypes from 'prop-types';

class Item extends React.Component {
  state = {
    showPopup: false
  };

  closePopup = () => {
    this.setState({
      showPopup: false
    });
  };

  openPopup = () => {
    console.log('fuck');
    this.setState({
      showPopup: true
    });
  };

  render() {
    return (
      <div>
        <div>
          <li
            style={{
              textDecoration: this.props.completed ? 'line-through' : 'none'
            }}
          >
            {this.props.text}
          </li>
          <button type="button" onClick={this.props.onClick}>
            {this.props.completed ? 'restore' : 'delete'}
          </button>
          <button type="button" onClick={this.openPopup}>Popup</button>
        </div>
        <div>
          {this.state.showPopup ? (
            <Popup onClick={this.closePopup} text={this.props.text} />
          ) : null}
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  showPopup: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Item;
