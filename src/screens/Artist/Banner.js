import React from 'react';
import PrevButton from '../../components/PrevButton';

export default function Banner({ artist }) {
  const backgroundImage = `linear-gradient(to top, rgb(0,0,0) 0, rgba(0,0,0, 0.3) 80%), url(${
    artist.header_image_url
  })`;
  return (
    <div className='Artist__Banner' style={{ backgroundImage }}>
      <PrevButton />
    </div>
  );
}
