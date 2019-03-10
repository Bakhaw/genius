import React from 'react';
import Artists from './Artists';
import Songs from './Songs';

function List({ items, type }) {
  return (
    <div>
      {type === 'songs' && <Songs items={items} />}
      {type === 'artists' && <Artists items={items} />}
    </div>
  );
}

export default List;
