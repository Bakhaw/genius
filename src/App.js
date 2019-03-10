import React from 'react';
import { MyProvider } from './context';
import Router from './Router';
import UpdateApp from './components/UpdateApp';

export default function App() {
  return (
    <React.Fragment>
      <MyProvider>
        <Router />
        <UpdateApp />
      </MyProvider>
    </React.Fragment>
  );
}
