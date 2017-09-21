// import library to help create a component
import React from 'react';
// import ReactNative from 'react-native';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => (
  <View style={{flex: 1}}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// render it to the device
AppRegistry.registerComponent('newr', () => App);