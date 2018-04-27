import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from './app/components/AppHeader';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1c4e9',
    alignItems:'flex-start'
  },
});
