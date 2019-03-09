import React from 'react';
import api from '../../api';

import Header from './Header';
import Results from './Results';
import TopArtist from './TopArtist';

function Home() {
  const [isLoading, setLoading] = React.useState(false);
  const [topArtist, setTopArtist] = React.useState({});
  const [hits, setHits] = React.useState([]);

  const handleSubmit = async search => {
    await setLoading(true);
    const { CLIENT_ACCESS_TOKEN } = api.config;
    const { SEARCH } = api.methods;
    await SEARCH(search, CLIENT_ACCESS_TOKEN).then(({ hits, topArtist }) => {
      setHits(hits);
      setTopArtist(topArtist);
    });
    await setLoading(false);
  };

  return (
    <div className='Home'>
      <header className='Home__header'>
        <Header isLoading={isLoading} onSubmit={handleSubmit} />
      </header>
      {!isLoading && hits.length > 0 && (
        <section className='Home__results'>
          <TopArtist topArtist={topArtist} />
          <Results results={hits} />
        </section>
      )}
    </div>
  );
}

export default Home;
