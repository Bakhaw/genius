import React from 'react';
import api from '../../api';
import Banner from './Banner';
import Avatar from './Avatar';

function Artist(props) {
  const [artist, setArtist] = React.useState({});

  React.useEffect(() => {
    const { CLIENT_ACCESS_TOKEN } = api.config;
    const { GET_ARTIST } = api.methods;
    GET_ARTIST(props.match.params.artistId, CLIENT_ACCESS_TOKEN).then(artist =>
      setArtist(artist)
    );
  }, []);

  return (
    <div className='Artist'>
      <Banner artist={artist} />
      <Avatar artist={artist} />
    </div>
  );
}

export default Artist;
