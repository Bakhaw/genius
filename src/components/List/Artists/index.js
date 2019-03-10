import React from 'react';
import Link from 'react-router-dom/Link';
import MaterialList from '@material-ui/core/List';

import Detail from './Detail';
import Poster from './Poster';

import ListItem from '../../ListItem';
import Title from '../../Title';

export default function Artists({ items }) {
  return (
    <div className='List'>
      <Title title='artists' />
      <MaterialList component='nav'>
        {items.map(item => (
          <Link key={`artist-${item.id}`} to={`/artist/${item.id}`}>
            <ListItem>
              <Poster {...item} />
              <Detail {...item} />
            </ListItem>
          </Link>
        ))}
      </MaterialList>
    </div>
  );
}
