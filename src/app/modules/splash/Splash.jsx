/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ButtonAnim from '../animation/ButtonAnim';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ButtonAnim />
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {},
});
