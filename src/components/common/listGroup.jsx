import React from 'react';
import PropTypes from 'prop-types';

const ListGroup = ({
  items,
  onItemSelect,
  textProperty,
  valueProperty,
  selectedItem
}) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={Math.random()}
          onClick={() => onItemSelect(item)}
          className={
            item === selectedItem ? 'list-group-item active' : 'list-group-item'
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
};

ListGroup.propTypes = {
  items: PropTypes.array.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.object.isRequired,
  textProperty: PropTypes.string,
  valueProperty: PropTypes.string
};

export default ListGroup;
