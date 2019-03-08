import React from 'react';
import Router from './Router';
import UpdateApp from './components/UpdateApp';

export default function App() {
  return (
    <React.Fragment>
      <Router />
      <UpdateApp />
    </React.Fragment>
  );
}
