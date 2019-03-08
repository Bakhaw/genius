import React from 'react';
import Link from 'react-router-dom/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Brand from '../../images/brand.png';

export default function NavBar() {
  return (
    <nav>
      <AppBar position='static' color='default' className='NavBar'>
        <Toolbar>
          <Link className='NavBar__brand' to='/'>
            <img alt='Genius logo' src={Brand} />
          </Link>
        </Toolbar>
      </AppBar>
    </nav>
  );
}
