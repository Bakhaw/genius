import React from 'react';
import MaterialList from '@material-ui/core/List';
import ListItem from '../ListItem';

function List({ items }) {
  return (
    <div className='List'>
      <MaterialList component='nav'>
        {items.map(({ result }) => (
          <ListItem key={result.id} {...result} />
        ))}
      </MaterialList>
    </div>
  );
}

export default List;
