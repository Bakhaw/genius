import React, { Component, createContext } from 'react';

const { Consumer, Provider } = createContext();

export const withContext = Comp => props => (
  <Consumer>{context => <Comp {...context} {...props} />}</Consumer>
);

export class MyProvider extends Component {
  state = {
    artists: [],
    songs: [],
    search: ''
  };

  setStateByKey = (key, value) => this.setState({ [key]: value });

  render() {
    const contextActions = {
      setStateByKey: this.setStateByKey
    };

    return (
      <Provider value={{ contextActions, contextState: this.state }}>
        {this.props.children}
      </Provider>
    );
  }
}
