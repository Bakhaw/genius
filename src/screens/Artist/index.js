import React from 'react';
import api from '../../api';

import Banner from './Banner';
import Header from './Header';
import Songs from './Songs';

import Loader from '../../components/Loader';

function Artist(props) {
  const [isLoading, setLoading] = React.useState(false);
  const [artist, setArtist] = React.useState({});
  const [songs, setSongs] = React.useState([]);

  const getArtist = async () => {
    const { CLIENT_ACCESS_TOKEN } = api.config;
    const { GET_ARTIST } = api.methods;
    const { artistId } = props.match.params;
    await GET_ARTIST(artistId, CLIENT_ACCESS_TOKEN).then(artist =>
      setArtist(artist)
    );
  };

  const getArtistSongs = async () => {
    const { CLIENT_ACCESS_TOKEN } = api.config;
    const { GET_ARTIST_SONGS } = api.methods;
    const { artistId } = props.match.params;
    await GET_ARTIST_SONGS(artistId, 1, CLIENT_ACCESS_TOKEN).then(res =>
      setSongs(res)
    );
  };

  React.useEffect(() => {
    setLoading(true);
    getArtist();
    getArtistSongs();
    setLoading(false);
  }, []);

  if (isLoading)
    return (
      <div className='Artist__loading'>
        <Loader size={60} />
      </div>
    );

  return (
    <div className='Artist'>
      <Banner artist={artist} />
      <Header artist={artist} />
      <div className='Artist__songs'>
        <Songs songs={songs} />
      </div>
    </div>
  );
}

export default Artist;
