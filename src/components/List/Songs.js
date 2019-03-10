import React from 'react';
import MaterialList from '@material-ui/core/List';
import ListItem from '../ListItem';

// TODO make lists for <Songs /> and an <Artists />
export default function Songs({ items }) {
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
