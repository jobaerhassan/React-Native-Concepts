/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import InputWithDoubleIcon from '../core-components/text-input/InputWithDoubleIcon.component';
import EyeOnIcon from '../assets/icons/EyeOn.icon.asset';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <InputWithDoubleIcon
        rightIcon={<EyeOnIcon />}
        handlePressRight={() => console.log('hello')}
      />
    </View>
  );
};

export default Home;
