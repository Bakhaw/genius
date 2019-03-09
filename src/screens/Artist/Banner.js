import React from 'react';

export default function Banner({ artist }) {
  return (
    <div
      className='Artist__Banner'
      style={{
        backgroundImage: `linear-gradient(to top, rgb(0,0,0) 0, rgba(0,0,0, 0.3) 80%), url(${
          artist.header_image_url
        })`
      }}
    />
  );
}
