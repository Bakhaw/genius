import React from 'react';
import MaterialList from '@material-ui/core/List';

import Detail from './Detail';
import Poster from './Poster';

import ListItem from '../../ListItem';
import Title from '../../Title';

export default function Songs({ items }) {
  return (
    <div className='List'>
      <Title title='songs' />
      <MaterialList component='nav'>
        {items.map(item => (
          <a
            key={`song-${item.id}`}
            href={item.url}
            rel='noopener noreferrer'
            target='_blank'
          >
            <ListItem>
              <Poster {...item} />
              <Detail {...item} />
            </ListItem>
          </a>
        ))}
      </MaterialList>
    </div>
  );
}
