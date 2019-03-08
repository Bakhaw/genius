import React from 'react';
import axios from 'axios';
import api from '../../api';

import Header from './Header';
import Results from './Results';

function Home() {
  const [isLoading, setLoading] = React.useState(false);
  const [hits, setHits] = React.useState([]);

  const handleSubmit = async search => {
    await setLoading(true);
    const { SEARCH, CLIENT_ACCESS_TOKEN } = api;
    const request = await axios.get(SEARCH(search, CLIENT_ACCESS_TOKEN));
    const { hits } = await request.data.response;
    await setHits(hits);
    await setLoading(false);
  };

  return (
    <div className='Home'>
      <header className='Home__header'>
        <Header isLoading={isLoading} onSubmit={handleSubmit} />
      </header>
      {!isLoading && hits.length > 0 && (
        <section className='Home__results'>
          <Results results={hits} />
        </section>
      )}
    </div>
  );
}

export default Home;
