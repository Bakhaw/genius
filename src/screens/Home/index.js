import React from 'react';
import api from '../../api';

import Header from './Header';

import List from '../../components/List';

function Home() {
  const [isLoading, setLoading] = React.useState(false);
  const [artists, setArtists] = React.useState({});
  const [hits, setHits] = React.useState([]);

  const handleSubmit = async search => {
    await setLoading(true);
    const { CLIENT_ACCESS_TOKEN } = api.config;
    const { SEARCH } = api.methods;
    await SEARCH(search, CLIENT_ACCESS_TOKEN).then(({ hits, artists }) => {
      setHits(hits);
      setArtists(artists);
    });
    await setLoading(false);
  };

  return (
    <div className='Home'>
      <header className='Home__header'>
        <Header isLoading={isLoading} onSubmit={handleSubmit} />
      </header>
      {!isLoading && hits.length > 0 && artists.length > 0 && (
        <section className='Home__results'>
          <List items={artists} type='artists' />
          <List items={hits} type='songs' />;
        </section>
      )}
    </div>
  );
}

export default Home;
