import React from 'react';

const NavBar = ({
  items, 
  onGenreSelect, 
  selectedGenre,
  textProperty,
  valueProperty
}) => {

  return(
    <nav>
      <ul className='NavBar'>
        {items.map(item => (
          <li
            className={selectedGenre === item ? 'active' : ''}
            key={item[valueProperty]}
            onClick={() =>onGenreSelect(item)}
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    </nav>
  );
}

NavBar.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
}

export default NavBar;