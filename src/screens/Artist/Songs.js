import React from 'react';

import List from '../../components/List';

export default function Songs({ songs }) {
  return (
    <div>
      <List items={songs} type='songs' />
    </div>
  );
}
