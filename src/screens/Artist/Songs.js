import React from 'react';

import List from '../../components/List';

export default function Songs({ songs }) {
  return <List items={songs} type='songs' />;
}
