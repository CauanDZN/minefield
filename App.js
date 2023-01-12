import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import params from './src/params'
import Field from './src/components/Field';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Teste</Text>

        <Field />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});
