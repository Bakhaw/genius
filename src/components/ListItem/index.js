import React from 'react';
import MaterialListItem from '@material-ui/core/ListItem';

export default function ListItem({
  primary_artist,
  song_art_image_thumbnail_url,
  stats,
  title,
  url
}) {
  const numberOfViews =
    stats.pageviews !== undefined
      ? Number(stats.pageviews).toLocaleString()
      : '';

  return (
    <a href={url} rel='noopener noreferrer' target='_blank'>
      <MaterialListItem button className='ListItem'>
        <img
          alt='Artist poster'
          className='ListItem__poster'
          src={song_art_image_thumbnail_url}
        />
        <div className='ListItem__detail'>
          <div>
            <p className='ListItem__detail__title'>{title}</p>
            <p className='ListItem__detail__artist'>{primary_artist.name}</p>
          </div>
          <p className='ListItem__detail__pageviews'>{numberOfViews}</p>
        </div>
      </MaterialListItem>
    </a>
  );
}
