import React from 'react';
import api from '../../api';

import Avatar from './Avatar';
import Banner from './Banner';
import Loader from '../../components/Loader';

function Artist(props) {
  const [isLoading, setLoading] = React.useState(false);
  const [artist, setArtist] = React.useState({});

  const getArtist = async () => {
    await setLoading(true);
    const { CLIENT_ACCESS_TOKEN } = api.config;
    const { GET_ARTIST } = api.methods;
    await GET_ARTIST(props.match.params.artistId, CLIENT_ACCESS_TOKEN).then(
      artist => setArtist(artist)
    );
    await setLoading(false);
  };

  React.useEffect(() => {
    getArtist();
  }, []);

  if (isLoading)
    return (
      <div className='Artist__loading'>
        <Loader />
      </div>
    );

  return (
    <div className='Artist'>
      <Banner artist={artist} />
      <Avatar artist={artist} />
    </div>
  );
}

export default Artist;
