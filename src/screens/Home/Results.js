import React from 'react';

import List from '../../components/List';

export default function Results({ results }) {
  return (
    <React.Fragment>
      <List items={results} />
    </React.Fragment>
  );
}
