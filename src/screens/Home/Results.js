import React from 'react';

import List from '../../components/List';
import Title from '../../components/Title';

export default function Results({ results }) {
  return (
    <React.Fragment>
      <Title title='Songs' />
      <List items={results} title='Songs' />
    </React.Fragment>
  );
}
