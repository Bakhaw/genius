import React from 'react';

export default function Avatar({ artist }) {
  return (
    <div className='Artist__Avatar'>
      <img alt='Profile avatar' src={artist.image_url} />
      <h3>{artist.name}</h3>
    </div>
  );
}
