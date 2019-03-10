import React from 'react';
import api from '../../api';

import Header from './Header';

import List from '../../components/List';

import { withContext } from '../../context';

function Home({ contextActions, contextState }) {
  const [isLoading, setLoading] = React.useState(false);

  const handleSubmit = async search => {
    await setLoading(true);
    const { setStateByKey } = contextActions;
    const { CLIENT_ACCESS_TOKEN } = api.config;
    const { SEARCH } = api.methods;
    await SEARCH(search, CLIENT_ACCESS_TOKEN).then(({ hits, artists }) => {
      setStateByKey('songs', hits);
      setStateByKey('artists', artists);
    });
    await setLoading(false);
  };

  const { artists, songs } = contextState;
  const displayResults = !isLoading && songs.length > 0 && artists.length > 0;

  return (
    <div className='Home'>
      <header className='Home__header'>
        <Header isLoading={isLoading} onSubmit={handleSubmit} />
      </header>
      {displayResults && (
        <section className='Home__results'>
          <List items={artists} type='artists' />
          <List items={songs} type='songs' />
        </section>
      )}
    </div>
  );
}

export default withContext(Home);
