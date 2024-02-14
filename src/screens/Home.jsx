/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import UploadCSV from '../features/UploadCSV';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <UploadCSV />
    </View>
  );
};

export default Home;
