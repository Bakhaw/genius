import React from 'react';
import api from '../../api';

import Banner from './Banner';
import Header from './Header';
import Songs from './Songs';

import Button from '../../components/Button';
import Loader from '../../components/Loader';

function Artist(props) {
  const { CLIENT_ACCESS_TOKEN } = api.config;
  const { GET_ARTIST, GET_ARTIST_SONGS } = api.methods;
  const { artistId } = props.match.params;

  const [isLoading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [artist, setArtist] = React.useState({});
  const [songs, setSongs] = React.useState([]);

  const getArtist = async () => {
    await GET_ARTIST(artistId, CLIENT_ACCESS_TOKEN).then(artist => {
      setArtist(artist);
      document.title = `Genius | ${artist.name}`;
    });
  };

  const getArtistSongs = async pageNumber => {
    await GET_ARTIST_SONGS(artistId, pageNumber, CLIENT_ACCESS_TOKEN).then(
      res => {
        const newSongs = [...songs, ...res];
        setSongs(newSongs);
      }
    );
  };

  const fetchData = async () => {
    await setLoading(true);
    await getArtist();
    await getArtistSongs(page);
    await setLoading(false);
  };

  const fetchMoreData = async () => {
    await setLoading(true);
    await setPage(page + 1);
    await getArtistSongs(page + 1);
    await setLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  if (isLoading && songs.length === 0)
    return (
      <div className='Artist__loading'>
        <Loader size={60} />
      </div>
    );

  return (
    <main className='Artist'>
      <Banner artist={artist} />
      <Header artist={artist} />
      <div className='Artist__songs'>
        <Songs songs={songs} />
      </div>
      <Button className='Artist__fetch-more__button' onClick={fetchMoreData}>
        {isLoading ? <Loader size={30} /> : 'More'}
      </Button>
    </main>
  );
}

export default Artist;
