/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './app/stores/store';
import Skeleton from './app/containers/Skeleton';

const store = configureStore()

export default class NgonTinh extends Component {
  render() {
    return (
      <Provider store={store}>
        <Skeleton />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('NgonTinh', () => NgonTinh);
