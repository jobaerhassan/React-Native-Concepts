/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import InputWithDoubleIcon from '../core-components/text-input/InputWithDoubleIcon.component';
import EyeOnIcon from '../assets/icons/EyeOn.icon.asset';
import EmailIcon from '../assets/icons/Email.icon.asset';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <InputWithDoubleIcon rightIcon={<EyeOnIcon />} leftIcon={<EmailIcon />} />
    </View>
  );
};

export default Home;
