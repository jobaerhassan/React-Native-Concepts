/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import ParentForwardRef from '../core-components/forward-ref/ParentForwardRef';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <ParentForwardRef />
    </View>
  );
};

export default Home;
