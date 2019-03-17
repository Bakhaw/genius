import React from 'react';
import classNames from 'classnames';
import Divider from '@material-ui/core/Divider';
import Verified from '../../components/Verified';

export default function Header({ artist }) {
  return (
    <div className='Artist__Header'>
      <img
        alt='Artist avatar'
        className={classNames(
          'Artist__Header__avatar',
          artist.is_verified && 'Artist__Header__avatar__verified'
        )}
        src={artist.image_url}
      />
      <div className='Artist__Header__desc'>
        <div className='Artist__Header__desc__name'>
          <h3>{artist.name}</h3>
          {artist.is_verified && <Verified />}
        </div>
      </div>
      <Divider absolute className='Artist__Header__divider' />
    </div>
  );
}
