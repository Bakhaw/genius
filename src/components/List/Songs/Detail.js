import React from 'react';
import Eye from '@material-ui/icons/VisibilityOutlined';
import ListItemIcon from '@material-ui/core/ListItemIcon';

export default function Detail({ primary_artist, stats, title }) {
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
    <div className='ListItem__detail'>
      <div>
        <p className='ListItem__title'>{title}</p>
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
  );
}
