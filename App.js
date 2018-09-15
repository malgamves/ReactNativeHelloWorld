/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Ohh Mr. Fancy Pants with the iPhone\n',
  android:
    'What will we do next?\n',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: 'https://octodex.github.com/images/privateinvestocat.jpg'}}
      />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>We're going to have lots of fun with this one</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171516',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
  image: {
    width: 400,
    height: 400,
  },
});
