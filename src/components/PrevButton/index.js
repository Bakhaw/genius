import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';

function PrevButton({ history }) {
  const handleClick = () => history.goBack();

  return (
    <IconButton className='PrevButton' onClick={handleClick}>
      <ArrowBack fontSize='large' />
    </IconButton>
  );
}
export default withRouter(PrevButton);
