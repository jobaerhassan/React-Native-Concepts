import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
// Left Icon
// Right Icon
// onChangeText
// right icon press
// left icon press
// input field props required
// rest are extra props
//design

const InputWithDoubleIcon: React.FC = ({
  onChangeText,
  rightIcon,
  leftIcon,
  disabledLeft = false,
  disableRight = false,
  handlePressLeft = () => {},
  handlePressRight = () => {},
  multiline = false,
}: any) => {
  return (
    <View style={styles.container}>
      {leftIcon && (
        <TouchableOpacity
          onPress={handlePressRight}
          style={styles.icon}
          disabled={disableRight}>
          {leftIcon}
        </TouchableOpacity>
      )}

      <TextInput
        onChangeText={onChangeText}
        style={styles.inputStyle}
        multiline={multiline}
      />
      {rightIcon && (
        <TouchableOpacity
          onPress={handlePressLeft}
          style={styles.icon}
          disabled={disabledLeft}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};
export default InputWithDoubleIcon;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 12,
  },
  inputStyle: {
    flex: 1,
  },
  icon: {
    paddingHorizontal: 10,
  },
});

// autoCorrect
//
