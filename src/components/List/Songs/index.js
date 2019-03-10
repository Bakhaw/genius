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
        {items.map(({ result }) => {
          const { id, url } = result;
          return (
            <a
              key={`song-${id}`}
              href={url}
              rel='noopener noreferrer'
              target='_blank'
            >
              <ListItem>
                <Poster {...result} />
                <Detail {...result} />
              </ListItem>
            </a>
          );
        })}
      </MaterialList>
    </div>
  );
}
