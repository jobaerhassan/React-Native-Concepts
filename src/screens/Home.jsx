import {View, Text} from 'react-native';
import React from 'react';
import CountDown from '../customCountDown/CountDown';
import InputWithDoubleIcon from '../core-components/text-input/InputWithDoubleIcon.component';

const Home = ({title = 'hello'}) => {
  return (
    <View style={{flex: 1}}>
      <InputWithDoubleIcon />
    </View>
  );
};

export default Home;
