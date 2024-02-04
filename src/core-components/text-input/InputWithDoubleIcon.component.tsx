import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
// Left Icon
// Right Icon
// onChangeText
// right icon press
// left icon press
// input field props required
// rest are extra props
// 
const InputWithDoubleIcon: React.FC = ({onChangeText}: any) => {
  return (
    <View style={styles.container}>
      <TextInput onChangeText={onChangeText}  />
    </View>
  );
};
export default InputWithDoubleIcon;
const styles = StyleSheet.create({
  container: {},
});
