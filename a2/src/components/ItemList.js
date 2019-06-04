import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './ItemList.css';

const ItemList = ({ items, toggleItem }) => (
  <ul className="list">
    {items.map(item => (
      <Item className="list-item" key={item.id} {...item} onClick={() => toggleItem(item.id)} />
    ))}
  </ul>
);

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      deleted: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleItem: PropTypes.func.isRequired
};

export default ItemList;
