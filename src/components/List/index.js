import React from 'react';
import Songs from './Songs';

function List({ items, type }) {
  return (
    <div>
      <Songs items={items} />
    </div>
  );
}

export default List;
