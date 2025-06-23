import React from 'react';
import {StyleSheet, View} from 'react-native';

const Ball = () => {
  return <View style={styles.container} />;
};

export default Ball;
const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
  },
});
