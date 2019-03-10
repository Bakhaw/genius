import React from 'react';

export default function Poster({ image_url, name }) {
  return (
    <img
      alt={`${name} poster`}
      className='ListItem__poster__rounded'
      src={image_url}
    />
  );
}
