import React from 'react';
import MaterialList from '@material-ui/core/List';
import ListItem from '../ListItem';

function List({ items }) {
  return (
    <div className='List'>
      <h1>Songs</h1>
      <MaterialList component='nav'>
        {items.map(({ result }) => (
          <ListItem key={result.id} {...result} />
        ))}
      </MaterialList>
    </div>
  );
}

export default List;
