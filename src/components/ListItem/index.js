import React from 'react';
import MaterialListItem from '@material-ui/core/ListItem';
import Eye from '@material-ui/icons/VisibilityOutlined';
import ListItemIcon from '@material-ui/core/ListItemIcon';

export default function ListItem({
  primary_artist,
  song_art_image_thumbnail_url,
  stats,
  title,
  url
}) {
  const formatViews = views => {
    // ty https://stackoverflow.com/a/40724354
    const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];

    const tier = (Math.log10(views) / 3) | 0;

    if (tier === 0) return views;

    const suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = views / scale;

    return scaled.toFixed(1) + suffix;
  };

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
          {stats.pageviews && (
            <div className='ListItem__detail__pageviews'>
              <ListItemIcon>
                <Eye fontSize='small' />
              </ListItemIcon>
              <span>{formatViews(stats.pageviews)}</span>
            </div>
          )}
        </div>
      </MaterialListItem>
    </a>
  );
}
