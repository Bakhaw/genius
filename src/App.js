import React, { Component } from 'react';
import Router from './Router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { hasUpdate: undefined };
  }

  componentWillMount() {
    if (window.swObservable) {
      window.swObservable.subscribe(hasUpdate => this.setState({ hasUpdate }));
    }
  }
  render() {
    const { hasUpdate } = this.state;
    return (
      <div>
        <Router />
        {hasUpdate !== undefined &&
          (hasUpdate ? (
            <p className='sw-notification'>
              Une mise à jour est disponible. Veuillez rafraîchir l'application.
            </p>
          ) : (
            <p className='sw-notification'>
              L'application est maintenant en cache et prête à être utilisée
              hors ligne.
            </p>
          ))}
      </div>
    );
  }
}

export default App;
