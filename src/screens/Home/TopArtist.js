import React from 'react';
import Link from 'react-router-dom/Link';
import ListItem from '@material-ui/core/ListItem';
import Title from '../../components/Title';

export default function TopArtist({ topArtist }) {
  const { id, image_url, name } = topArtist;
  return (
    <div className='Home__TopArtist'>
      <Title title='artist' />
      <Link to={`/artist/${id}`}>
        <ListItem button className='Home__TopArtist__item'>
          <img
            alt={`${name} poster`}
            className='Home__TopArtist__item__avatar'
            src={image_url}
          />
          <h3>{name}</h3>
        </ListItem>
      </Link>
    </div>
  );
}
