import React from 'react';

export default function Poster({ song_art_image_thumbnail_url }) {
  return (
    <img
      alt='Artist poster'
      className='ListItem__poster'
      src={song_art_image_thumbnail_url}
    />
  );
}
